import type { IconType } from "react-icons"
import { LuChartSpline, LuUtensils } from "react-icons/lu"
import { PiFlagCheckered } from "react-icons/pi"
import uoftLogo from "./assets/uoft.png"
import quantifiReport from "./assets/quantifi-2026.pdf"

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
  description: string     // one or two lines
  tags: string[]
  icon: IconType
  href?: string           // card links here (GitHub / live demo) when set
}

export type Competition = {
  name: string
  date: string            // "Nov 2026"
  award: string           // "2nd Place · PnL"
  summary: string
  links: Link[]           // e.g. strategy report
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

export const projects: Project[] = [
  {
    name: "F1 Strategist",
    description:
      "Random Forest model predicting laps until a driver's next pit stop, served via FastAPI on Cloud Run and powering a React race simulator.",
    tags: ["FastAPI", "Scikit-learn", "React", "GCP"],
    icon: PiFlagCheckered,
    href: "https://github.com/ManasKohli/F1-strategist",
  },
  {
    name: "Crewlee",
    description:
      "RAG knowledge system over restaurant SOPs, recipes and policies to streamline staff training and day-to-day operations.",
    tags: ["FastAPI", "PostgreSQL", "Docker", "GCP"],
    icon: LuUtensils,
    href: "https://www.crewlee.ca/",
  },
  {
    name: "NVDA LSTM Forecasting",
    description:
      "LSTM time-series model on NVIDIA stock, evaluated against a naive last-price baseline with MAE and directional accuracy.",
    tags: ["Python", "LSTM", "NumPy", "Scikit-learn"],
    icon: LuChartSpline,
    href: "https://github.com/ManasKohli/nvda-stock-prediction-model",
  },
]

export const competitions: Competition[] = [
  {
    name: "QuantiFi Algorithmic Trading",
    date: "Nov 2026",
    award: "2nd Place · PnL",
    summary:
      "Built a trading bot across 26 products with a 4-person team, using fair-value models and mean reversion. Presented the strategy to judges from National Bank.",
    links: [{ label: "Strategy report", href: quantifiReport }],
  },
]
