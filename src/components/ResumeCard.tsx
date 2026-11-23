import { FiFileText, FiArrowUpRight } from "react-icons/fi"

// A tilted "paper stack" preview of the résumé that links to the PDF.
export function ResumeCard() {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noreferrer"
      aria-label="View full résumé"
      className="group relative mr-8 hidden justify-self-end h-64 w-52 md:block"
    >
      {/* Back sheets */}
      <div className="absolute inset-0 translate-x-4 translate-y-3 rotate-[14deg] rounded-2xl border border-line bg-[#efe8dd] shadow-md" />
      <div className="absolute inset-0 translate-x-2 translate-y-1.5 rotate-[10deg] rounded-2xl border border-line bg-[#f4efe7] shadow-md" />

      {/* Front sheet */}
      <div
        className="absolute inset-0 rotate-6 rounded-2xl border border-line bg-[#fdfbf7] p-6
                   shadow-[0_20px_40px_-12px_rgba(60,40,20,0.25)] transition-transform duration-300
                   group-hover:-translate-y-1 group-hover:rotate-3"
      >
        <div className="flex flex-col items-center gap-2 text-ink">
          <FiFileText className="text-2xl" />
          <span className="font-serif text-sm tracking-[0.2em] uppercase">Résumé</span>
        </div>

        <div className="mt-5 space-y-2">
          <div className="h-1 w-1/3 rounded bg-ink/30" />
          <div className="h-1 w-full rounded bg-line" />
          <div className="h-1 w-5/6 rounded bg-line" />
          <div className="h-1 w-full rounded bg-line" />
          <div className="h-1 w-2/3 rounded bg-line" />
        </div>

        <span
          className="absolute right-4 bottom-8 left-4 flex items-center justify-center gap-1 rounded-md
                     bg-accent py-2 font-serif text-xs text-white shadow-md transition group-hover:bg-accent/90"
        >
          View Full Résumé <FiArrowUpRight />
        </span>
      </div>
    </a>
  )
}
