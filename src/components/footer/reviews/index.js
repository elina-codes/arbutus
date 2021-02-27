import React from "react"
import { array } from "prop-types"
import useStyles from "./styles"

const Reviews = ({ data }) => {
  const classes = useStyles()

  return <div>Reviews {data}</div>
}

Reviews.propTypes = {
  data: array,
}

export default Reviews
