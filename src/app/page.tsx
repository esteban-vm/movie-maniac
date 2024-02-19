import { Header, MovieList, MovieCard } from '@/components'
import { getMoviesByList } from '@/utils'

export default async function Home() {
  const movies = await getMoviesByList('popular')

  return (
    <>
      <Header title='popular' />
      <MovieList>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </MovieList>
    </>
  )
}
