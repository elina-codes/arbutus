import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { bool, string, node } from "prop-types"
import { Link as MuiLink } from "@material-ui/core"
import useStyles from "./styles"

const Link = ({ external, href, children, ...props }) => {
  const classes = useStyles()

  return external ? (
    <MuiLink href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </MuiLink>
  ) : (
    <MuiLink
      component={GatsbyLink}
      to={href}
      activeClassName="active"
      activeStyle={classes.active}
      {...props}
    >
      {children}
    </MuiLink>
  )
}

Link.propTypes = {
  to: string,
  children: node,
  external: bool,
}

export default Link
