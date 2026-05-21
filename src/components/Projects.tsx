import { ExternalLink, Github } from 'lucide-react'
import { PROJECTS } from '@/data/data'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-brand-600 tracking-[0.2em] uppercase">04 - Projects</span>
          <div className="flex-1 h-px bg-neutral-200" />
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {PROJECTS.map((project) => (
            <article key={project.title} className="rounded-lg border border-neutral-200 bg-white p-6 transition-all hover:border-brand-300 hover:bg-brand-50/60 hover:shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-brand-600">{project.num} / {project.category}</p>
                  <h2 className="mt-3 text-xl font-semibold text-neutral-900">{project.title}</h2>
                </div>
                <span className="shrink-0 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500">
                  {project.metric}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-neutral-500">{project.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-500">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                {project.github && (
                  <a href={project.github} className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium text-neutral-600 transition-colors hover:bg-brand-50 hover:text-brand-700">
                    <Github size={16} aria-hidden="true" />
                    Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium text-brand-600 transition-colors hover:bg-brand-50 hover:text-brand-700">
                    <ExternalLink size={16} aria-hidden="true" />
                    Open
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
