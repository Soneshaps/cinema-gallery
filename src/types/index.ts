export interface GalleryCardProps {
  title: string
  rating: number
  releaseDate: number
  genre: string[]
  descriptions: string
}

export interface TrendingGalleryProps {
  galleryTitle: string
  galleryData: GalleryCardProps[]
}
