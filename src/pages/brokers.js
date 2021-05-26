import React from "react"
import Layout from "components/layout"
import images from "src/images"
import pageSections from "src/content/brokers"
import { OpenContactModalButton, Banner, Section } from "components"
import * as MUI from "@material-ui/core"
const seo = {
  title: "Brokers",
}

const topBannerData = {
  title: "We work hard for you and your clients",
  description:
    "We always endeavour to find a way through, structuring deals that get your clients the equipment they need with the resources they have.",
  cta: <OpenContactModalButton>Start a partnership</OpenContactModalButton>,
  bgImage: images.banners.brokers,
}

const BrokersPage = () => {
  const { why, truePartnership, moreReasons, recentDeals } = pageSections || {}
  return (
    <Layout {...{ seo, topBannerData }}>
      <Section>
        <MUI.Grid container spacing={5}>
          <MUI.Grid container direction="column" spacing={3} item sm={12} md>
            <MUI.Grid item>
              <Section {...why} />
            </MUI.Grid>
          </MUI.Grid>
          <MUI.Grid container direction="column" spacing={3} item sm={12} md>
            <MUI.Grid item>
              <Section {...truePartnership} />
            </MUI.Grid>
          </MUI.Grid>
        </MUI.Grid>
      </Section>
      <Banner>
        We are always evaluating the way we do business with our brokers, and
        constantly integrate their feedback in our ongoing plans.
      </Banner>
      <Section {...moreReasons} />
      <Section {...recentDeals} />
    </Layout>
  )
}

export default BrokersPage
