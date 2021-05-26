import React from "react"
import Layout from "components/layout"
import { Section, Button } from "components"
import { routes } from "src/constants"
import images from "images"

const seo = {
  title: "Not Found",
}

const NotFoundPage = () => (
  <Layout {...{ seo }}>
    <Section
      title="404: Not Found"
      subtitle="This page does not exist."
      button={
        <Button color="primary" to={routes.home.path}>
          Back to homepage
        </Button>
      }
    >
      <img src={images.notFound} alt="404: Not Found" width={300} />
    </Section>
  </Layout>
)

export default NotFoundPage
