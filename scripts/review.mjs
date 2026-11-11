import { mkdir, writeFile } from 'node:fs/promises'
import { chromium } from 'playwright'

const baseURL = process.env.PORTFOLIO_URL || 'http://127.0.0.1:5186'
const words = (text) => text.match(/[\p{L}\p{N}]+(?:[’'–/-][\p{L}\p{N}]+)*/gu) || []
const sentences = new Intl.Segmenter('en', { granularity: 'sentence' })
const countWords = (text) => words(text).length
const luminance = (hex) => {
  const channels = hex.match(/[a-f\d]{2}/gi).map((value) => parseInt(value, 16) / 255)
  const linear = channels.map((value) =>
    value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  )
  return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722
}
const contrast = (a, b) => {
  const values = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return Number(((values[0] + 0.05) / (values[1] + 0.05)).toFixed(2))
}
const browser = await chromium.launch({ headless: true })
await mkdir('.qa', { recursive: true })
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
  await page.goto(baseURL, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  const measure = await page.evaluate(() => {
    const narrative = [
      ...document.querySelectorAll(
        '.hero-description, .project-copy .project-summary, .project-outcome, .experience-description, .contact-section > p'
      )
    ]
    const controls = [...document.querySelectorAll('a, button')].filter((element) => {
      const box = element.getBoundingClientRect()
      return box.width > 0 && box.height > 0 && element.className !== 'skip-link'
    })
    const hero = document.querySelector('.hero').getBoundingClientRect()
    return {
      intro: document.querySelector('.hero-description').textContent.trim(),
      headings: [...document.querySelectorAll('main h1, main h2, main h3')].map((element) =>
        element.textContent.trim()
      ),
      projects: [...document.querySelectorAll('[data-project]')].map((element) => ({
        project: element.querySelector('h3').textContent.trim(),
        role: element.querySelector('.project-role').textContent.trim(),
        summary: element.querySelector('.project-summary').textContent.trim(),
        technologies: element.querySelector('.technology-list').textContent.trim()
      })),
      narrative: narrative.map((element) => ({
        text: element.textContent.trim(),
        fontSize: parseFloat(getComputedStyle(element).fontSize),
        lineHeightRatio:
          parseFloat(getComputedStyle(element).lineHeight) /
          parseFloat(getComputedStyle(element).fontSize)
      })),
      controls: controls.map((element) => ({
        label: element.textContent.trim() || element.getAttribute('aria-label'),
        height: element.getBoundingClientRect().height
      })),
      heroHeight: hero.height,
      firstProjectTop: document.querySelector('[data-project="omni"] h3').getBoundingClientRect()
        .top,
      pageHeight: document.documentElement.scrollHeight,
      text: document.querySelector('main').innerText
    }
  })
  await page.screenshot({ path: '.qa/desktop-first-screen.png' })
  await page.setViewportSize({ width: 390, height: 1000 })
  await page.screenshot({ path: '.qa/mobile-first-screen.png' })
  const reflow = []
  for (const width of [1440, 1280, 1024, 768, 760, 390, 375, 320]) {
    await page.setViewportSize({ width, height: 1000 })
    reflow.push(
      await page.evaluate(() => ({
        width: innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        pass: document.documentElement.scrollWidth <= innerWidth + 1
      }))
    )
  }
  await page.close()
  const sentenceCounts = measure.narrative.flatMap(({ text }) =>
    [...sentences.segment(text)].map((item) => countWords(item.segment)).filter(Boolean)
  )
  const rejectedPhrases = [
    'software that makes work feel simpler',
    'built for real use',
    'a better way to build the tools behind the work',
    'hands-on. across the stack',
    'understand the work',
    'have a role in mind'
  ]
  const flattened = measure.text.toLowerCase().replace(/\s+/g, ' ')
  const report = {
    date: '2026-11-11',
    scope:
      'Local homepage at 1440×1000, plus reflow at eight viewport widths. These are editorial and layout checks, not a hiring-success score or a complete WCAG audit.',
    content: {
      introWords: countWords(measure.intro),
      projectSummaries: measure.projects.map(({ project, summary, role, technologies }) => ({
        project,
        words: countWords(summary),
        hasRole: Boolean(role),
        hasTechnologiesOrScope: Boolean(technologies)
      })),
      narrativeSentences: sentenceCounts.length,
      averageWordsPerSentence: Number(
        (sentenceCounts.reduce((a, b) => a + b, 0) / sentenceCounts.length).toFixed(1)
      ),
      longestSentenceWords: Math.max(...sentenceCounts),
      rejectedPhraseMatches: rejectedPhrases.filter((phrase) => flattened.includes(phrase)),
      headings: measure.headings,
      editorialTargets: {
        introMaxWords: 45,
        projectSummaryMaxWords: 40,
        averageSentenceMaxWords: 22,
        longestSentenceMaxWords: 30
      }
    },
    layout: {
      heroHeight: Number(measure.heroHeight.toFixed(1)),
      firstProjectHeadingTop: Number(measure.firstProjectTop.toFixed(1)),
      pageHeight: measure.pageHeight,
      narrativeFontSizeMin: Math.min(...measure.narrative.map((item) => item.fontSize)),
      narrativeLineHeightRatioMin: Math.min(
        ...measure.narrative.map((item) => item.lineHeightRatio)
      ),
      visibleControlHeightMin: Math.min(...measure.controls.map((item) => item.height)),
      visibleControlsMeasured: measure.controls.length,
      reflow
    },
    contrast: {
      scope: 'CSS palette pairs; automated axe scans separately check rendered text.',
      normalTextThreshold: 4.5,
      bodyOnWhite: contrast('#202e38', '#ffffff'),
      secondaryTextOnWhite: contrast('#53616c', '#ffffff'),
      linksOnWhite: contrast('#235579', '#ffffff'),
      whiteOnPrimaryButton: contrast('#ffffff', '#172d3d')
    }
  }
  await writeFile('.qa/content-review.json', JSON.stringify(report, null, 2) + '\n')
  console.log(JSON.stringify(report, null, 2))
} finally {
  await browser.close()
}
