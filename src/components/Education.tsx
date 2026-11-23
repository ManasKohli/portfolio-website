import { education } from "../data"
import { Section } from "./Section"

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="flex flex-col gap-6">
        {education.map((edu) => (
          <div key={edu.school} className="flex items-center gap-4">
            {edu.logo && (
              <img
                src={edu.logo}
                alt={`${edu.school} logo`}
                className="h-11 w-11 shrink-0 object-contain"
              />
            )}

            <div className="flex-1">
              <h3 className="text-[17px] font-semibold text-ink">{edu.school}</h3>
              <p className="text-sm text-muted">{edu.degree}</p>
            </div>

            <p className="font-mono text-sm tracking-wide whitespace-nowrap text-muted">
              {edu.period}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
