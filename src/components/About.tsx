'use client'

import { useRef } from 'react'
import { useInView } from '@/hooks/useInView'

const strengths = ['Communication Skills', 'Adaptability', 'Continuous Learning', 'Time Management']

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <section id="about" className="scroll-mt-20 py-28 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-brand-600 tracking-[0.2em] uppercase">01 - About</span>
          <div className="flex-1 h-px bg-neutral-200" />
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-[0.8fr_1fr] gap-10 items-start transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <article className="rounded-lg border border-neutral-200 bg-white p-7 transition-all hover:border-brand-200 hover:bg-brand-50/40 hover:shadow-sm">
            <p className="font-mono text-xs text-brand-600 tracking-[0.2em] uppercase">Education</p>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-neutral-900">
              Bachelor of Data Science
            </h2>
            <p className="mt-2 text-neutral-500">State University of Surabaya</p>

            <div className="mt-8 grid gap-4 border-t border-neutral-100 pt-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">GPA</p>
                <p className="mt-1 font-mono text-lg font-bold text-brand-600">3.81/4.00</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">Period</p>
                <p className="mt-1 text-neutral-700">Aug 2023 - Present</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">Location</p>
                <p className="mt-1 text-neutral-700">Surabaya, Indonesia</p>
              </div>
            </div>
          </article>

          <article className="rounded-lg border border-neutral-200 bg-white p-7 transition-all hover:border-brand-200 hover:bg-brand-50/40 hover:shadow-sm">
            <p className="font-mono text-xs text-brand-600 tracking-[0.2em] uppercase">My Mission</p>
            <div className="mt-5 space-y-4 text-neutral-500 font-light leading-relaxed">
              <p>
                I&apos;m passionate about leveraging data, machine learning, and AI systems to improve
                operational efficiency, uncover user behavior patterns, and support practical business decisions.
              </p>
              <p>
                With an analytical mindset and production-oriented curiosity, I continuously learn to stay
                adaptive in the fast-evolving data and AI landscape.
              </p>
            </div>

            <div className="mt-8 border-t border-neutral-100 pt-6">
              <h3 className="text-lg font-semibold text-neutral-900">Key Strengths</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {strengths.map((strength) => (
                  <div
                    key={strength}
                    className="rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-700 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {strength}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
