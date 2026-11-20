import type {Link} from "../data"

const links: Link[] = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Competitions", href: "#competitions" },
  { label: "Skills", href: "#skills" }
]

export function Navbar() {
    return (
        <header className="sticky top-4 z-10 px-4">
            <nav className="mx-auto flex max-w-3xl items-center justify-between
                  rounded-full border border-line bg-paper/70 px-6 py-3
                  shadow-sm backdrop-blur-md">
                 <a href="#" className="font-serif text-lg">Manas Kohli</a>

                    <div className="flex items-center gap-6">
                        {links.map((link) => (
                            <a 
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted transition hover:text-accent"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                        href="/resume.pdf"
                        target="_blank"
                        className="rounded-full bg-accent px-4 py-1.5 text-sm text-white
                                transition hover:opacity-90"
                        >
                            Résumé ↗
                        </a>
                    </div>
            </nav>
       </header>
    )
}