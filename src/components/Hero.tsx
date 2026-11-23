import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi"
import { ResumeCard } from "./ResumeCard"
import type { HeroLink } from "../data"
import { Section } from "./Section"

const heroLinks: HeroLink[] = [
  { label: "GitHub", href: "https://github.com/...", icon: FiGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/...", icon: FiLinkedin },
  { label: "Email", href: "mailto:you@example.com", icon: FiMail },
]

export function Hero() {
  return (
    <Section
      id="about"
      className="grid items-center gap-12 pt-16 pb-14 md:grid-cols-[1fr_auto] md:pt-20"
    >
      <div className="flex flex-col">
        <p className="font-mono text-xs tracking-[0.2em] text-ink/80 uppercase">
          Computer Science · University of Toronto
        </p>

        <h1 className="mt-3 font-serif text-6xl leading-none font-medium tracking-tight text-ink md:text-7xl">
          Manas Kohli
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Computer Science student specializing in backend development and DevOps,
          with a growing interest in quantitative finance.
        </p>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
          {heroLinks.map((link) => {
            const Icon = link.icon
            const external = !link.href.startsWith("mailto:")
            return (
              <a
                key={link.label}
                href={link.href}
                {...(external && { target: "_blank", rel: "noreferrer" })}
                className="group flex items-center gap-2 border-b border-line pb-1 font-serif text-[15px]
                           text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="text-base" />
                {link.label}
                <FiArrowUpRight className="text-xs transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )
          })}
        </div>
      </div>

      <ResumeCard />
    </Section>
  )
}
