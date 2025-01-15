import axios from 'axios'

export const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MWMxMmUwNjliOTA0MTg2NDFkODI0MzQ2NDAwMTNiNyIsIm5iZiI6MTczNjg3OTgyNC4wNzgsInN1YiI6IjY3ODZhZWQwOTRmYzg3ZWY0ODdiNzI4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wP1GGW3jDRePrPenqatzDRoc_FFtlzjWBdgoRXVIqf8`,
  },
})
