import { tmdbApi } from '@/api/axios-client'
import { useQuery } from '@tanstack/react-query'
import { ExternalDetails, Genre, MovieResponse, TmdbResponse, TVResponse } from '@/types'

/* eslint-disable react-hooks/rules-of-hooks */

export const useMovies = () => {
  const getTrendingMovies = (page: number = 1) => {
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

  const getImdbDetails = (type: 'movie' | 'tv', id: number) => {
    return useQuery({
      queryKey: ['imdbDetails', id],
      queryFn: async () => {
        const { data } = await tmdbApi.get<ExternalDetails>(`${type}/${id}/external_ids`)

        return data
      },
    })
  }

  return {
    getTrendingMovies,
    getTrendingTVShows,
    getGenreDetails,
    getImdbDetails,
  }
}
