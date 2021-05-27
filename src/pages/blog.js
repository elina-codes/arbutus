import React from "react"
import Layout from "components/layout"
import placeholderData from "src/placeholder-data"
import images from "src/images"
import pageSections from "src/content/blog"
import { Section, CardGrid } from "components"
const seo = {
  title: "Blog",
}

const topBannerData = {
  title: "Blog articles",
  description:
    "We have been providing equipment leases for over 40 years, and pride ourselves on being industry experts. ",
  bgImage: images.banners.blog,
}

const placeholderBlogArticles = [].concat(
  ...new Array(4).fill(placeholderData.blogArticles)
)

const SuccessStoriesPage = () => {
  const { recentArticles } = pageSections || {}
  return (
    <Layout {...{ seo, topBannerData }}>
      <Section {...recentArticles}>
        <CardGrid data={placeholderBlogArticles} />
      </Section>
    </Layout>
  )
}

export default SuccessStoriesPage
