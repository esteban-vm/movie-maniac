import type { MovieListName } from '@/utils'
import * as Components from '@/components'
import { getMoviesByList } from '@/utils'

export default async function MoviesContainer({ list }: { list: MovieListName }) {
  const movies = await getMoviesByList(list)

  return (
    <>
      <Components.Navbar />
      <Components.Header title={list} />
      <Components.MovieList>
        {movies.map((movie) => (
          <Components.MovieCard key={crypto.randomUUID()} {...movie} />
        ))}
      </Components.MovieList>
    </>
  )
}
