import React, { useState } from "react"
import Layout from "components/layout"
import placeholderData from "src/placeholder-data"
import images from "src/images"
import pageSections from "src/content/blog"
import { Button, Section, CardGrid } from "components"
const seo = {
  title: "Blog",
}

const topBannerData = {
  title: "Blog articles",
  description:
    "We have been providing equipment leases for over 40 years, and pride ourselves on being industry experts. ",
  bgImage: images.banners.blog,
}

const SuccessStoriesPage = () => {
  const [rowsToShow, setRowsToShow] = useState(4)

  const fillRows = () => {
    setRowsToShow(rowsToShow + 4)
  }

  const placeholderBlogArticles = [].concat(
    ...new Array(rowsToShow).fill(placeholderData.blogArticles)
  )

  const LoadMoreButton = () => (
    <Button color="default" fullWidth onClick={fillRows}>
      Load more blog articles
    </Button>
  )

  const { recentArticles } = pageSections || {}
  return (
    <Layout {...{ seo, topBannerData }}>
      <Section {...{ button: <LoadMoreButton />, ...recentArticles }}>
        <CardGrid data={placeholderBlogArticles} />
      </Section>
    </Layout>
  )
}

export default SuccessStoriesPage
