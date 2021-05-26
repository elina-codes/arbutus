import React from "react"
import classNames from "classnames"
import { Text } from "components"
import useStyles from "./styles"

const IconText = ({
  className,
  icon: Icon,
  text,
  dark,
  outlined,
  ...props
}) => {
  const classes = useStyles()

  return (
    <div className={classes.iconTitle}>
      <div
        className={classNames(classes.iconContainer, className, {
          [classes.dark]: dark,
          [classes.outlined]: outlined,
        })}
        {...props}
      >
        <Icon size={80} color={dark ? "#fff" : "inherit"} />
      </div>
      <Text variant="h5">{text}</Text>
    </div>
  )
}
export default IconText
