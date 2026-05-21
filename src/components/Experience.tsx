'use client'

import { useRef } from 'react'
import { useInView } from '@/hooks/useInView'
import { EXPERIENCES } from '@/data/data'

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <section id="experience" className="scroll-mt-20 py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-brand-600 tracking-[0.2em] uppercase">03 - Experience</span>
          <div className="flex-1 h-px bg-neutral-200" />
        </div>

        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-12">
            Where I&apos;ve worked
          </h2>

          <div className="relative">
            <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-neutral-200" />

            <div className="space-y-0">
              {EXPERIENCES.map((exp, i) => (
                <div
                  key={exp.company}
                  className="relative grid md:grid-cols-[200px_1fr] gap-0 group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="absolute left-0 md:left-[200px] top-8 w-2.5 h-2.5 rounded-full bg-white border-2 border-neutral-300 group-hover:border-brand-500 group-hover:bg-brand-50 transition-all duration-300 -translate-x-[5px] z-10" />

                  <div className="hidden md:block pr-10 pt-7 text-right pb-10">
                    <p className="font-mono text-xs text-neutral-400 tracking-wide">{exp.date}</p>
                    <p className="text-sm font-semibold text-brand-600 mt-1">{exp.company}</p>
                    <span className="inline-block mt-1.5 text-xs px-2 py-0.5 bg-neutral-100 text-neutral-500 rounded-full font-medium">
                      {exp.type}
                    </span>
                  </div>

                  <div className="pl-6 md:pl-10 pt-7 pb-10 border-b border-neutral-100 last:border-b-0 transition-colors group-hover:bg-brand-50/40">
                    <div className="md:hidden mb-3">
                      <p className="font-mono text-xs text-neutral-400">{exp.date}</p>
                      <p className="text-sm font-semibold text-brand-600">{exp.company}</p>
                    </div>

                    <h3 className="text-lg font-semibold text-neutral-900 mb-4">{exp.title}</h3>
                    <ul className="space-y-2.5">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm text-neutral-500 font-light leading-relaxed">
                          <span className="text-brand-400 mt-1 shrink-0">-</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
