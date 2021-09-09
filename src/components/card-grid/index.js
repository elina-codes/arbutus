import React from "react"
import { Card, Text } from "components"
import * as Mui from "@material-ui/core"

const CardGrid = ({ data = [], leftAlign, ...cardProps }) => {
  let count = 0
  return (
    <Mui.Grid
      container
      spacing={5}
      justify={leftAlign ? "flex-start" : "center"}
    >
      {data?.map((item, i) => {
        const { meta, title, text, image, url } = item || {}
        const delay = count * 100
        count = count > 1 ? 0 : count + 1

        return (
          <Mui.Grid item sm={6} md={4} key={`card-${i}-${title}`}>
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
          </Mui.Grid>
        )
      })}
    </Mui.Grid>
  )
}

export default CardGrid
