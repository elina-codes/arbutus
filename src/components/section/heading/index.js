import React from "react"
import { string, bool } from "prop-types"
import { Typography } from "@material-ui/core"
import useStyles from "./styles"

const SectionHeading = ({ title, subtitle, description, hero }) => {
  const classes = useStyles()

  return (
    <div>
      {title && <Typography variant={hero ? "h1" : "h2"}>{title}</Typography>}
      {subtitle && <Typography variant="h3">{subtitle}</Typography>}
      {description && <Typography variant="h4">{description}</Typography>}
    </div>
  )
}

SectionHeading.propTypes = {
  align: string,
  title: string,
  subtitle: string,
  description: string,
  hero: bool,
}

export default SectionHeading
