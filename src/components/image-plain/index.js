import React from "react"
import classNames from "classnames"
import useStyles from "./styles"
// import { Fade } from "@material-ui/core"

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
      {/* <Fade> */}
      <img loading="lazy" {...{ src, alt }} className={classes.image} />
      {/* </Fade> */}
    </div>
  )
}

export default ImagePlain
