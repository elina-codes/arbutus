import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import { Card, Section } from "components"
import placeholderData from "../placeholder-data"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section
      title={placeholderData.shortTitle}
      subtitle={placeholderData.longTitle}
      description={placeholderData.paragraph}
    >
      <Card image={placeholderData.image} title="Test title">
        Oh hi
      </Card>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Section>
  </Layout>
)

export default IndexPage
