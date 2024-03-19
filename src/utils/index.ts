import type { Movie } from 'tmdb-ts'
import { NextResponse } from 'next/server'
import { TMDB } from 'tmdb-ts'

export type MovieListName = 'upcoming' | 'popular' | 'top_rated'

const { ACCESS_TOKEN: token, NEXT_PUBLIC_BASE_API_URL: apiUrl } = process.env
const { movies } = new TMDB(token!)

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
      return
    }
  }
}

export const getMoviesByList = async (list: MovieListName) => {
  if (!apiUrl) return null
  const listName = list === 'popular' ? '' : `/${list}`
  const response = await fetch(`${apiUrl}/api/movies${listName}`)
  const movies: Movie[] = await response.json()
  return movies
}
