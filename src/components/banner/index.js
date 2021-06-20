import React from "react"
import useStyles from "./styles"
import { Section, Text } from "components"
import * as Mui from "@material-ui/core"

const Banner = ({ children, cta, data }) => {
  const classes = useStyles()
  const formatDataList = data => (
    <ul className={classes.bannerList}>
      {data.map((item, i) => (
        <li key={`item-${i}-${item}`} className={classes.bannerListItem}>
          <Text variant="h5" strong component="span">
            {item}
          </Text>
        </li>
      ))}
    </ul>
  )
  return (
    <Section dense dark className={classes.banner}>
      <Mui.Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {data ? (
          formatDataList(data)
        ) : (
          <>
            <div className={classes.bannerContent}>
              <Text variant="h5" strong component="span">
                {children}
              </Text>
            </div>
            {cta}
          </>
        )}
      </Mui.Box>
    </Section>
  )
}

export default Banner
