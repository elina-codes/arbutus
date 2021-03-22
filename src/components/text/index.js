import React from "react"
import { bool, node } from "prop-types"
import { Typography } from "@material-ui/core"

const Text = ({ children, preLine, ...props }) => (
  <Typography classes={{ root: preLine ? "preline" : "" }} {...props}>
    {children}
  </Typography>
)

Text.propTypes = {
  children: node,
  preLine: bool,
}

export default Text
