import React from "react"
import { Text } from "components"
import { IoMdCheckmarkCircleOutline as CheckIcon } from "react-icons/io"

const SuccessView = () => {
  return (
    <>
      <CheckIcon size={60} color="#7ED321" />
      <Text variant="h5" component="h3">
        Success!
      </Text>
      <Text variant="h4">
        We have received your message and will contact you within one business
        day.
      </Text>
      <Text variant="h4" strong>
        That's our promise to you.
      </Text>
    </>
  )
}

export default SuccessView
