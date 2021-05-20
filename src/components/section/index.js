import React from "react"
import classNames from "classnames"
import { Container } from "@material-ui/core"
import { Text, ImagePlain } from "components"
import useStyles from "./styles"

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
        <Text
          className={classNames({ [classes.sectionHeadingDescription]: hero })}
          variant="h4"
          component={hero ? "h3" : "h4"}
        >
          {description}
        </Text>
      )}
      {headerButtons && (
        <div className={classes.buttonContainer}>{headerButtons}</div>
      )}
    </div>
  )
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
  imageFirst,
  inner,
  light,
  subtitle,
  title,
  variant,
  ...props
}) => {
  const classes = useStyles()
  const centerSection = center || (!hero && !inner && !image)
  const showHeading = title || subtitle || description
  const homeVariant = variant === "home"
  const bgImg = bgImage && !homeVariant ? `url(${bgImage})` : ""

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
          [classes.inner]: inner,
          [classes.center]: centerSection,
        },
        className
      )}
      {...props}
      style={{
        backgroundImage: bgImg,
      }}
      loading="lazy"
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
            imageFirst,
            [classes.homeBannerInner]: homeVariant,
          })}
        >
          <div className={classNames(classes.sectionMain, "stepTarget")}>
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
            {button && <div className={classes.buttonContainer}>{button}</div>}
          </div>
          {image?.src && <ImagePlain {...image} />}
        </div>
      </Container>
    </div>
  )
}

export default Section
