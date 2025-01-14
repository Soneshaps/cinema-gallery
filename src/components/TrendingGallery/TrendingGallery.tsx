import GalleryCard, { GalleryCardProps } from '@components/GalleryCard/GalleryCard'
import { Box } from '@mui/material'

interface TrendingGalleryProps {
  galleryTitle: string
  galleryData: GalleryCardProps[]
}
const TrendingGallery = (props: TrendingGalleryProps) => {
  const { galleryData, galleryTitle } = props

  return (
    <div className="flex-1">
      <div className="text-4xl text-center mb-12">{galleryTitle}</div>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {galleryData.map((data) => {
          return <GalleryCard {...data} />
        })}
      </Box>
    </div>
  )
}

export default TrendingGallery
