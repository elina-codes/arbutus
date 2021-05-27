import React from "react"
import Layout from "components/layout"
import {
  OpenContactModalButton,
  CircleGridSection,
  Banner,
  ImagePlain,
  Section,
  Text,
  IconList,
} from "components"
import images from "src/images"
import * as MUI from "@material-ui/core"
import pageSections from "src/content/home"
import ScrollAnimation from "react-animate-on-scroll"

const seo = {
  title: "Home",
}

const topBannerData = {
  title: "Fast, flexible equipment leasing",
  description:
    "We provide flexible equipment financing solutions, no matter your credit.",
  cta: <OpenContactModalButton>Get a personalized plan</OpenContactModalButton>,
  bgImage: images.banners.home,
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

  const { content: benefitsContent, ...benefitsSection } = benefits
  const { content: reasonsContent, ...reasonsSection } = reasons
  const { content: processContent, ...processSection } = process

  return (
    <Layout {...{ seo, topBannerData, showSuccessStories: true }}>
      <Section {...industriesWeServe}>
        <MUI.Grid container spacing={5}>
          <MUI.Grid container direction="column" item xs={12} sm>
            <ImagePlain
              direction="Up"
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
              direction="Up"
              delay={200}
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
              direction="Up"
              delay={400}
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
      <Section {...benefitsSection}>
        <CircleGridSection data={benefitsContent} dark />
      </Section>
      <Section {...reasonsSection}>
        <IconList data={reasonsContent} />
      </Section>
      <Section {...processSection}>
        <CircleGridSection data={processContent} outlined />
      </Section>
      <Section dark>
        <MUI.Grid container spacing={5}>
          <MUI.Grid item xs={12} md>
            <ScrollAnimation
              animateIn="animate__fadeInRight"
              animateOnce
              duration={0.7}
            >
              <Section {...startLeasing}></Section>
            </ScrollAnimation>
          </MUI.Grid>
          <MUI.Grid item xs={12} md>
            <ScrollAnimation
              animateIn="animate__fadeInLeft"
              animateOnce
              duration={0.7}
            >
              <Section {...areYouABroker}></Section>
            </ScrollAnimation>
          </MUI.Grid>
        </MUI.Grid>
      </Section>
    </Layout>
  )
}

export default IndexPage
