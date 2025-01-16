import SearchIcon from '@mui/icons-material/Search'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Box, Button, ButtonProps, Paper, styled, Tooltip, Typography } from '@mui/material'

import DescriptionArea from '@components/common/DescriptionArea'
import GenreList from '@components/common/GenreList'
import DateArea from '@components/common/DateArea'
import Rating from '@components/common/Rating'
import { NormalizedContent } from '@/types'
import { getYouTubeSearchUrl, getYtsSearchUrl, openInNewWindow } from '@/utils'

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

const GalleryCard = (props: NormalizedContent) => {
  const { title, rating, releaseDate, genreNames, overview: descriptions, posterPath: imgUrl } = props

  return (
    <Paper
      className="paper-hover"
      sx={{
        height: '400px',
        transition: 'transform 0.3s ease',
        backgroundColor: 'black',
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
      variant="elevation"
      elevation={3}
    >
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-4/5 sm:h-full md:w-1/2 object-cover rounded-[5px] absolute top-0 right-0"
      />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          background: {
            md: 'linear-gradient(to right, #0d0d0c 50%, transparent 100%)',
            xs: 'linear-gradient(to top, #0d0d0c 60%, transparent 100%)',
          },
          backgroundBlendMode: 'multiply',
          borderRadius: '5px',
          padding: '16px',
        }}
      >
        <Typography
          sx={{ color: 'white', fontSize: '25px', fontWeight: 500, textTransform: 'capitalize' }}
          variant="h4"
        >
          {title}
        </Typography>

        <Rating rating={rating} />

        <Box sx={{ display: 'flex', marginTop: '16px' }}>
          <DateArea date={releaseDate} />
          <Box sx={{ padding: ' 8px', marginLeft: '16px' }}>
            <GenreList genres={genreNames} />
          </Box>
        </Box>

        <Box sx={{ width: { xs: '80%', md: '55%' }, marginTop: '30px', overflow: 'hidden' }}>
          <DescriptionArea description={descriptions} />
        </Box>

        <Box sx={{ position: 'absolute', left: '16px', bottom: '16px', display: 'flex' }}>
          <YouTubeButton
            onClick={() => openInNewWindow(getYouTubeSearchUrl(title))}
            variant="contained"
            startIcon={<YouTubeIcon />}
          >
            WATCH TRAILER
          </YouTubeButton>

          <Tooltip title="Search in YTS" arrow>
            <TorrentButton
              sx={{ marginLeft: '20px', display: { xs: 'none', md: 'flex' } }}
              onClick={() => openInNewWindow(getYtsSearchUrl(title))}
              variant="outlined"
              startIcon={<SearchIcon />}
            >
              SEARCH TORRENT
            </TorrentButton>
          </Tooltip>
        </Box>
      </Box>
    </Paper>
  )
}

export default GalleryCard
