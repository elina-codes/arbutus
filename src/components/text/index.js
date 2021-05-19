import React from "react"
import { bool, node } from "prop-types"
import { Typography } from "@material-ui/core"
import classNames from "classnames"

const Text = ({ children, preLine, strong, ...props }) => (
  <Typography
    className={classNames({
      preline: preLine,
      strong: strong,
    })}
    {...props}
  >
    {children}
  </Typography>
)

Text.propTypes = {
  children: node,
  preLine: bool,
}

export default Text
