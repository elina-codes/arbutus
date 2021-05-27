import React from "react"
import * as MUI from "@material-ui/core"
import { Card, Text } from "components"

const CardGrid = ({ data = [], ...cardProps }) => {
  let count = 0
  return (
    <MUI.Grid container spacing={5} justify="center">
      {data.map((item, i) => {
        const { meta, title, text, image, url } = item || {}
        const delay = count * 100
        count = count > 1 ? 0 : count + 1

        return (
          <MUI.Grid item sm={6} md={4} key={`card-${i}-${title}`}>
            <Card {...{ delay, meta, title, image, url, ...cardProps }}>
              <Text variant="body2">{text}</Text>
            </Card>
          </MUI.Grid>
        )
      })}
    </MUI.Grid>
  )
}

export default CardGrid
