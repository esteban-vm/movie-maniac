import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import localFont from 'next/font/local'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Movie Maniac',
  description: 'Website to find movies',
}

const montserrat = localFont({
  src: '../fonts/Montserrat.woff2',
  display: 'swap',
  fallback: ['sans-serif'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={montserrat.className}>
      <body>{children}</body>
    </html>
  )
}
