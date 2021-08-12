import React from "react"
import { Card, Text } from "components"

const CardGrid = ({ data = [], leftAlign, ...cardProps }) => {
  let count = 0
  return (
    <div style={leftAlign ? { textAlign: "left" } : null}>
      {data?.map((item, i) => {
        const { meta, title, text, image, url } = item || {}
        const delay = count * 100
        count = count > 1 ? 0 : count + 1

        return (
          <Card
            {...{
              delay,
              meta,
              title,
              image,
              url,
              key: `card-${i}-${title}`,
              ...cardProps,
            }}
          >
            <Text variant="body2">{text}</Text>
          </Card>
        )
      })}
    </div>
  )
}

export default CardGrid
