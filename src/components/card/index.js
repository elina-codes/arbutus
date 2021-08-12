import React from "react"
import classNames from "classnames"
import * as Mui from "@material-ui/core"
import { Text } from "components"
import { Link } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import useStyles from "./styles"

const Card = ({
  dark,
  delay,
  title,
  meta,
  image,
  url,
  children,
  iconTitle,
}) => {
  const classes = useStyles()

  const CardWrapper = ({ children }) => {
    if (url) {
      return (
        <Mui.CardActionArea component={Link} to={url}>
          {children}
        </Mui.CardActionArea>
      )
    } else {
      return <>{children}</>
    }
  }

  return (
    <ScrollAnimation
      animateIn="animate__fadeInUp"
      animateOnce
      duration={0.5}
      style={{ height: "100%", maxWidth: "100%" }}
      {...{ delay }}
    >
      <Mui.Card
        className={classNames(classes.card, {
          [classes.dark]: dark,
        })}
      >
        <CardWrapper>
          {image?.src && (
            <Mui.CardMedia
              component="img"
              loading="lazy"
              alt={image.alt}
              height="255"
              image={image.src}
              title={image.alt}
            />
          )}
          {iconTitle && <div className={classes.iconText}>{iconTitle}</div>}
          <Mui.CardContent>
            {meta && (
              <Text gutterBottom variant="caption">
                {meta}
              </Text>
            )}
            {title && (
              <Text gutterBottom variant="h5" component="h3">
                {title}
              </Text>
            )}
            {children}
          </Mui.CardContent>
        </CardWrapper>
      </Mui.Card>
    </ScrollAnimation>
  )
}

export default Card
