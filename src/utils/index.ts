import type { Movie } from 'tmdb-ts'
import { NextResponse } from 'next/server'
import { TMDB } from 'tmdb-ts'

const tmdb = new TMDB(process.env.ACCESS_TOKEN!)
type MovieListName = 'popular' | 'top_rated' | 'upcoming'

export const handleRequest = (list: MovieListName) => {
  return async () => {
    try {
      let movies: Movie[]

      switch (list) {
        case 'popular': {
          void ({ results: movies } = await tmdb.movies.popular())
          break
        }

        case 'top_rated': {
          void ({ results: movies } = await tmdb.movies.topRated())
          break
        }

        case 'upcoming': {
          void ({ results: movies } = await tmdb.movies.upcoming())
          break
        }
      }

      return NextResponse.json(movies)
    } catch {
      return []
    }
  }
}

export const getMoviesByList = async (list: MovieListName) => {
  const response = await fetch(`${process.env.BASE_URL}/api/movies/${list}`)
  const movies: Movie[] = await response.json()
  return movies
}
