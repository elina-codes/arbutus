import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link as MuiLink } from "@material-ui/core"

const Link = ({ external, href, children, ...props }) => {
  return external ? (
    <MuiLink href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </MuiLink>
  ) : (
    <MuiLink
      component={GatsbyLink}
      to={href}
      activeClassName="active"
      activeStyle={{ fontWeight: 900 }}
      {...props}
    >
      {children}
    </MuiLink>
  )
}

export default Link
