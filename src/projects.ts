export type ProjectId = 'omni' | 'zen' | 'xda'

export interface Project {
  id: ProjectId
  title: string
  category: string
  role: string
  summary: string
  context: string
  contributions: string[]
  result: string
  tags: string[]
  url?: string
  urlLabel?: string
}

export const projects: Record<ProjectId, Project> = {
  omni: {
    id: 'omni',
    title: 'Omni at The Institutes',
    category: 'The Institutes · Internal software',
    role: 'Full stack developer · Omni development lead',
    summary:
      'Led development of admin tools for customer-success teams to manage student access, billing, and product configuration. Built a JavaScript form framework to standardize development.',
    context:
      'Omni is a React and Express application used by customer-success teams at The Institutes. It supports student and course access, billing, outreach, and product configuration. New forms originally required changes across eight to ten files.',
    contributions: [
      'Led development of Omni’s admin tools and form architecture.',
      'Created a JavaScript framework that reduced each new form’s implementation to two files.',
      'Established development patterns that enabled junior developers to contribute to the application.',
      'Used the framework’s structure to support AI-assisted form development.'
    ],
    result:
      'Reduced new-form implementation from 8–10 files to two, with approximately 80% less required code.',
    tags: ['React', 'Node.js / Express', 'JavaScript']
  },
  zen: {
    id: 'zen',
    title: 'Zen Nail & Head Spa',
    category: 'Client website',
    role: 'Design, development, booking integration & deployment',
    summary:
      'Designed, developed, and deployed a website for a West Chester salon, including responsive layouts, service information, and Boulevard booking and gift-card links.',
    context:
      'Zen Nail & Head Spa needed a website presenting its services, location, and appointment options. I handled the design, development, booking integration, and deployment.',
    contributions: [
      'Designed and developed the website, including the responsive desktop and mobile experience.',
      'Organized nail, lash, and head spa services with location and contact information.',
      'Integrated Boulevard appointment-booking and gift-card links.',
      'Handled deployment of the finished website.'
    ],
    result:
      'Delivered a responsive website with service details, appointment booking links, and gift-card access.',
    tags: ['UI / UX design', 'Responsive development', 'Booking integration', 'Deployment'],
    url: 'https://nailandheadspa.com/',
    urlLabel: 'Visit nailandheadspa.com'
  },
  xda: {
    id: 'xda',
    title: 'XDA-Developers',
    category: 'XDA-Developers · Publishing',
    role: 'Lead React Developer · 2020–2021',
    summary:
      'Built an internal analytics application in React and GraphQL for advertising and sponsored-product commissions. Developed the Huawei partnership subdomain.',
    context:
      'XDA-Developers needed reporting on advertising and sponsorship performance, along with a dedicated website for its Huawei partnership.',
    contributions: [
      'Designed and developed an internal analytics application using React and GraphQL.',
      'Connected sponsored-product commissions and advertising performance so the business could identify its most profitable partners.',
      'Designed and developed the Huawei partnership subdomain to support contractual deliverables.'
    ],
    result:
      'Supported partner profitability analysis and delivered the Huawei partnership website.',
    tags: ['React', 'GraphQL', 'Analytics', 'Partner experiences'],
    url: 'https://www.xda-developers.com/',
    urlLabel: 'Visit XDA-Developers'
  }
}
