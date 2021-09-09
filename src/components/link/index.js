import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link as MuiLink } from "@material-ui/core"

const Link = ({ external, href, children, download, ...props }) => {
  if (download) {
    return (
      <MuiLink href={href} download {...props}>
        {children}
      </MuiLink>
    )
  }

  return external ? (
    <MuiLink href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </MuiLink>
  ) : (
    <MuiLink
      component={GatsbyLink}
      to={href}
      activeClassName="active"
      activeStyle={{ color: "#ff5722" }}
      {...props}
    >
      {children}
    </MuiLink>
  )
}

export default Link
