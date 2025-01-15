import { Typography } from '@mui/material'

interface GenreListProps {
  genres: string[]
}

const GenreList = (props: GenreListProps) => {
  return (
    <Typography sx={{ color: '#67686a' }} variant="body2">
      {props.genres.map((genre) => {
        return <li className="genre-list">{genre}</li>
      })}
    </Typography>
  )
}

export default GenreList
