import React from "react"
import { bool, object, string, node } from "prop-types"
import useStyles from "./styles"
import { classNames } from "src/helpers"
import { Button, Container, Typography } from "@material-ui/core"
import Image from "components/image"

const SectionHeading = ({
  title,
  subtitle,
  description,
  headerButtons,
  hero,
  center,
}) => {
  const classes = useStyles()

  return (
    <div
      className={classNames(
        classes.sectionHeading,
        center ? classes.center : ""
      )}
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
      {headerButtons && (
        <div className={classes.buttonContainer}>{headerButtons}</div>
      )}
    </div>
  )
}

SectionHeading.propTypes = {
  align: string,
  center: bool,
  title: string,
  subtitle: string,
  description: string,
  buttons: node,
  hero: bool,
}

const Section = ({
  bgImage,
  button,
  center,
  children,
  className,
  dark,
  description,
  hero,
  image,
  subtitle,
  title,
  headerButtons,
  ...props
}) => {
  const classes = useStyles()
  const centerSection = !hero && (!image || center)
  const sectionClasses = [classes.section]

  if (hero) {
    sectionClasses.push(classes.hero)
  }
  if (dark || hero) {
    sectionClasses.push(classes.dark)
  }
  if (centerSection) {
    sectionClasses.push(classes.center)
  }

  const sectionInnerClasses = [classes.sectionInner]
  if (image?.position === "right") {
    sectionInnerClasses.push("imageRight")
  }
  if (image?.position === "left") {
    sectionInnerClasses.push("imageLeft")
  }

  return (
    <div
      className={classNames(...sectionClasses, className)}
      {...props}
      style={bgImage && { backgroundImage: `url(${bgImage})` }}
    >
      <Container>
        <div className={classNames(...sectionInnerClasses)}>
          <div className={classes.sectionContent}>
            <SectionHeading
              {...{
                title,
                subtitle,
                description,
                hero,
                center: centerSection,
                buttons: headerButtons,
              }}
            />
            {children}
            {button && (
              <Button
                variant="contained"
                color="secondary"
                className={classes.sectionButton}
              >
                {button}
              </Button>
            )}
          </div>
          {image?.src && (
            <div className={classes.sectionImage}>
              <img src={image.src} alt={image?.alt} className={classes.image} />
            </div>
          )}
        </div>
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
  headerButtons: node,
  description: string,
  hero: bool,
  image: object,
  subtitle: string,
  title: string,
}

export default Section
