import React from "react"
import { string, node } from "prop-types"
import useStyles from "./styles"
import SectionHeading from "./heading"

const Section = ({
  className,
  title,
  subtitle,
  description,
  children,
  ...props
}) => {
  const classes = useStyles()

  return (
    <div className={[classes.section, className].join(" ")} {...props}>
      <SectionHeading {...{ title, subtitle, description }} />
      {children}
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
