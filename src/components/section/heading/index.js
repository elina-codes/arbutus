import React from "react"
import { string, node } from "prop-types"
import { Typography } from "@material-ui/core"
import useStyles from "./styles"

const SectionHeading = ({ title, subtitle, description, children }) => {
  const classes = useStyles()

  return (
    <div className={classes.sectionHeading}>
      {title && <Typography variant="h2">{title}</Typography>}
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
  children: node,
}

export default SectionHeading
