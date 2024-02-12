import { Navbar, MovieList } from '@/components'

export default function Home() {
  return (
    <main className='grid grid-rows-2'>
      <Navbar />
      <MovieList />
    </main>
  )
}
