import React from "react"
import Layout from "components/layout"
import placeholderData from "../placeholder-data"

const seo = {
  title: "How it works",
}

const topBannerData = {
  title: "How it works",
  description: placeholderData.sentence,
  cta: placeholderData.button,
  bgImage: placeholderData.bannerImage,
}

const HowItWorksPage = () => <Layout {...{ seo, topBannerData }}></Layout>

export default HowItWorksPage
