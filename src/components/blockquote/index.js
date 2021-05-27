import React from "react"
import { Text } from "components"
import useStyles from "./styles"
import {
  ImQuotesLeft as LeftQuotes,
  ImQuotesRight as RightQuotes,
} from "react-icons/im"
// import {
//   RiDoubleQuotesL as LeftQuotes,
//   RiDoubleQuotesR as RightQuotes,
// } from "react-icons/ri"

import classNames from "classnames"

const Blockquote = ({ children, author }) => {
  const classes = useStyles()

  return (
    <blockquote className={classes.blockquote}>
      <LeftQuotes
        size={100}
        className={classNames(classes.quoteMark, "left")}
      />
      <Text variant="h5" component="span" strong>
        {children}
      </Text>
      {author && (
        <Text variant="h4" component="span" className={classes.quoteAuthor}>
          {author}
        </Text>
      )}
      <RightQuotes
        size={100}
        className={classNames(classes.quoteMark, "right")}
      />
    </blockquote>
  )
}

export default Blockquote
