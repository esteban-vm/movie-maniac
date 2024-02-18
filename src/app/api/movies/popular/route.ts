import type { PopularMovieList } from '@/types'
import { NextResponse } from 'next/server'

const handler = async () => {
  const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

  const options: RequestInit = {
    method: 'GET',
    headers: { accept: 'application/json', Authorization: `Bearer ${process.env.ACCESS_TOKEN}` },
  }

  const response = await fetch(url, options)
  const { results }: PopularMovieList = await response.json()
  return NextResponse.json(results, { status: 200 })
}

export { handler as GET }
