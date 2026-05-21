import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-28 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 items-start">
          <div>
            <p className="font-mono text-xs text-brand-200 tracking-[0.2em] uppercase">06 - Contact</p>
            <h2 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-5 max-w-2xl text-neutral-400 leading-7">
              Open for AI engineering, data science, automation, and applied machine learning
              collaborations.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
            <div className="space-y-4">
              <a href="mailto:faiz86791@gmail.com" className="flex items-center gap-3 rounded-lg px-2 py-1 text-neutral-200 transition-colors hover:bg-brand-400/10 hover:text-brand-100">
                <Mail size={18} aria-hidden="true" />
                faiz86791@gmail.com
              </a>
              <p className="flex items-center gap-3 text-neutral-300">
                <MapPin size={18} aria-hidden="true" />
                Surabaya, Indonesia
              </p>
              <a href="https://github.com/faizgeorgie9" className="flex items-center gap-3 rounded-lg px-2 py-1 text-neutral-200 transition-colors hover:bg-brand-400/10 hover:text-brand-100">
                <Github size={18} aria-hidden="true" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/" className="flex items-center gap-3 rounded-lg px-2 py-1 text-neutral-200 transition-colors hover:bg-brand-400/10 hover:text-brand-100">
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
