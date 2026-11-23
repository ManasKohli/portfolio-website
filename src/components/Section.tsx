import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title?: string
  className?: string
  children: ReactNode
}

// Titled sections get a hairline divider on top, like the mockup.
export function Section({ id, title, className = "", children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-24 px-6">
      <div className={`${title ? "border-t border-line py-10" : ""} ${className}`}>
        {title && (
          <h2 className="mb-6 font-serif text-3xl font-medium tracking-tight text-ink md:text-4xl">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}
