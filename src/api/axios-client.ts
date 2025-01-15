import axios from 'axios'

const baseUrl = import.meta.env.VITE_TMDB_URL
const token = import.meta.env.VITE_TMDB_API_KEY

export const tmdbApi = axios.create({
  baseURL: baseUrl || 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
