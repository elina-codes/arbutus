import React from "react"
import { bool, object, string, node } from "prop-types"
import useStyles from "./styles"
import classNames from "classnames"
import { Button, Container } from "@material-ui/core"
import Image from "components/image"
import { Text } from "components"
import ImagePlain from "components/image-plain"

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
      className={classNames(classes.sectionHeading, {
        [classes.center]: center,
      })}
    >
      {title && <Text variant={hero ? "h1" : "h2"}>{title}</Text>}
      {subtitle && (
        <Text variant="h3" component={hero ? "h2" : "h3"}>
          {subtitle}
        </Text>
      )}
      {description && (
        <Text variant="h4" component={hero ? "h3" : "h4"}>
          {description}
        </Text>
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
  black,
  button,
  center,
  children,
  className,
  dark,
  dense,
  description,
  headerButtons,
  hero,
  image,
  light,
  subtitle,
  title,
  variant,
  ...props
}) => {
  const classes = useStyles()
  const centerSection = !hero && (!image || center)
  const showHeading = title || subtitle || description
  const homeVariant = variant === "home"

  return (
    <div
      className={classNames(
        classes.section,
        {
          [classes.light]: light,
          [classes.dark]: dark || hero,
          [classes.dense]: dense,
          [classes.black]: black,
          [classes.hero]: hero,
          [classes.home]: homeVariant,
          [classes.center]: centerSection,
        },
        className
      )}
      {...props}
      style={
        bgImage && !homeVariant ? { backgroundImage: `url(${bgImage})` } : null
      }
    >
      {homeVariant && (
        <div
          className={classes.homeBannerImage}
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
      )}
      <Container>
        <div
          className={classNames(classes.sectionInner, {
            imageLeft: image?.position === "left",
            imageRight: image?.position === "right",
            [classes.homeBannerInner]: homeVariant,
          })}
        >
          <div className={classes.sectionMain}>
            {showHeading && (
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
            )}
            {children && (
              <div className={classes.sectionContent}>{children}</div>
            )}
            {button && (
              <div className={classes.buttonContainer}>
                <Button variant="contained" color={button.color || "primary"}>
                  {button.text}
                </Button>
              </div>
            )}
          </div>
          {image?.src && <ImagePlain src={image.src} alt={image?.alt} />}
        </div>
      </Container>
    </div>
  )
}

Section.propTypes = {
  align: string,
  bgImage: string,
  black: bool,
  button: object,
  children: node,
  dark: bool,
  dense: bool,
  description: string,
  headerButtons: node,
  hero: bool,
  image: object,
  light: bool,
  subtitle: string,
  title: string,
}

export default Section
