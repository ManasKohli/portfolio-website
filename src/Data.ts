import type { IconType } from "react-icons"
import uoftLogo from "./assets/uoft.png"

export type Link = { label: string; href: string }

export type HeroLink = { label: string; href: string; icon: IconType }

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
  logo?: string
}

export type Experience = {
  role: string
  company: string
  period: string          // "May 2026 – Aug 2026" (split onto two lines in the timeline)
  summary?: string        // one line, not bullet points
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

export const education: Education[] = [
  {
    school: "University of Toronto",
    degree: "B.Sc. Computer Science, Minor in Mathematics & Statistics",
    period: "2025 – 2029",
    logo: uoftLogo,
  },
]

export const experience: Experience[] = [
  {
    role: "Engineering Lead",
    company: "Dentistry4Youth",
    period: "Nov 2026 – Present",
    summary:
      "Leading development of a full-stack dental education platform targeting aspiring dental students.",
  },
  {
    role: "Infrastructure Lead",
    company: "University of Toronto Decision Systems",
    period: "Oct 2026 – Present",
  },
  {
    role: "Software Engineering Intern",
    company: "Pambii.Ai",
    period: "May 2026 – Aug 2026",
    summary:
      "AI compliance software — automating compliance workflows with NLP and document intelligence.",
  },
]
