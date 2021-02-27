import React from "react"
import { string, node } from "prop-types"
import { Typography } from "@material-ui/core"
import useStyles from "./styles"
import SectionHeading from "./heading"

const Section = ({ title, subtitle, description, children }) => {
  const classes = useStyles()

  return (
    <div className={classes.section}>
      <SectionHeading {...{ title, subtitle, description }} />
      <Typography>{children}</Typography>
    </div>
  )
}

Section.propTypes = {
  align: string,
  title: string,
  subtitle: string,
  description: string,
  children: node,
}

export default Section
