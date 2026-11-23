import { experience } from "../data"
import { Section } from "./Section"

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative">
        {/* Timeline rail */}
        <div aria-hidden className="absolute top-2 bottom-2 left-[3px] w-px bg-line" />

        {experience.map((exp) => {
          const [start, end] = exp.period.split(/\s*[–-]\s*/)
          return (
            <li
              key={`${exp.company}-${exp.role}`}
              className="relative grid grid-cols-[7rem_1fr] gap-x-6 pb-8 pl-6 last:pb-0 md:grid-cols-[9rem_1fr]"
            >
              <span aria-hidden className="absolute top-2 left-0 h-[7px] w-[7px] rounded-full bg-accent" />

              <p className="pt-0.5 font-mono text-xs leading-5 tracking-wider text-muted uppercase">
                {start} –
                {end && <><br />{end}</>}
              </p>

              <div>
                <h3 className="text-[17px] font-semibold text-ink">
                  {exp.role}
                  <span className="mx-2 text-muted">·</span>
                  {exp.company}
                </h3>
                {exp.summary && <p className="mt-1 text-sm text-muted">{exp.summary}</p>}
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
