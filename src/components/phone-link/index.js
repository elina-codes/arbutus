import React from "react"
import { phoneNumber } from "src/constants"
import { Button } from "components"
import { Link as MuiLink } from "@material-ui/core"

const PhoneLink = ({ children, button, ...props }) => {
  const Component = button ? Button : MuiLink
  return (
    <Component href={phoneNumber.href} {...props}>
      {children || phoneNumber.text}
    </Component>
  )
}

export default PhoneLink
