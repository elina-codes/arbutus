import React from "react"
import { Typography } from "@material-ui/core"
import classNames from "classnames"
import useStyles from "./styles"

const Text = ({ children, preLine, strong, noMargin, center, ...props }) => {
  const classes = useStyles()
  return (
    <Typography
      className={classNames({
        preline: preLine,
        strong,
        [classes.noMargin]: noMargin,
        [classes.center]: center,
      })}
      {...props}
    >
      {children}
    </Typography>
  )
}

export default Text
