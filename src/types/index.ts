export interface GalleryCardProps {
  title: string
  rating: number
  releaseDate: string
  genre: string[]
  descriptions: string
}

export interface TrendingGalleryProps {
  galleryTitle: string
  galleryData: GalleryCardProps[]
}
