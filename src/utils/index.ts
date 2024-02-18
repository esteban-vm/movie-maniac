import type { MovieData, MovieListName, MovieListResponse } from '@/types'
import { NextResponse } from 'next/server'

export const handleRequest = (list: MovieListName) => {
  return async () => {
    const url = <const>`https://api.themoviedb.org/3/movie/${list}?language=en-US&page=1`

    const options: RequestInit = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    }

    const response = await fetch(url, options)
    const { results }: MovieListResponse = await response.json()
    return NextResponse.json(results, { status: 200 })
  }
}

export const getMoviesByList = async (list: MovieListName) => {
  const response = await fetch(`${process.env.BASE_URL}/api/movies/${list}`)
  const movies: MovieData[] = await response.json()
  return movies
}
