import { Box } from '@mui/material'

import { TrendingGalleryProps } from '@/types'
import GalleryCard from '@components/GalleryCard/GalleryCard'

const TrendingGallery = (props: TrendingGalleryProps) => {
  const { galleryData, galleryTitle } = props

  return (
    <div className="flex-1">
      <div className="text-title-4 text-center mb-8">{galleryTitle}</div>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, borderRadius: '12px', paddingX: '10px' }}>
        {galleryData.map((data) => {
          return <GalleryCard key={data.id} {...data} />
        })}
      </Box>
    </div>
  )
}

export default TrendingGallery
