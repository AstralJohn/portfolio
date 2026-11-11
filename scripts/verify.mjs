import assert from 'node:assert/strict'
import { mkdir, writeFile } from 'node:fs/promises'
import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'

const baseURL = process.env.PORTFOLIO_URL || 'http://127.0.0.1:5186'
const baseOrigin = new URL(baseURL).origin
await mkdir('.qa', { recursive: true })
const browser = await chromium.launch({ headless: true })
const failures = []
let checks = 0
const verify = (condition, message) => {
  assert.ok(condition, message)
  checks += 1
}

try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
  // Exercise the copy control without changing the user's system clipboard.
  await context.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async (value) => {
          window.__copiedEmail = value
        }
      }
    })
  })
  const page = await context.newPage()
  page.on('pageerror', (error) => failures.push(error.message))
  page.on('response', (response) => {
    if (response.url().startsWith(baseOrigin) && response.status() >= 400) {
      failures.push(`${response.status()} ${response.url()}`)
    }
  })
  const response = await page.goto(baseURL, { waitUntil: 'networkidle' })
  verify(response.status() === 200, 'Homepage must respond successfully')
  await page.evaluate(() => document.fonts.ready)
  verify((await page.locator('h1').count()) === 1, 'Page must have one primary heading')
  verify((await page.getByRole('main').count()) === 1, 'Main content landmark must exist')
  verify(!/rekara/i.test(await page.locator('body').innerText()), 'Rekara must not appear')
  verify(
    await page.getByRole('heading', { name: 'Zen Nail & Head Spa', exact: true }).isVisible(),
    'Zen project must be present'
  )
  verify(
    (await page.getByRole('heading', { name: 'XDA-Developers', exact: true }).count()) >= 1,
    'XDA work must remain'
  )

  const resume = await context.request.get(`${baseOrigin}/resume/John-Dinh-Resume.pdf`)
  verify(resume.ok(), 'Resume must be available')
  verify(
    (await resume.body()).subarray(0, 5).toString() === '%PDF-',
    'Resume must be an actual PDF'
  )
  const downloadPromise = page.waitForEvent('download')
  await page.getByRole('link', { name: 'Download resume', exact: true }).click()
  const download = await downloadPromise
  verify(
    download.suggestedFilename() === 'John-Dinh-Resume.pdf',
    'Download filename must be correct'
  )

  for (const width of [1440, 1280, 1024, 768, 760, 390, 375, 320]) {
    await page.setViewportSize({ width, height: 1000 })
    await page.evaluate(() => window.scrollTo(0, 0))
    const overflow = await page.evaluate(() => ({
      document: document.documentElement.scrollWidth,
      viewport: innerWidth
    }))
    verify(overflow.document <= overflow.viewport + 1, `No horizontal overflow at ${width}px`)
    const heading = await page.locator('h1').boundingBox()
    verify(heading.x >= 0 && heading.x + heading.width <= width + 1, `Hero must fit at ${width}px`)
    const contact = await page
      .locator('.contact-email')
      .evaluate((element) => ({ client: element.clientWidth, scroll: element.scrollWidth }))
    verify(contact.scroll <= contact.client + 1, `Email must fit at ${width}px`)
    const typographyAndControls = await page.evaluate(() => ({
      narrativeSizes: [
        ...document.querySelectorAll(
          '.hero-description, .project-copy .project-summary, .project-outcome, .experience-description, .contact-section > p'
        )
      ].map((element) => parseFloat(getComputedStyle(element).fontSize)),
      controlHeights: [...document.querySelectorAll('a, button')]
        .filter((element) => {
          const box = element.getBoundingClientRect()
          return box.width > 0 && box.height > 0 && element.className !== 'skip-link'
        })
        .map((element) => element.getBoundingClientRect().height)
    }))
    verify(
      typographyAndControls.narrativeSizes.every((size) => size >= 16),
      `Narrative text must be at least 16px at ${width}px`
    )
    verify(
      typographyAndControls.controlHeights.every((height) => height >= 44),
      `Visible controls must be at least 44px tall at ${width}px`
    )
  }

  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto(baseURL, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  const firstProject = await page.locator('[data-project="omni"] h3').boundingBox()
  verify(
    firstProject.y + firstProject.height <= 1000,
    'First project heading must appear in the first desktop viewport'
  )
  await page.screenshot({ path: '.qa/desktop.png', fullPage: true })
  for (const [buttonName, title] of [
    ['Omni project details', 'Omni at The Institutes'],
    ['View Zen Nail & Head Spa project', 'Zen Nail & Head Spa'],
    ['View XDA-Developers project', 'XDA-Developers']
  ]) {
    const trigger = page.getByRole('button', { name: buttonName, exact: true })
    await trigger.click()
    const dialog = page.getByRole('dialog')
    verify(await dialog.isVisible(), `${title} dialog must open`)
    verify(
      await dialog.getByRole('heading', { name: title, exact: true }).isVisible(),
      `${title} heading must be visible`
    )
    verify(
      (await dialog.evaluate((element) => element.scrollTop)) === 0,
      'Project must open at the beginning'
    )
    const images = await dialog.locator('img').evaluateAll((elements) =>
      elements.map((image) => ({
        actual: image.clientWidth / image.clientHeight,
        natural: image.naturalWidth / image.naturalHeight
      }))
    )
    verify(
      images.every((image) => Math.abs(image.actual - image.natural) < 0.02),
      'Project screenshots must preserve their proportions'
    )
    if (title === 'Zen Nail & Head Spa') await page.screenshot({ path: '.qa/zen-dialog.png' })
    for (let index = 0; index < 8; index++) await page.keyboard.press('Tab')
    verify(
      await page.evaluate(() => document.querySelector('dialog').contains(document.activeElement)),
      'Keyboard focus must stay inside the modal'
    )
    const dialogAxe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze()
    verify(
      dialogAxe.violations.length === 0,
      `Dialog accessibility: ${JSON.stringify(dialogAxe.violations.map((x) => ({ id: x.id, nodes: x.nodes.map((n) => n.target) })))}`
    )
    await page.keyboard.press('Escape')
    verify(!(await dialog.isVisible()), `${title} must close with Escape`)
    verify(
      await trigger.evaluate((element) => element === document.activeElement),
      'Focus must return to the project trigger'
    )
  }

  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto(baseURL, { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'Open navigation' }).click()
  verify(
    (await page.getByRole('button', { name: 'Close navigation' }).getAttribute('aria-expanded')) ===
      'true',
    'Mobile menu must announce expanded state'
  )
  await page
    .locator('#primary-navigation')
    .getByRole('link', { name: 'Projects', exact: true })
    .click()
  verify(
    (await page.getByRole('button', { name: 'Open navigation' }).getAttribute('aria-expanded')) ===
      'false',
    'Mobile menu must close after navigation'
  )
  verify(new URL(page.url()).hash === '#work', 'Mobile work link must navigate')
  await page.getByRole('button', { name: 'Open navigation' }).click()
  await page.keyboard.press('Escape')
  verify(
    (await page.getByRole('button', { name: 'Open navigation' }).getAttribute('aria-expanded')) ===
      'false',
    'Mobile menu must close with Escape'
  )

  await page.locator('#contact').scrollIntoViewIfNeeded()
  await page.getByRole('button', { name: 'Copy email address' }).click()
  verify(
    (await page.evaluate(() => window.__copiedEmail)) === 'john@johndinh.dev',
    'Copy email must copy the correct address'
  )
  verify(
    await page.getByRole('button', { name: 'Email copied' }).isVisible(),
    'Copy feedback must be visible'
  )
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.screenshot({ path: '.qa/mobile.png', fullPage: true })

  const mobileAxe = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze()
  verify(
    mobileAxe.violations.length === 0,
    `Mobile accessibility: ${JSON.stringify(mobileAxe.violations.map((x) => ({ id: x.id, nodes: x.nodes.map((n) => n.target) })))}`
  )
  await page.setViewportSize({ width: 1440, height: 1000 })
  const desktopAxe = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze()
  verify(
    desktopAxe.violations.length === 0,
    `Desktop accessibility: ${JSON.stringify(desktopAxe.violations.map((x) => ({ id: x.id, nodes: x.nodes.map((n) => n.target) })))}`
  )
  await page.emulateMedia({ reducedMotion: 'reduce' })
  verify(
    (await page.locator('html').evaluate((element) => getComputedStyle(element).scrollBehavior)) ===
      'auto',
    'Reduced motion must disable smooth scrolling'
  )
  verify(
    failures.length === 0,
    `No browser errors or failed local resources: ${failures.join(', ')}`
  )
  await writeFile(
    '.qa/report.json',
    JSON.stringify(
      { checks, viewports: 8, engine: 'Chromium', axeViolations: 0, errors: failures },
      null,
      2
    ) + '\n'
  )
  console.log(
    `Passed ${checks} checks across 8 viewports, three project dialogs, mobile navigation, resume download, copy feedback, reduced motion, and automated accessibility scans.`
  )
} finally {
  await browser.close()
}
