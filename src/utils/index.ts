import type { Movie } from 'tmdb-ts'
import { NextResponse } from 'next/server'
import { TMDB } from 'tmdb-ts'

export type MovieListName = 'upcoming' | 'popular' | 'top_rated'

const { movies } = new TMDB(process.env.ACCESS_TOKEN!)

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
  const listName = list === 'popular' ? '' : `/${list}`
  const response = await fetch(`${process.env.BASE_URL}/api/movies${listName}`)
  const movies: Movie[] = await response.json()
  return movies
}
