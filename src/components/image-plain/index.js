import React from "react"
import classNames from "classnames"
import useStyles from "./styles"

const ImagePlain = ({ src, alt, maxWidth = "none", alignTop, className }) => {
  const classes = useStyles()

  return (
    <div
      className={classNames(
        classes.plainImageContainer,
        { [classes.alignTop]: alignTop },
        className
      )}
      style={{ maxWidth }}
    >
      <img {...{ src, alt }} className={classes.image} />
    </div>
  )
}

export default ImagePlain
