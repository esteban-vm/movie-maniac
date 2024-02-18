import type { Movie } from '@/types'
import { MovieList, MovieCard } from '@/components'

const fetchPopularMovies = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/movies/popular`)
  const data: Movie[] = await response.json()
  return data
}

export default async function Home() {
  const movies = await fetchPopularMovies()

  return (
    <MovieList>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </MovieList>
  )
}
