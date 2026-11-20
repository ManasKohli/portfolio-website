export type Link = { label: string; href: string }

export type Profile = {
  name: string
  role: string            // "Software Developer"
  location: string        // "Toronto"
  intro: string
  links: Link[]
}

export type Education = {
  school: string
  degree: string
  period: string
}

export type Experience = {
  role: string
  company: string
  period: string          // "May 2026 – Aug 2026"
  summary: string         // your mockup uses one line, not bullet points
  tags: string[]
}

export type Project = {
  name: string
  description: string
  tags: string[]
  links: Link[]           // GitHub, Live demo
}

export type Competition = {
  name: string
  year: string
  award: string           // "1st Place", "Finalist"
  summary: string
}

export type SkillGroup = {
  label: string           // "Languages"
  items: string[]         // ["Python", "TypeScript"]
}