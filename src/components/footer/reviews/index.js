import React from "react"
import { array } from "prop-types"
import { Section } from "components"

const Reviews = ({ data }) => {
  return <Section>Reviews {data}</Section>
}

Reviews.propTypes = {
  data: array,
}

export default Reviews
