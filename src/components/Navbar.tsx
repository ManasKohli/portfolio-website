import { useEffect, useRef, useState } from "react"
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi"
import { resumePdf, type Link } from "../data"

const links: Link[] = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Competitions", href: "#competitions" },
]

// Highlights the nav link for whichever section is currently in view.
// Returns the active href plus `select`, which nav links call on click.
function useActiveSection() {
  const [active, setActive] = useState("#about")
  // While a nav click's smooth scroll is running, scroll position must not
  // override the clicked link (e.g. Projects can't reach the top of a tall
  // window, so the page ends at the bottom where Competitions would win).
  const locked = useRef(false)
  const releaseTimer = useRef<number | undefined>(undefined)

  const scheduleRelease = () => {
    window.clearTimeout(releaseTimer.current)
    releaseTimer.current = window.setTimeout(() => (locked.current = false), 150)
  }

  const select = (href: string) => {
    setActive(href)
    locked.current = true
    scheduleRelease()
  }

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null)

    // Active = the last section whose top has scrolled up to just below the
    // sticky navbar (sections land at scroll-mt-24 = 96px). At the very
    // bottom of the page, the last section wins, since it may never get there.
    const update = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      let current = sections[0]
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= 120) current = s
      }
      if (atBottom) current = sections.at(-1) ?? current
      if (current) setActive(`#${current.id}`)
    }

    const onScroll = () => {
      if (locked.current) scheduleRelease() // keep the lock until scrolling stops
      else update()
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", update)
      window.clearTimeout(releaseTimer.current)
    }
  }, [])

  return { active, select }
}

export function Navbar() {
  const { active, select } = useActiveSection()
  const [open, setOpen] = useState(false)

  // Close the mobile menu on Escape or when the window grows to desktop width.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    const mq = window.matchMedia("(min-width: 1024px)")
    const onResize = () => mq.matches && setOpen(false)
    window.addEventListener("keydown", onKey)
    mq.addEventListener("change", onResize)
    return () => {
      window.removeEventListener("keydown", onKey)
      mq.removeEventListener("change", onResize)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <a href="#about" className="shrink-0 font-serif text-2xl tracking-tight text-ink">
          Manas Kohli
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const isActive = active === link.href
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => select(link.href)}
                className={`relative py-5 font-serif text-[15px] transition-colors hover:text-ink ${
                  isActive ? "text-ink" : "text-muted"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 bottom-3 h-0.5 rounded-full bg-accent transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 rounded-md bg-accent px-4 py-2 font-serif text-sm text-white
                       shadow-sm transition hover:bg-accent/90"
          >
            Résumé <FiArrowUpRight />
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 rounded-md p-2 text-xl text-ink transition hover:bg-tag lg:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile / collapsed menu */}
      <div
        id="mobile-menu"
        className={`grid border-line transition-[grid-template-rows] duration-300 lg:hidden ${
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {links.map((link) => {
              const isActive = active === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    select(link.href)
                    setOpen(false)
                  }}
                  tabIndex={open ? 0 : -1}
                  className={`flex items-center gap-3 border-b border-line py-3 font-serif text-lg last:border-b-0 ${
                    isActive ? "text-ink" : "text-muted"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full bg-accent transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {link.label}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
