import React from "react"
import classNames from "classnames"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import useStyles from "./styles"

const ImagePlain = ({
  delay,
  src,
  alt,
  maxWidth = "none",
  alignTop,
  className,
  direction = "",
}) => {
  const classes = useStyles()

  return (
    <ScrollAnimation
      animateIn={`animate__fadeIn${direction}`}
      animateOnce
      {...{ delay }}
    >
      <div
        className={classNames(
          classes.plainImageContainer,
          { [classes.alignTop]: alignTop },
          className
        )}
        style={{ maxWidth }}
        loading="lazy"
      >
        <img {...{ src, alt }} className={classes.image} />
      </div>
    </ScrollAnimation>
  )
}

export default ImagePlain
