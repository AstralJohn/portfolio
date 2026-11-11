import { useEffect, useRef, useState } from 'react'
import { projects, type ProjectId } from './projects'

const resume = '/resume/John-Dinh-Resume.pdf'
const email = 'john@johndinh.dev'

function Icon({
  name,
  className = ''
}: {
  name: 'arrow' | 'external' | 'download' | 'menu' | 'close' | 'copy' | 'check'
  className?: string
}) {
  const paths = {
    arrow: (
      <>
        <path d="M4 12h15M13 6l6 6-6 6" />
      </>
    ),
    external: (
      <>
        <path d="M6 18 18 6M6 6h12v12" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m-5-5 5 5 5-5M5 17v4h14v-4" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M6 18 18 6" />
      </>
    ),
    copy: (
      <>
        <rect x="8" y="8" width="12" height="13" rx="2" />
        <path d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3" />
      </>
    ),
    check: (
      <>
        <path d="m5 12 4 4L19 6" />
      </>
    )
  }
  return (
    <svg
      className={`icon ${className}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#top" onClick={() => setOpen(false)}>
          John Dinh
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
        <nav
          id="primary-navigation"
          className={`primary-nav ${open ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          <a href="#work" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#experience" onClick={() => setOpen(false)}>
            Experience
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            Skills
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
          <a
            className="nav-resume"
            href={resume}
            download="John-Dinh-Resume.pdf"
            onClick={() => setOpen(false)}
          >
            Resume <Icon name="download" />
          </a>
        </nav>
      </div>
    </header>
  )
}

function ProjectDialog({ id, onClose }: { id: ProjectId | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  const project = id ? projects[id] : null
  useEffect(() => {
    const dialog = ref.current
    if (!id || !dialog) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialog.showModal()
    dialog.scrollTop = 0
    return () => {
      document.body.style.overflow = previousOverflow
      if (dialog.open) dialog.close()
    }
  }, [id])
  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="project-title"
      aria-describedby="project-summary"
      onClose={onClose}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return
        const bounds = event.currentTarget.getBoundingClientRect()
        if (
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom
        )
          ref.current?.close()
      }}
    >
      {project && (
        <article>
          <div className="dialog-top">
            <span>Project details</span>
            <button
              className="icon-button"
              type="button"
              aria-label="Close project"
              onClick={() => ref.current?.close()}
            >
              <Icon name="close" />
            </button>
          </div>
          <div className="dialog-intro">
            <p className="project-category">{project.category}</p>
            <h2 id="project-title">{project.title}</h2>
            <p id="project-summary" className="project-summary">
              {project.summary}
            </p>
            <p className="project-role">{project.role}</p>
          </div>
          {id === 'zen' && (
            <figure className="dialog-gallery">
              <div className="dialog-desktop">
                <img
                  src="/images/zen-desktop.webp"
                  alt="Desktop screenshot of the Zen Nail & Head Spa website"
                  width="1440"
                  height="1000"
                />
              </div>
              <img
                className="dialog-mobile"
                src="/images/zen-mobile.webp"
                alt="Mobile screenshot of the Zen Nail & Head Spa website"
                width="390"
                height="844"
              />
              <figcaption>Desktop and mobile screenshots · November 2026</figcaption>
            </figure>
          )}
          {id === 'xda' && (
            <figure className="dialog-archive">
              <img
                src="/images/xda-archive.jpg"
                alt="Archived screenshot of the XDA-Developers publication website"
                width="960"
                height="540"
              />
              <figcaption>
                Archived publication screenshot from the original portfolio · 2020–2021
              </figcaption>
            </figure>
          )}
          <div className="dialog-content">
            <section>
              <h3>Project</h3>
              <p>{project.context}</p>
            </section>
            <section>
              <h3>My responsibilities</h3>
              <ul>
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Outcome</h3>
              <p>{project.result}</p>
            </section>
            <TechnologyList items={project.tags} />
            {project.url && (
              <a
                className="button button-primary"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.urlLabel}
                <Icon name="external" />
              </a>
            )}
            {id === 'omni' && (
              <p className="internal-note">
                Internal application. Product screenshots and source code are not public.
              </p>
            )}
          </div>
        </article>
      )}
    </dialog>
  )
}

function TechnologyList({ items }: { items: string[] }) {
  return (
    <ul className="technology-list" aria-label="Technologies and scope">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function Projects({ openProject }: { openProject: (id: ProjectId) => void }) {
  return (
    <section
      id="work"
      className="projects-section content-section container"
      aria-labelledby="projects-heading"
    >
      <div className="section-heading">
        <h2 id="projects-heading">Projects</h2>
        <p>Selected professional and client work.</p>
      </div>
      <div className="project-list">
        <article className="project-row" data-project="omni">
          <div className="project-meta">
            <span>The Institutes</span>
            <span>2022 — Present</span>
            <span className="project-visibility">Internal application</span>
          </div>
          <div className="project-copy">
            <h3>Omni admin platform</h3>
            <p className="project-role">Full stack developer · Development lead</p>
            <p className="project-summary">{projects.omni.summary}</p>
            <p className="project-outcome">
              <strong>Outcome:</strong> {projects.omni.result}
            </p>
            <TechnologyList items={projects.omni.tags} />
            <button className="text-link" type="button" onClick={() => openProject('omni')}>
              Omni project details <Icon name="arrow" />
            </button>
          </div>
        </article>
        <article className="project-row" data-project="zen">
          <div className="project-media">
            <button
              className="project-thumbnail"
              type="button"
              onClick={() => openProject('zen')}
              aria-label="View Zen Nail & Head Spa project"
            >
              <img
                src="/images/zen-desktop.webp"
                alt="Zen Nail & Head Spa website"
                width="1440"
                height="1000"
                loading="lazy"
              />
            </button>
            <span className="media-caption">nailandheadspa.com</span>
          </div>
          <div className="project-copy">
            <h3>Zen Nail & Head Spa</h3>
            <p className="project-role">Design, development, booking integration & deployment</p>
            <p className="project-summary">{projects.zen.summary}</p>
            <TechnologyList items={projects.zen.tags} />
            <div className="project-links">
              <button className="text-link" type="button" onClick={() => openProject('zen')}>
                Project details <Icon name="arrow" />
              </button>
              <a
                className="text-link"
                href="https://nailandheadspa.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website <Icon name="external" />
              </a>
            </div>
          </div>
        </article>
        <article className="project-row" data-project="xda">
          <div className="project-media">
            <button
              className="project-thumbnail"
              type="button"
              onClick={() => openProject('xda')}
              aria-label="View XDA-Developers project"
            >
              <img
                src="/images/xda-archive.jpg"
                alt="Archived XDA-Developers publication website"
                width="960"
                height="540"
                loading="lazy"
              />
            </button>
            <span className="media-caption">Publication archive · 2020–2021</span>
          </div>
          <div className="project-copy">
            <h3>XDA-Developers</h3>
            <p className="project-role">Lead React Developer · 2020–2021</p>
            <p className="project-summary">{projects.xda.summary}</p>
            <TechnologyList items={projects.xda.tags} />
            <div className="project-links">
              <button className="text-link" type="button" onClick={() => openProject('xda')}>
                Project details <Icon name="arrow" />
              </button>
              <a
                className="text-link"
                href="https://www.xda-developers.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit publication <Icon name="external" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

const experience = [
  {
    company: 'The Institutes',
    role: 'Full Stack React Developer',
    dates: 'Feb 2022 — Present',
    description:
      'Led Omni development, built a reusable form framework, and developed reporting and automation tools. Rebuilt iMIS-to-StarChapter data synchronization and supported state-specific products on the production website.'
  },
  {
    company: 'XDA-Developers',
    role: 'Lead React Developer',
    dates: '2020 — 2021',
    description:
      'Built React and GraphQL analytics for advertising and sponsorship performance. Developed a website for the Huawei partnership.'
  },
  {
    company: 'Pocketnow',
    role: 'Full Stack Developer',
    dates: '2019 — 2020',
    description:
      'Developed WordPress plugins and reusable content tools. Automated deployments with Fabric and Docker, and designed the website homepage.'
  }
]

function Experience() {
  return (
    <section
      id="experience"
      className="content-section container"
      aria-labelledby="experience-heading"
    >
      <div className="section-heading">
        <h2 id="experience-heading">Experience</h2>
        <a className="text-link" href={resume} download="John-Dinh-Resume.pdf">
          Full resume <Icon name="download" />
        </a>
      </div>
      <ol className="experience-list">
        {experience.map((job) => (
          <li key={job.company}>
            <p className="experience-date">{job.dates}</p>
            <div>
              <h3>{job.company}</h3>
              <p className="experience-role">{job.role}</p>
              <p className="experience-description">{job.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Skills() {
  const skills = [
    ['Frontend', 'React, TypeScript, JavaScript, Redux, HTML, CSS / SCSS'],
    ['Backend & APIs', 'Node.js, Express, Python, PHP, REST, GraphQL, Keycloak'],
    ['Databases & CMS', 'MySQL, PostgreSQL, Drupal, WordPress, Twig, Composer, Drush'],
    ['Testing & delivery', 'Jest, Playwright, Git, CI/CD, Docker, Kubernetes, Linux, Bash'],
    ['AI development tools', 'Claude Code, GitHub Copilot, ChatGPT']
  ]
  return (
    <section id="about" className="content-section container" aria-labelledby="skills-heading">
      <div className="section-heading">
        <h2 id="skills-heading">Technical skills</h2>
      </div>
      <dl className="skills-list">
        {skills.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function Contact() {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'unavailable'>('idle')
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current)
    },
    []
  )
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopyState('copied')
    } catch {
      setCopyState('unavailable')
    }
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopyState('idle'), 3500)
  }
  return (
    <section
      id="contact"
      className="content-section container contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="section-heading">
        <h2 id="contact-heading">Contact</h2>
      </div>
      <p>Open to senior full stack and frontend roles, remotely or hybrid near West Chester, PA.</p>
      <div className="contact-email-row">
        <a className="contact-email" href={`mailto:${email}`}>
          {email}
        </a>
        <button className="copy-email" type="button" onClick={copyEmail}>
          <Icon name={copyState === 'copied' ? 'check' : 'copy'} />
          <span aria-live="polite">
            {copyState === 'copied'
              ? 'Email copied'
              : copyState === 'unavailable'
                ? 'Select the email to copy'
                : 'Copy email address'}
          </span>
        </button>
      </div>
      <div className="contact-social">
        <a
          className="text-link"
          href="https://github.com/AstralJohn"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <Icon name="external" />
        </a>
        <a
          className="text-link"
          href="https://www.linkedin.com/in/johndinhdev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <Icon name="external" />
        </a>
        <a className="text-link" href={resume} download="John-Dinh-Resume.pdf">
          Resume PDF <Icon name="download" />
        </a>
      </div>
    </section>
  )
}

export default function App() {
  const [activeProject, setActiveProject] = useState<ProjectId | null>(null)
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section id="top" className="hero container" aria-labelledby="name-heading">
          <div className="hero-main">
            <div className="hero-identity">
              <h1 id="name-heading">John Dinh</h1>
              <p className="hero-role">Senior Full Stack Engineer</p>
            </div>
            <p className="hero-description">
              I develop React and TypeScript applications, Node.js services, and PHP/Drupal
              websites. My work includes internal admin tools, reporting, customer-data
              integrations, and production websites.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={resume} download="John-Dinh-Resume.pdf">
                Download resume <Icon name="download" />
              </a>
              <a className="button button-secondary" href={`mailto:${email}`}>
                Email John <Icon name="external" />
              </a>
            </div>
            <p className="hero-availability">Remote roles · Hybrid near West Chester, PA</p>
          </div>
          <figure className="portrait">
            <img
              src="/images/john-dinh.webp"
              srcSet="/images/john-dinh-small.webp 640w, /images/john-dinh.webp 1536w"
              sizes="(max-width: 600px) 104px, (max-width: 760px) 160px, (max-width: 900px) 192px, 224px"
              alt="John Dinh"
              width="1536"
              height="1024"
              fetchPriority="high"
            />
          </figure>
        </section>
        <Projects openProject={setActiveProject} />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer container">
        <span>© {new Date().getFullYear()} John Dinh</span>
        <a className="text-link" href="#top">
          Back to top <Icon name="external" />
        </a>
      </footer>
      <ProjectDialog id={activeProject} onClose={() => setActiveProject(null)} />
    </>
  )
}
