import type { Metadata } from 'next'
import { DM_Sans, Space_Mono } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Moch. Faiz Febriawan — AI Engineer',
  description:
    'Data Science undergraduate & AI Engineer specializing in LLM pipelines, RAG architectures, and end-to-end ML systems.',
  openGraph: {
    title: 'Moch. Faiz Febriawan — AI Engineer',
    description: 'Building production-ready AI systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceMono.variable}`}>
      <body className="bg-white text-neutral-800 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}