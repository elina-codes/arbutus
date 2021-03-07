import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import { Banner, Section } from "components"
import placeholderData from "../placeholder-data"

const IndexPage = () => (
  <Layout>
    <SEO title="FAQ" />
    <Section
      hero
      title="Frequently asked questions"
      description={placeholderData.paragraph}
      button={placeholderData.button}
      bgImage={placeholderData.image}
    ></Section>
    <Banner data={placeholderData.list} />
    <Section
      title={placeholderData.shortTitle}
      subtitle={placeholderData.longTitle}
      description={placeholderData.paragraph}
    ></Section>
  </Layout>
)

export default IndexPage
