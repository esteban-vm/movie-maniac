import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import localFont from 'next/font/local'
import { Navbar } from '@/components'
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
    <html lang='en'>
      <body className={montserrat.className}>
        <main className='container mx-auto grid h-screen grid-rows-12 bg-black/80 p-2 sm:p-3 md:p-3 lg:p-4 xl:p-5'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
