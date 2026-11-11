# Portfolio design and copy review

Reviewed November 11, 2026. The current revision is a proposal for John's visual review, not an approved design or a measured recruiting experiment.

## Reference choices

[Brittany Chiang's portfolio](https://brittanychiang.com/) places name and role first, then presents experience and projects with specific descriptions and technologies. [Lee Robinson's site](https://leerob.com/) demonstrates a compact introduction and straightforward text hierarchy. The revision borrows those organizational patterns; it does not copy their code, wording, or branding. Neither reference provides evidence that this design will increase John's interview rate.

The writing criteria follow Nielsen Norman Group's guidance on [concise, scannable, objective copy](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/) and [clarity, concision, and character](https://www.nngroup.com/articles/3-cs-microcopy/). These sources support descriptive headings and factual language. They do not establish a numeric threshold for a professional developer portfolio.

## Changes

- Introduce John by name, target role, technologies, and work scope. Resume and email actions appear directly beneath the introduction.
- Use literal headings: Projects, Experience, Technical skills, and Contact.
- Replace the large dark Omni panel, architecture illustration, and oversized percentage with a conventional project entry. Show the approximate result in a sentence, alongside its concrete 8–10-files-to-two example.
- Keep actual Zen desktop/mobile screenshots and clearly label XDA's publication image as archival. No private Omni interface is simulated.
- Give projects a name, role, concise description, technologies or scope, and details action. Avoid repeating the project summary as an additional generic success statement.
- Use a consistent metadata/content grid, modest type scale, visible separators, and a compact portrait. On small screens the content becomes a single column.

## Editorial criteria and results

These are editorial targets chosen for this site, not an AI detector or a validated professionalism score. Counts use the tokenizer in `scripts/review.mjs`; hyphenated compounds count as one word.

| Check                               | Target                | Homepage result                                   |
| ----------------------------------- | --------------------- | ------------------------------------------------- |
| Introduction length                 | At most 45 words      | 24 words                                          |
| Project summary length              | At most 40 words each | Omni 24; Zen 22; XDA 19                           |
| Average narrative sentence          | At most 22 words      | 12 words across 15 sentences                      |
| Longest narrative sentence          | At most 30 words      | 22 words                                          |
| Previously rejected slogans         | No matches            | Zero matches for six phrases                      |
| Role and technology/scope included  | Each project          | 3 of 3                                            |
| Headings describe their content     | Manual review         | Name, section labels, project names, employers    |
| Claims trace to supplied experience | Manual review         | Checked against John's intake and original resume |

The narrative measurements cover the introduction, project summaries, Omni outcome, experience descriptions, and contact paragraph. They exclude labels, skills lists, and project-dialog prose. Dialog copy was reviewed manually for specific responsibilities, ordinary language, and unsupported claims.

The approximately 80% form-code reduction is John's estimate; an independently measured baseline and sample size are unavailable. No performance or conversion metrics have been invented for Zen or XDA. No unconfirmed degree level, AWS infrastructure ownership, or current XDA design ownership is implied.

## Layout and accessibility criteria

[WCAG contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) specifies 4.5:1 for normal text. The minimum measured main palette pair is secondary text on white at 6.37:1. Body text is 13.91:1, links 7.93:1, and primary-button text 14.20:1. These palette calculations complement rendered-text axe checks.

[WCAG reflow guidance](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) informs the 320 CSS-pixel layout check. The eight measured widths are 320, 375, 390, 760, 768, 1024, 1280, and 1440 pixels, all without horizontal document overflow.

| Check                  | Chosen target                        | Measured result                          |
| ---------------------- | ------------------------------------ | ---------------------------------------- |
| Narrative font size    | At least 16px                        | 16–17px                                  |
| Narrative line height  | At least 1.5                         | At least 1.65                            |
| Body line length       | Constrain long paragraphs            | CSS maximum 64–70ch; actual width varies |
| Visible control height | At least 44px                        | At least 44px across tested widths       |
| First project heading  | Within first desktop viewport        | Top at 651px in a 1440 × 1000 viewport   |
| Hero height            | Keep work near the top               | 454px at 1440px width                    |
| Mobile text and images | No clipping or distorted screenshots | Eight-width checks plus visual review    |

The 44px control target is this site's design choice. [WCAG 2.2 AA target-size guidance](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) uses a 24 × 24 CSS-pixel minimum with exceptions; it does not require every AA control to be 44px.

The browser suite covers project dialogs, Escape dismissal, focus containment and return, navigation, resume download, copy feedback, reduced motion, local-resource failures, and automated WCAG A/AA checks in tested desktop, mobile, and dialog states. Automated scans and dimensional checks are not a complete accessibility conformance audit. Recruiting effectiveness needs actual recruiter feedback and application outcomes.

## Reproduce

Run the local preview, then:

```sh
npm run build
npm run test:ui
npm run review
```

The ignored `.qa/` folder contains `report.json`, `content-review.json`, desktop/mobile screenshots, and the local reference captures. No analytics or external tracking is added.
