import { Box } from '@mui/material'

interface RatingProps {
  rating: number
}

const Rating = (props: RatingProps) => {
  return (
    <Box>
      <div className="rating">
        {props.rating}
        <span className="rating-total">/10</span>
      </div>
    </Box>
  )
}

export default Rating
