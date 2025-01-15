import { useQuery } from '@tanstack/react-query'
import { tmdbApi } from '@/api/axios-client'
import { Genre, MovieResponse, TmdbResponse, TVResponse } from '@/types'

export const useMovies = () => {
  const getTrendingMovies = (page: number = 1) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
      queryKey: ['popularMovies', page],
      queryFn: async () => {
        const { data } = await tmdbApi.get<TmdbResponse<MovieResponse>>('trending/movie/day', {
          params: { page },
        })

        return data
      },
    })
  }

  const getTrendingTVShows = (page: number = 1) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
      queryKey: ['popularTvShows', page],
      queryFn: async () => {
        const { data } = await tmdbApi.get<TmdbResponse<TVResponse>>('trending/tv/day', {
          params: { page },
        })

        return data
      },
    })
  }

  const getGenreDetails = (page: number = 1) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
      queryKey: ['genreList', page],
      queryFn: async () => {
        const { data } = await tmdbApi.get<{ genres: Genre[] }>('genre/movie/list', {
          params: { page },
        })

        return data
      },
    })
  }

  // Helper function to construct image URLs
  const getImageUrl = (path: string | null, size: 'w500' | 'original' = 'w500') => {
    if (!path) {
      return ''
    }

    return `https://image.tmdb.org/t/p/${size}${path}`
  }

  return {
    getTrendingMovies,
    getTrendingTVShows,
    getGenreDetails,
    getImageUrl,
  }
}
