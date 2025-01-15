import { Typography } from '@mui/material'

interface DateAreaProps {
  date: string
}

const DateArea = (props: DateAreaProps) => {
  return (
    <Typography sx={{ color: 'white', border: '1px solid rgba(255,255,255,0.13)', padding: ' 8px' }} variant="body1">
      {props.date}
    </Typography>
  )
}

export default DateArea
