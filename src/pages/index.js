import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import { Banner, Card, Section } from "components"
import placeholderData from "../placeholder-data"
import { Button } from "@material-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section
      hero
      title={placeholderData.shortTitle}
      description={placeholderData.paragraph}
      button={placeholderData.button}
      bgImage={placeholderData.image}
    ></Section>
    <Banner
      cta={
        <Button color="secondary" variant="contained">
          {placeholderData.button}
        </Button>
      }
    >
      Do something over here
    </Banner>
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
