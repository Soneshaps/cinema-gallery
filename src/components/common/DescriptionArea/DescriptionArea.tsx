import { Typography } from '@mui/material'

interface DescriptionAreaProps {
  description: string
}
const DescriptionArea = (props: DescriptionAreaProps) => {
  return (
    <Typography
      sx={{
        color: '#ffffff',
        display: '-webkit-box',
        WebkitLineClamp: 6, // Number of lines
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
      variant="body1"
    >
      {props.description}
    </Typography>
  )
}

export default DescriptionArea
