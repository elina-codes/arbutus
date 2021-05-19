import React from "react"
import { Button as MuiButton } from "@material-ui/core"
import { Link as GatsbyLink } from "gatsby"

const Button = ({
  children,
  variant = "contained",
  color = "secondary",
  to,
  ...props
}) => {
  return to ? (
    <MuiButton {...{ component: GatsbyLink, to, variant, color, ...props }}>
      {children}
    </MuiButton>
  ) : (
    <MuiButton {...{ variant, color, ...props }}>{children}</MuiButton>
  )
}

export default Button
