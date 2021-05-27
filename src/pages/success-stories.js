import React from "react"
import Layout from "components/layout"
import placeholderData from "src/placeholder-data"
import images from "src/images"
import pageSections from "src/content/success-stories"
import { OpenContactModalButton, Section, CardGrid } from "components"
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

const placeholderSuccessStories = [].concat(
  ...new Array(4).fill(placeholderData.successStories)
)

const SuccessStoriesPage = () => {
  const { howWeveHelped } = pageSections || {}
  return (
    <Layout {...{ seo, topBannerData }}>
      <Section {...howWeveHelped}>
        <CardGrid data={placeholderSuccessStories} />
      </Section>
    </Layout>
  )
}

export default SuccessStoriesPage
