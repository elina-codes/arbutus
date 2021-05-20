import React from "react"
import classNames from "classnames"
import { Container, Fade } from "@material-ui/core"
import { Text, ImagePlain } from "components"
import ScrollAnimation from "react-animate-on-scroll"
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
          className={classNames({
            [classes.sectionHeadingDescription]: hero,
          })}
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
  const imageLeft = image?.position === "left"
  const imageRight = image?.position === "right"

  const headerContent = (
    <>
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
      {children && <div className={classes.sectionContent}>{children}</div>}
      {button && <div className={classes.buttonContainer}>{button}</div>}
    </>
  )

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
        <Fade in timeout={2000}>
          <div
            className={classes.homeBannerImage}
            style={{ backgroundImage: `url(${bgImage})` }}
          />
        </Fade>
      )}
      <Container>
        <div
          className={classNames(classes.sectionInner, {
            imageLeft,
            imageRight,
            imageFirst,
            [classes.homeBannerInner]: homeVariant,
          })}
        >
          <div className={classNames(classes.sectionMain, "stepTarget")}>
            {hero ? (
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
                {headerContent}
              </ScrollAnimation>
            ) : (
              <>{headerContent}</>
            )}
          </div>
          {image?.src && <ImagePlain direction={image?.direction} {...image} />}
        </div>
      </Container>
    </div>
  )
}

export default Section
