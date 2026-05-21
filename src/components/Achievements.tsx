import { ExternalLink, Trophy } from 'lucide-react'
import { ACHIEVEMENTS } from '@/data/data'

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-20 py-28 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-brand-600 tracking-[0.2em] uppercase">05 - Achievements</span>
          <div className="flex-1 h-px bg-neutral-200" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACHIEVEMENTS.map((achievement) => (
            <a
              key={`${achievement.title}-${achievement.year}`}
              href={achievement.href}
              className={`group rounded-lg border p-5 transition-all hover:border-brand-300 hover:bg-brand-50 hover:shadow-sm ${achievement.color}`}
              target={achievement.href === '#' ? undefined : '_blank'}
              rel={achievement.href === '#' ? undefined : 'noreferrer'}
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-brand-600">
                <Trophy size={19} aria-hidden="true" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-semibold text-brand-700">{achievement.rank}</p>
                <ExternalLink size={16} className="text-neutral-300 group-hover:text-brand-600" aria-hidden="true" />
              </div>
              <h2 className="mt-2 text-lg font-semibold text-neutral-900 group-hover:text-brand-700">{achievement.title}</h2>
              <p className="mt-3 text-sm text-neutral-500">{achievement.org}</p>
              <p className="mt-4 font-mono text-xs text-neutral-400">{achievement.year}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
