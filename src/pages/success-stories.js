import React from "react"
import Layout from "components/layout"
import placeholderData from "src/placeholder-data"
import images from "src/images"
import pageSections from "src/content/success-stories"
import { OpenContactModalButton, Card, Section, Text } from "components"
import * as MUI from "@material-ui/core"
const seo = {
  title: "Success Stories",
}

const topBannerData = {
  title: "Success stories",
  description:
    "We have been helping Western Canada lease heavy equipment for over 40 years. Here are some stories from our happy clients.",
  cta: <OpenContactModalButton>Schedule a chat</OpenContactModalButton>,
  bgImage: images.banners.success,
}

const placeholderStories = (
  <>
    <MUI.Grid item sm={6} md={4}>
      <Card
        meta="Alberta, Canada - Construction Equipment"
        image={{
          src: placeholderData.successStories.ss1,
          alt:
            "Offering customers more choice: how National Leasing end title.",
        }}
        title="Offering customers more choice: how National Leasing end title."
      >
        <Text variant="body2">
          Sometimes it seems like nothing goes right. We hear some crazy and
          inspirational stories of small business owners overcoming incredible
          challenges through had work and something something …
        </Text>
      </Card>
    </MUI.Grid>
    <MUI.Grid item sm={6} md={4}>
      <Card
        delay={100}
        meta="Alberta, Canada - Construction Equipment"
        image={{
          src: placeholderData.successStories.ss2,
          alt: "Offering customers more choice.",
        }}
        title="Offering customers more choice."
      >
        <Text variant="body2">
          Sometimes it seems like nothing goes right. We hear some crazy and
          inspirational stories of small business owners overcoming incredible
          challenges through had work and something something and one more line
          to show you what happens when…
        </Text>
      </Card>
    </MUI.Grid>
    <MUI.Grid item sm={6} md={4}>
      <Card
        delay={200}
        meta="Alberta, Canada - Construction Equipment"
        image={{
          src: placeholderData.successStories.ss3,
          alt:
            "Offering customers more choice: how National Leasing end title.",
        }}
        title="Offering customers more choice: how National Leasing end title."
      >
        <Text variant="body2">
          Sometimes it seems like nothing goes right. We hear some crazy and
          inspirational stories of small business owners overcoming incredible
          challenges through had work and something something …
        </Text>
      </Card>
    </MUI.Grid>
  </>
)

const SuccessStoriesPage = () => {
  const { howWeveHelped } = pageSections || {}
  return (
    <Layout {...{ seo, topBannerData }}>
      <Section {...howWeveHelped}>
        <MUI.Grid container spacing={5} justify="center">
          {placeholderStories}
          {placeholderStories}
          {placeholderStories}
          {placeholderStories}
        </MUI.Grid>
      </Section>
    </Layout>
  )
}

export default SuccessStoriesPage
