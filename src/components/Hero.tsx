import type { IconType } from 'react-icons';
import { FiFileText, FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi"
import { ResumeCard } from "./ResumeCard";

type HeroLink = { label: string; href: string; icon: IconType };

const heroLinks: HeroLink[] = [
  { label: "Résumé", href: "/resume.pdf", icon: FiFileText },
  { label: "GitHub", href: "https://github.com/...", icon: FiGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/...", icon: FiLinkedin },
  { label: "Email", href: "mailto:you@example.com", icon: FiMail },
];

export function Hero() {
    return (
        <section id="about" className="flex items-center justify-between gap-12 py-24">

            <div className="flex flex-col gap-6">
                <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
                     Computer Science · University of Toronto
                </p>

                <h1 className="mt-3 font-serif text-6xl text-accent">Manas Kohli</h1>

                <p className="mt-4 text-lg text-muted">
                    Computer Science student specializing in backend development and DevOps,
                    with a growing interest in quantitative finance.
                </p>

                <div className="mt-8 flex flex-wrap gap-6">
                    {heroLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                className="flex items-center gap-2 border-b border-line pb-1 text-sm hover:border-accent"
                            >
                                <Icon />
                                {link.label}
                                <FiArrowUpRight className="text-xs" />
                            </a>
                        )
                    })}
                </div>
            </div>
            <ResumeCard />
        </section>
    )
}