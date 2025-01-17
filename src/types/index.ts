export interface GalleryCardProps {
  title: string
  rating: number
  releaseDate: string
  genre: string[]
  descriptions: string
}

export interface TmdbResponse<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export interface MovieResponse {
  backdrop_path: string // Path to the backdrop image
  id: number // Unique ID of the movie
  title: string // Movie title
  original_title: string // Original title of the movie
  overview: string // Summary or description of the movie
  poster_path: string // Path to the poster image
  media_type: string // Type of media, e.g., "movie"
  adult: boolean // Indicates if the movie is for adults
  original_language: string // Original language code, e.g., "en"
  genre_ids: number[] // Array of genre IDs
  popularity: number // Popularity score
  release_date: string // Release date in YYYY-MM-DD format
  video: boolean // Indicates if the media has an associated video
  vote_average: number // Average vote score
  vote_count: number // Number of votes
}

export interface TVResponse {
  backdrop_path: string // Path to the backdrop image
  id: number // Unique ID of the TV show
  name: string // Name of the TV show
  original_name: string // Original name of the TV show
  overview: string // Summary or description of the TV show
  poster_path: string // Path to the poster image
  media_type: string // Type of media, e.g., "tv"
  adult: boolean // Indicates if the TV show is for adults
  original_language: string // Original language code, e.g., "en"
  genre_ids: number[] // Array of genre IDs
  popularity: number // Popularity score
  first_air_date: string // First air date in YYYY-MM-DD format
  vote_average: number // Average vote score
  vote_count: number // Number of votes
  origin_country: string[] // Array of countries of origin
}

export interface NormalizedContent {
  id: number
  title: string
  posterPath: string
  backdropPath: string | null
  overview: string
  releaseDate: string
  rating: number
  voteCount: number
  genreIds: number[]
  genreNames: string[]
  mediaType: 'movie' | 'tv'
  imdb_title?: string
}

export interface Genre {
  id: number
  name: string
}

export interface TrendingGalleryProps {
  galleryTitle: string
  galleryData: NormalizedContent[]
}

export interface ExternalDetails {
  id: number
  imdb_id: string
}
