import { Header, MovieList, MovieCard } from '@/components'
import { getMoviesByList } from '@/utils'

export default async function Upcoming() {
  const movies = await getMoviesByList('upcoming')

  return (
    <>
      <Header title='upcoming' />
      <MovieList>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </MovieList>
    </>
  )
}
