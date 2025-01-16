import { Typography } from '@mui/material'

interface DateAreaProps {
  date: string
}

const DateArea = (props: DateAreaProps) => {
  return (
    <Typography
      sx={{
        color: 'white',
        border: '1px solid rgba(255,255,255,0.13)',
        borderRadius: '4px',
        paddingY: ' 6px',
        paddingX: '12px',
        fontWeight: 500,
        letterSpacing: '1px',
      }}
      variant="body1"
    >
      {props.date}
    </Typography>
  )
}

export default DateArea
