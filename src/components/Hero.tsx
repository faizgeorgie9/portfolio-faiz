'use client'

import { useState } from 'react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const [photoLoaded, setPhotoLoaded] = useState(true)

  return (
    <section id="home" className="min-h-screen bg-white pt-28">
      <div className="max-w-6xl mx-auto px-6 min-h-[calc(100vh-7rem)] grid lg:grid-cols-[1fr_0.85fr] gap-14 items-center">
        <div>
          <p className="text-lg text-neutral-500 mb-3">Hi, I&apos;m</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-950 leading-[1.02] text-balance">
            Moch. Faiz Febriawan
          </h1>
          <h2 className="mt-5 text-2xl sm:text-3xl font-medium text-brand-600">
            Data Science Student & AI Engineer
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-500 font-light">
            Data Science student at State University of Surabaya specializing in machine learning,
            analytics, LLM systems, web automation, and data-driven product experiences.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-brand-600 hover:shadow-md hover:shadow-brand-100"
            >
              View projects
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a
              href="mailto:faiz86791@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-5 py-3 text-sm font-medium text-neutral-700 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
            >
              <Mail size={16} aria-hidden="true" />
              Contact me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="mailto:faiz86791@gmail.com"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              aria-label="Email"
            >
              <Mail size={18} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/faizgeorgie9"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              aria-label="GitHub"
            >
              <Github size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[420px]">
          <div className="absolute -left-6 top-10 h-52 w-52 rounded-full bg-brand-100 blur-2xl" />
          <div className="absolute -right-6 bottom-10 h-56 w-56 rounded-full bg-sky-100 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[46%] border border-brand-100 bg-gradient-to-br from-brand-100 via-white to-sky-100 p-5 shadow-xl shadow-brand-100/60">
            <div className="relative h-full w-full overflow-hidden rounded-[46%] bg-white/70 ring-1 ring-white">
              {photoLoaded ? (
                <img
                  src="/profile.jpg"
                  alt="Moch. Faiz Febriawan"
                  className="h-full w-full object-cover object-top"
                  onError={() => setPhotoLoaded(false)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-7xl font-semibold text-brand-700">
                  FF
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
