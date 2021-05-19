import React from "react"
import Layout from "components/layout"

const seo = {
  title: "Not Found",
}

const NotFoundPage = () => (
  <Layout {...{ seo }}>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist.</p>
  </Layout>
)

export default NotFoundPage
