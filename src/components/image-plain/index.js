import React from "react"
import { bool, node } from "prop-types"
import classNames from "classnames"
import useStyles from "./styles"

const ImagePlain = ({ src, alt, className }) => {
  const classes = useStyles()

  return (
    <div className={classNames(classes.plainImageContainer, className)}>
      <img {...{ src, alt }} className={classes.image} />
    </div>
  )
}

ImagePlain.propTypes = {
  children: node,
  preLine: bool,
}

export default ImagePlain
