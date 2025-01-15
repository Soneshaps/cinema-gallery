import { Typography } from '@mui/material'

interface DescriptionAreaProps {
  description: string
}
const DescriptionArea = (props: DescriptionAreaProps) => {
  return (
    <Typography sx={{ color: '#ffffff' }} variant="body1">
      {props.description}
    </Typography>
  )
}

export default DescriptionArea
