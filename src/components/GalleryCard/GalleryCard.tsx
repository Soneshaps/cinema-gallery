import SearchIcon from '@mui/icons-material/Search'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Box, Button, ButtonProps, Paper, styled, Typography } from '@mui/material'

import { GalleryCardProps } from '@/types'
import DescriptionArea from '@components/common/DescriptionArea'
import GenreList from '@components/common/GenreList'
import DateArea from '@components/common/DateArea'
import Rating from '@components/common/Rating'

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

const GalleryCard = (props: GalleryCardProps) => {
  const { title, rating, releaseDate, genre, descriptions } = props

  return (
    <Paper
      className="paper-hover"
      sx={{
        height: { xs: '400px', md: '600px', lg: '400px' },
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
        className="w-full h-4/5 sm:h-full lg:w-4/5 rounded-[5px] absolute top-0 right-0"
      />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          background: {
            md: 'linear-gradient(to right, #0d0d0c 50%, transparent 100%)',
            xs: 'linear-gradient(to top, #0d0d0c 40%, transparent 100%)',
          },
          backgroundBlendMode: 'multiply',
          borderRadius: '5px',
          padding: '16px',
        }}
      >
        <Typography sx={{ color: 'white' }} variant="h4">
          {title}
        </Typography>

        <Rating rating={rating} />

        <Box sx={{ display: 'flex', marginTop: '16px' }}>
          <DateArea date={releaseDate} />
          <Box sx={{ padding: ' 8px', marginLeft: '16px' }}>
            <GenreList genres={genre} />
          </Box>
        </Box>

        <Box sx={{ width: '55%', marginTop: '30px', maxHeight: '168px', overflow: 'hidden' }}>
          <DescriptionArea description={descriptions} />
        </Box>

        <Box sx={{ position: 'absolute', left: '16px', bottom: '16px', display: 'flex' }}>
          <YouTubeButton variant="contained" startIcon={<YouTubeIcon />}>
            WATCH TRAILER
          </YouTubeButton>

          <TorrentButton
            sx={{ marginLeft: '20px', display: { xs: 'none', md: 'flex' } }}
            variant="outlined"
            startIcon={<SearchIcon />}
          >
            SEARCH TORRENT
          </TorrentButton>
        </Box>
      </Box>
    </Paper>
  )
}

export default GalleryCard
