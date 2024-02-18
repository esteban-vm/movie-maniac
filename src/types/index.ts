export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface ApiResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface UpcomingMovieList extends ApiResponse {
  dates: {
    maximum: string
    minimum: string
  }
}

export type { ApiResponse as PopularMovieList, ApiResponse as TopRatedMovieList }
