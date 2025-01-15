import TrendingGallery from '@/components/TrendingGallery/TrendingGallery'
import { Box } from '@mui/material'

const MockMoviesData = [
  {
    title: 'The Great Adventure',
    rating: 4.5,
    releaseDate: 2021,
    genre: ['Adventure', 'Action', 'Drama'],
    descriptions: 'An epic journey of discovery and self-realization in the face of extraordinary challenges.',
  },
  {
    title: 'Mystery of the Lost City',
    rating: 4.7,
    releaseDate: 2019,
    genre: ['Mystery', 'Thriller', 'Fantasy'],
    descriptions: 'A thrilling tale unraveling secrets of an ancient civilization.',
  },
  {
    title: 'Love in the Time of Robots',
    rating: 4.2,
    releaseDate: 2023,
    genre: ['Romance', 'Sci-Fi'],
    descriptions: 'A heartwarming love story set in a futuristic world dominated by AI.',
  },
]

const Dashboard = () => {
  return (
    <Box
      sx={{ display: 'flex', gap: 8, flexDirection: { xs: 'flex-col', lg: 'flex-row' } }}
      className="flex max-lg:flex-col gap-8"
    >
      <TrendingGallery galleryTitle="Trending Movies" galleryData={MockMoviesData} />

      <TrendingGallery galleryTitle="Trending Series" galleryData={MockMoviesData} />
    </Box>
  )
}

export default Dashboard
