import { Award, BrainCircuit, Code2, Database, ExternalLink, Globe2, Layers3, Wrench } from 'lucide-react'
import { RECENT_CERTIFICATIONS, SKILLS } from '@/data/data'

const icons = [BrainCircuit, Layers3, Code2, Globe2, Database, Wrench]

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-28 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-brand-600 tracking-[0.2em] uppercase">02 - Skills</span>
          <div className="flex-1 h-px bg-neutral-200" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((skill, index) => {
            const Icon = icons[index] ?? Wrench
            return (
              <article key={skill.title} className={`rounded-lg border p-5 transition-all hover:border-brand-300 hover:bg-brand-50 hover:shadow-sm ${skill.color}`}>
                <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg ${skill.iconBg}`}>
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h2 className="text-lg font-semibold text-neutral-900">{skill.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-neutral-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <Award size={20} className="text-brand-600" aria-hidden="true" />
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Recent Certifications</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {RECENT_CERTIFICATIONS.map((cert) => (
              <a
                key={cert.title}
                href={cert.href}
                className="group rounded-lg border border-neutral-200 bg-white p-5 transition-all hover:border-brand-300 hover:bg-brand-50 hover:shadow-sm"
                target={cert.href === '#' ? undefined : '_blank'}
                rel={cert.href === '#' ? undefined : 'noreferrer'}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs text-brand-600">{cert.year}</p>
                    <h3 className="mt-3 text-lg font-semibold text-neutral-900 group-hover:text-brand-700">
                      {cert.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-500">{cert.issuer}</p>
                  </div>
                  <ExternalLink size={17} className="text-neutral-300 group-hover:text-brand-600" aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
