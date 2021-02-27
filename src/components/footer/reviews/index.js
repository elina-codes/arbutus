import React from "react"
import { array } from "prop-types"

const Reviews = ({ data }) => {
  return <div>Reviews {data}</div>
}

Reviews.propTypes = {
  data: array,
}

export default Reviews
