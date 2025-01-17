import { Genre, MovieResponse, NormalizedContent, TVResponse } from './types'

/**
 * Normalize TV and Shows Response
 *
 * @param {MovieResponse | TVResponse} content
 * @param {string} type - type.
 * @param {Genre[]}
 * @returns {NormalizedContent}
 */
export function normalizeContent(
  content: MovieResponse | TVResponse,
  type: 'movie' | 'tv',
  genres: Genre[],
): NormalizedContent {
  const genreMap = new Map(genres?.map((genre) => [genre.id, genre.name]))
  const genreNames = content.genre_ids.map((id) => genreMap.get(id) || '')

  if (type === 'movie') {
    const movieContent = content as MovieResponse

    return {
      id: movieContent.id,
      title: movieContent.original_title,
      posterPath: getImageUrl(movieContent.poster_path),
      backdropPath: movieContent.backdrop_path,
      overview: movieContent.overview,
      releaseDate: movieContent.release_date,
      rating: movieContent.vote_average,
      voteCount: movieContent.vote_count,
      genreIds: movieContent.genre_ids,
      mediaType: 'movie',
      genreNames,
    }
  } else {
    const tvContent = content as TVResponse

    return {
      id: tvContent.id,
      title: tvContent.name,
      posterPath: getImageUrl(tvContent.poster_path),
      backdropPath: tvContent.backdrop_path,
      overview: tvContent.overview,
      releaseDate: tvContent.first_air_date,
      rating: tvContent.vote_average,
      voteCount: tvContent.vote_count,
      genreIds: tvContent.genre_ids,
      mediaType: 'tv',
      genreNames,
    }
  }
}

/**
 * Helper function to normalize arrays of content
 *
 * @param {MovieResponse | TVResponse} content
 * @param {string} type - type.
 * @param {Genre[]}
 * @returns {NormalizedContent}
 */
export function normalizeContentArray(
  contents: (MovieResponse | TVResponse)[],
  type: 'movie' | 'tv',
  genres: Genre[],
): NormalizedContent[] {
  return contents.map((content) => normalizeContent(content, type, genres))
}

/**
 * Helper function to get Image URL
 *
 * @param {string} path
 * @param {string} size
 * @returns {string}
 */
export function getImageUrl(path: string, size: 'w200' | 'w500' | 'original' = 'w500'): string {
  if (!path) {
    return ''
  }

  return `https://image.tmdb.org/t/p/${size}${path}`
}

/**
 * Helper function to open in new window
 *
 * @param {string} url
 * @returns {void}
 */
export function openInNewWindow(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer')
}

/**
 * Helper function to get Youtube Search URL
 *
 * @param {string} searchQuery
 * @returns {string}
 */
export function getYouTubeSearchUrl(searchQuery: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}+trailer`
}

/**
 * Helper function to get IMDB Search URL
 *
 * @param {string} searchQuery
 * @returns {string}
 */
export function openInImdb(searchQuery?: string) {
  return `https://www.imdb.com/title/${searchQuery}/`
}

/**
 * Helper function to get YTS Search URL
 *
 * @param {string} searchQuery
 * @returns {string}
 */
export function getYtsSearchUrl(searchQuery: string) {
  return `https://yts.mx/browse-movies/${encodeURIComponent(searchQuery)}`
}
