import { FiArrowUpRight } from "react-icons/fi"
import { projects, type Project } from "../data"
import { Section } from "./Section"

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon
  const body = (
    <>
      <div className="flex items-start gap-4">
        <Icon aria-hidden className="mt-0.5 shrink-0 text-2xl text-accent" />
        <div className="flex-1">
          <h3 className="font-serif text-xl font-medium text-ink">{project.name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">{project.description}</p>
        </div>
        {project.href && (
          <FiArrowUpRight
            aria-hidden
            className="shrink-0 text-lg text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </div>

      <ul className="mt-4 flex flex-wrap gap-2 pl-10">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-full bg-tag px-3 py-1 text-xs text-ink/80">
            {tag}
          </li>
        ))}
      </ul>
    </>
  )

  const card = "rounded-xl border border-line bg-white/40 p-5"

  return project.href ? (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={`group ${card} transition hover:border-accent/40 hover:shadow-[0_8px_24px_-12px_rgba(60,40,20,0.2)]`}
    >
      {body}
    </a>
  ) : (
    <div className={card}>{body}</div>
  )
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  )
}
