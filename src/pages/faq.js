import React from "react"
import Layout from "components/layout"
import { Banner, Section } from "components"
import placeholderData from "../placeholder-data"

const seo = {
  title: "FAQ",
}

const topBannerData = {
  title: "Frequently Asked Questions",
  description: placeholderData.sentence,
  cta: placeholderData.button,
  bgImage: placeholderData.bannerImage,
}

const IndexPage = () => (
  <Layout {...{ seo, topBannerData }}>
    <Banner data={placeholderData.list} />
    <Section
      title={placeholderData.shortTitle}
      subtitle={placeholderData.longTitle}
      description={placeholderData.paragraph}
    ></Section>
  </Layout>
)

export default IndexPage
