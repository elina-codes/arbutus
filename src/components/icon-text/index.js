import React from "react"
import classNames from "classnames"
import { Text } from "components"
import useStyles from "./styles"

const IconText = ({
  className,
  center,
  color,
  icon: Icon,
  svg,
  text,
  dark,
  outlined,
  size = "lg",
  ...props
}) => {
  const classes = useStyles()

  return (
    <div className={classNames(classes.iconTitle, { center })}>
      {!svg && (
        <div
          className={classNames(classes.iconContainer, className, size, {
            [classes.dark]: dark,
            [classes.outlined]: outlined,
          })}
          {...props}
        >
          <Icon size={80} color={color || (dark ? "#fff" : "inherit")} />
        </div>
      )}
      {svg && <Icon />}
      <Text variant="h5">{text}</Text>
    </div>
  )
}
export default IconText
