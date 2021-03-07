import React from "react"
import { bool, string, node } from "prop-types"
import useStyles from "./styles"
import { classNames } from "src/helpers"
import { Button, Container, Typography } from "@material-ui/core"

const SectionHeading = ({
  title,
  subtitle,
  description,
  buttons,
  hero,
  leftAlign,
}) => {
  const classes = useStyles()

  return (
    <div
      className={[
        classes.sectionHeading,
        leftAlign || hero ? classes.leftAlign : "",
      ].join(" ")}
    >
      {title && <Typography variant={hero ? "h1" : "h2"}>{title}</Typography>}
      {subtitle && (
        <Typography variant="h3" component={hero ? "h2" : "h3"}>
          {subtitle}
        </Typography>
      )}
      {description && (
        <Typography variant="h4" component={hero ? "h3" : "h4"}>
          {description}
        </Typography>
      )}
      {buttons && <div className={classes.buttonContainer}>{buttons}</div>}
    </div>
  )
}

SectionHeading.propTypes = {
  align: string,
  title: string,
  subtitle: string,
  description: string,
  buttons: node,
  hero: bool,
  leftAlign: bool,
}

const Section = ({
  bgImage,
  button,
  children,
  className,
  dark,
  description,
  hero,
  subtitle,
  title,
  ...props
}) => {
  const classes = useStyles()
  const styleClasses = [classes.section, className]

  if (hero) {
    styleClasses.push(classes.hero)
  }
  if (dark) {
    styleClasses.push(classes.dark)
  }

  return (
    <div
      className={classNames(...styleClasses)}
      {...props}
      style={bgImage && { backgroundImage: `url(${bgImage})` }}
    >
      <Container>
        <SectionHeading {...{ title, subtitle, description, hero }} />
        {children}
        {button && (
          <Button variant="contained" color="secondary">
            {button}
          </Button>
        )}
      </Container>
    </div>
  )
}

Section.propTypes = {
  align: string,
  bgImage: string,
  button: string,
  dark: bool,
  children: node,
  description: string,
  hero: bool,
  subtitle: string,
  title: string,
}

export default Section
