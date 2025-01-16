import TrendingGalleryWrapper from '@/components/TrendingGallery/TrendingGalleryWrapper'
import { useMovies } from '@/hooks/useMovies'
import { Box, CircularProgress } from '@mui/material'

const Dashboard = () => {
  const { getTrendingMovies, getTrendingTVShows, getGenreDetails } = useMovies()

  const { data: genreData, isLoading: isGenreDataFetching } = getGenreDetails()
  const { data: moviesData, isLoading: isMovieFetching } = getTrendingMovies()
  const { data: tvShowsData, isLoading: isTvShowsFetching } = getTrendingTVShows()

  if (isGenreDataFetching || isMovieFetching || isTvShowsFetching) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <TrendingGalleryWrapper type="movie" data={moviesData!} sectionTitle={'Trending Movies'} genreData={genreData!} />
      <TrendingGalleryWrapper type="tv" data={tvShowsData!} sectionTitle={'Trending TV Shows'} genreData={genreData!} />
    </div>
  )
}

export default Dashboard
