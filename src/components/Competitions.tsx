import { FiArrowUpRight } from "react-icons/fi"
import { competitions } from "../data"
import { Section } from "./Section"

export function Competitions() {
  return (
    <Section id="competitions" title="Competitions">
      <ul className="flex flex-col gap-8">
        {competitions.map((comp) => (
          <li
            key={comp.name}
            className="grid grid-cols-[7rem_1fr] gap-x-6 md:grid-cols-[9rem_1fr]"
          >
            <p className="pt-0.5 font-mono text-xs leading-5 tracking-wider text-muted uppercase">
              {comp.date}
            </p>

            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-[17px] font-semibold text-ink">{comp.name}</h3>
                <span className="rounded-full bg-tag px-2.5 py-0.5 text-xs text-accent">
                  {comp.award}
                </span>
              </div>

              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">{comp.summary}</p>

              {comp.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 mr-5 inline-flex items-center gap-1 text-sm text-ink underline decoration-line underline-offset-4 transition hover:decoration-accent"
                >
                  {link.label} <FiArrowUpRight className="text-muted" />
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
