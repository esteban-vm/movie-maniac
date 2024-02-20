import type { ReactNode } from 'react'

export default function MovieList({ children }: { children: ReactNode }) {
  return (
    <div className='grid h-full gap-1 py-2 sm:grid-cols-2 sm:py-3 md:grid-cols-3 md:gap-2 md:py-3 lg:grid-cols-4 lg:py-4 xl:grid-cols-5 xl:py-5'>
      {children}
    </div>
  )
}
