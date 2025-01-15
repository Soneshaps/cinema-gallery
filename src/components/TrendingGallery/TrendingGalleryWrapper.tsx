import { Genre, MovieResponse, TmdbResponse, TVResponse } from '@/types'
import TrendingGallery from './TrendingGallery'
import { normalizeContentArray } from '@/utils'

interface TrendingGalleryWrapperProps {
  data: TmdbResponse<MovieResponse> | TmdbResponse<TVResponse>
  genreData: { genres: Genre[] }
  sectionTitle: string
  type: 'tv' | 'movie'
}
const TrendingGalleryWrapper = (props: TrendingGalleryWrapperProps) => {
  const { data, sectionTitle, type, genreData } = props

  const normalizedData = normalizeContentArray(data.results, type, genreData.genres)

  return <TrendingGallery galleryData={normalizedData} galleryTitle={sectionTitle} />
}

export default TrendingGalleryWrapper
