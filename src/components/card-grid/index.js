import React from "react"
import * as Mui from "@material-ui/core"
import { Card, Text } from "components"

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
            <Card {...{ delay, meta, title, image, url, ...cardProps }}>
              <Text variant="body2">{text}</Text>
            </Card>
          </Mui.Grid>
        )
      })}
    </Mui.Grid>
  )
}

export default CardGrid
