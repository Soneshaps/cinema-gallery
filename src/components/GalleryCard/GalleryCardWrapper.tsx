import { NormalizedContent } from '@/types'
import GalleryCard from './GalleryCard'
import { useMovies } from '@/hooks/useMovies'

const GalleryCardWrapper = (props: NormalizedContent) => {
  const { getImdbDetails } = useMovies()

  const { data } = getImdbDetails(props.mediaType, props.id)

  return <GalleryCard {...props} imdb_title={data?.imdb_id} />
}

export default GalleryCardWrapper
