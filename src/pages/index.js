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
import { StaticImage } from "gatsby-plugin-image"
import images from "src/images"
import * as Mui from "@material-ui/core"
import pageSections from "src/page-content/home"

const seo = {
  title: "Equipment Leasing for Western Canada",
}

const BgImage = () => (
  <StaticImage
    layout="fullWidth"
    placeholder="blurred"
    alt=""
    src="../images/banner-home.jpg"
    fit="cover"
    height="100%"
    formats={["auto", "jpg", "png", "jpeg"]}
  />
)

const topBannerData = {
  title: "Fast, flexible equipment leasing",
  description:
    "We provide flexible equipment financing solutions, no matter your credit.",
  cta: <OpenContactModalButton>Get a personalized plan</OpenContactModalButton>,
  topImage: BgImage,
  variant: "home",
}

const IndexPage = () => {
  const { industriesWeServe, aboutUs, benefits, reasons, process } =
    pageSections || {}

  const { content: aboutUsContent, ...aboutUsSection } = aboutUs
  const { content: benefitsContent, ...benefitsSection } = benefits
  const { content: reasonsContent, ...reasonsSection } = reasons
  const { content: processContent, ...processSection } = process

  return (
    <Layout
      {...{ seo, topBannerData, showSuccessStories: true, showDoubleCta: true }}
    >
      <Section {...industriesWeServe}>
        <Mui.Grid container justify="center" spacing={5}>
          <Mui.Grid container direction="column" item xs={12} sm={6} md>
            <ImagePlain
              direction="Up"
              maxWidth={400}
              src={images.equipment.hospitalityIndustry}
              alt="Hospitality Equipment"
            />
            <Text variant="h4" strong>
              Hospitality Equipment
            </Text>
          </Mui.Grid>
          <Mui.Grid container direction="column" item xs={12} sm={6} md>
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
          </Mui.Grid>
          <Mui.Grid container direction="column" item xs={12} sm={6} md>
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
          </Mui.Grid>
        </Mui.Grid>
      </Section>
      <Banner
        cta={<OpenContactModalButton>Get started</OpenContactModalButton>}
      >
        We listen when the banks won't. Chat directly with the decision makers
        today.
      </Banner>
      <Section {...aboutUsSection}>
        <Text preLine>{aboutUsContent}</Text>
      </Section>
      <Section {...benefitsSection}>
        <CircleGridSection data={benefitsContent} svg />
      </Section>
      <Section {...reasonsSection}>
        <IconList data={reasonsContent} />
      </Section>
      <Section {...processSection}>
        <CircleGridSection data={processContent} outlined />
      </Section>
    </Layout>
  )
}

export default IndexPage
