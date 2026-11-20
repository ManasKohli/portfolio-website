export type Link = {label: string; href: string}

export type Experience = {
  role: string
  company: string
  period: string        // "May 2025 – Aug 2025"
  points: string[]
  tags?: string[]       // the ? means optional
}

export type Project = {
  name: string
  description: string
  tags: string[]
  links: Link[]
}

export type Competition = {
  name: string
  year: string
  award: string
  summary: string
}

export const profile = {
  name: "Your Name",
  tagline: "CS @ ... · building ...",
  links: [
    { label: "Résumé", href: "/resume.pdf" },
    { label: "GitHub", href: "https://github.com/..." },
  ] satisfies Link[],
}

export const experience: Experience[] = [
  // fill in from your CV
]
