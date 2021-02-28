import React from "react"
import { bool, string, node } from "prop-types"
import useStyles from "./styles"
import { Button, Typography } from "@material-ui/core"

const SectionHeading = ({ title, subtitle, description, hero, leftAlign }) => {
  const classes = useStyles()

  return (
    <div
      className={[
        classes.sectionHeading,
        leftAlign || hero ? classes.leftAlign : "",
      ].join(" ")}
    >
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
  leftAlign: bool,
}

const Section = ({
  bgImage,
  button,
  children,
  className,
  description,
  hero,
  subtitle,
  title,
  ...props
}) => {
  const classes = useStyles()

  return (
    <div
      className={[classes.section, hero ? classes.hero : "", className].join(
        " "
      )}
      {...props}
      style={bgImage && { backgroundImage: `url(${bgImage})` }}
    >
      <SectionHeading {...{ title, subtitle, description, hero }} />
      {children}
      {button && (
        <Button variant="contained" color="secondary">
          {button}
        </Button>
      )}
    </div>
  )
}

Section.propTypes = {
  align: string,
  bgImage: string,
  button: string,
  children: node,
  description: string,
  hero: bool,
  subtitle: string,
  title: string,
}

export default Section
