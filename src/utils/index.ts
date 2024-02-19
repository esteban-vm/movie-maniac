import type { Movie } from 'tmdb-ts'
import { NextResponse } from 'next/server'
import { TMDB } from 'tmdb-ts'

const { movies } = new TMDB(process.env.ACCESS_TOKEN!)
type MovieListName = 'popular' | 'top_rated' | 'upcoming'

export const handleRequest = (list: MovieListName) => {
  return async () => {
    try {
      let results: Movie[]

      switch (list) {
        case 'popular': {
          void ({ results } = await movies.popular())
          break
        }

        case 'top_rated': {
          void ({ results } = await movies.topRated())
          break
        }

        case 'upcoming': {
          void ({ results } = await movies.upcoming())
          break
        }
      }

      return NextResponse.json(results)
    } catch {
      return null
    }
  }
}

export const getMoviesByList = async (list: MovieListName) => {
  const response = await fetch(`${process.env.BASE_URL}/api/movies/${list}`)
  const movies: Movie[] = await response.json()
  return movies
}
