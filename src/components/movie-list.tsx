import type { ReactNode } from 'react'

interface MovieListProps {
  children: ReactNode
}

export default function MovieList({ children }: MovieListProps) {
  return (
    <div className='grid h-full gap-1 py-2 sm:grid-cols-2 sm:py-3 md:grid-cols-3 md:gap-2 md:py-3 lg:grid-cols-4 lg:py-4 xl:grid-cols-5 xl:py-5 2xl:grid-cols-6'>
      {children}
    </div>
  )
}
