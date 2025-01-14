import { Box, Button, ButtonProps, Paper, styled, Typography } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube'
import SearchIcon from '@mui/icons-material/Search'

const YouTubeButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: '#FF0000',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#f50057',
  },
}))

const TorrentButton = styled(Button)<ButtonProps>(() => ({
  borderColor: '#6ac045',
  color: '#6ac045',
}))

export interface GalleryCardProps {
  title: string
  rating: number
  releaseDate: number
  genre: string[]
  descriptions: string
}

const GalleryCard = (props: GalleryCardProps) => {
  const { title, rating, releaseDate, genre, descriptions } = props

  return (
    <Paper
      className="paper-hover"
      sx={{
        height: '400px',
        transition: 'transform 0.3s ease',
        backgroundColor: 'black',
        position: 'relative',
      }}
      variant="elevation"
      elevation={3}
    >
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/paul-mescal-pedro-pascal-gladiator-2-668bc8fe2ac78.jpg"
        alt="example"
        style={{ width: '80%', height: '100%', borderRadius: '5px', position: 'absolute', top: '0', right: '0' }}
      />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          background: 'linear-gradient(to right, #0d0d0c 50%, transparent 100%)',
          backgroundBlendMode: 'multiply',
          borderRadius: '5px',
          padding: '16px',
        }}
      >
        <Typography sx={{ color: 'white' }} variant="h4">
          {title}
        </Typography>

        <Box>
          <div className="rating">
            {rating}
            <span className="rating-total">/10</span>
          </div>
        </Box>

        <Box sx={{ display: 'flex', marginTop: '16px' }}>
          <Typography
            sx={{ color: 'white', border: '1px solid rgba(255,255,255,0.13)', padding: ' 8px' }}
            variant="body1"
          >
            {releaseDate}
          </Typography>

          <Typography sx={{ color: '#67686a', padding: ' 8px', marginLeft: '16px' }} variant="body2">
            {genre.map((genre) => {
              return <li className="genre-list">{genre}</li>
            })}
          </Typography>
        </Box>

        <Box sx={{ width: '55%', marginTop: '30px', maxHeight: '168px', overflow: 'hidden' }}>
          <Typography sx={{ color: '#ffffff' }} variant="body1">
            {descriptions}
          </Typography>
        </Box>

        <Box sx={{ position: 'absolute', left: '16px', bottom: '10px' }}>
          <YouTubeButton variant="contained" startIcon={<YouTubeIcon />}>
            WATCH TRAILER
          </YouTubeButton>

          <TorrentButton sx={{ marginLeft: '20px' }} variant="outlined" startIcon={<SearchIcon />}>
            SEARCH TORRENT
          </TorrentButton>
        </Box>
      </Box>
    </Paper>
  )
}

export default GalleryCard
