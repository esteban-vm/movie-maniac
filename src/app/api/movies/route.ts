import type { Movie } from '@/types'
import { NextResponse } from 'next/server'

interface MoviesData {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

const handler = async () => {
  const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  })

  const { results }: MoviesData = await response.json()
  return NextResponse.json(results)
}

export { handler as GET }
