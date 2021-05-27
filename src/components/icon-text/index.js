import React from "react"
import classNames from "classnames"
import { Text } from "components"
import useStyles from "./styles"

const IconText = ({
  className,
  center,
  icon: Icon,
  text,
  dark,
  outlined,
  size = "lg",
  ...props
}) => {
  const classes = useStyles()

  return (
    <div className={classNames(classes.iconTitle, { center })}>
      <div
        className={classNames(classes.iconContainer, className, size, {
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
