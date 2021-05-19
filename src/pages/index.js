import React from "react"
import Layout from "components/layout"
import {
  OpenContactModalButton,
  Banner,
  ImagePlain,
  Section,
  Text,
} from "components"
import images from "src/images"
import * as MUI from "@material-ui/core"
import pageSections from "src/content/home"

const seo = {
  title: "Home",
}

const topBannerData = {
  title: "Fast, flexible equipment leasing",
  description:
    "We provide flexible equipment financing solutions, no matter your credit.",
  cta: <OpenContactModalButton>Get a personalized plan</OpenContactModalButton>,
  bgImage: images.home.mainBanner,
  variant: "home",
}

const IndexPage = () => {
  const {
    industriesWeServe,
    aboutUs,
    benefits,
    reasons,
    process,
    startLeasing,
    areYouABroker,
  } = pageSections || {}

  return (
    <Layout {...{ seo, topBannerData, showSuccessStories: true }}>
      <Section {...industriesWeServe}>
        <MUI.Grid container spacing={5}>
          <MUI.Grid container direction="column" item xs={12} sm>
            <ImagePlain
              maxWidth={400}
              src={images.equipment.hospitalityIndustry}
              alt="Hospitality Equipment"
            />
            <Text variant="h4" strong>
              Hospitality Equipment
            </Text>
          </MUI.Grid>
          <MUI.Grid container direction="column" item xs={12} sm>
            <ImagePlain
              maxWidth={400}
              src={images.equipment.forestryIndustry}
              alt="Forestry Equipment"
            />
            <Text variant="h4" strong>
              Forestry Equipment
            </Text>
          </MUI.Grid>
          <MUI.Grid container direction="column" item xs={12} sm>
            <ImagePlain
              maxWidth={400}
              src={images.equipment.constructionIndustry}
              alt="Construction Equipment"
            />
            <Text variant="h4" strong>
              Construction Equipment
            </Text>
          </MUI.Grid>
        </MUI.Grid>
      </Section>
      <Banner
        cta={<OpenContactModalButton>Get started</OpenContactModalButton>}
      >
        We listen when the banks won't. Chat directly with the decision makers
        today.
      </Banner>
      <Section {...aboutUs}></Section>
      <Section {...benefits}></Section>
      <Section {...reasons}></Section>
      <Section {...process}></Section>
      <Section dark>
        <MUI.Grid container spacing={5}>
          <MUI.Grid item xs={12} md>
            <Section {...startLeasing}></Section>
          </MUI.Grid>
          <MUI.Grid item xs={12} md>
            <Section {...areYouABroker}></Section>
          </MUI.Grid>
        </MUI.Grid>
      </Section>
    </Layout>
  )
}

export default IndexPage
