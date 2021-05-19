import React from "react"
import Layout from "components/layout"
import { Banner, Card, Section, Text } from "components"
import placeholderData from "../placeholder-data"
import images from "../images"
import * as MUI from "@material-ui/core"
import ImagePlain from "components/image-plain"

const seo = {
  title: "Home",
}

const topBannerData = {
  title: "Fast, flexible equipment leasing",
  description:
    "We provide flexible equipment financing solutions, no matter your credit.",
  cta: { text: "Get a personalized plan", color: "secondary" },
  bgImage: images.home.mainBanner,
  variant: "home",
}

const pageSections = {
  industriesWeServe: {
    title: "Industries we serve",
    subtitle: `Here to serve you.
    Whatever the industry.`,
    description: `As one of Western Canada’s top equipment leasing companies, we serve all industries in British Columbia, Alberta, Manitoba and Saskatchewan.`,
    button: {
      text: "View more industries",
    },
  },
  aboutUs: {
    title: "About us",
    subtitle: "40 years of heavy equipment leasing",
    description: `From construction equipment to used restaurant equipment, we customize equipment leases to fit your unique needs. We find the most competitive and flexible capital leasing solutions, and find them fast. 

    Arbutus Capital is one of the top equipment leasing companies serving British-Columbia, Alberta, Saskatchewan and Manitoba. That’s because even if you find yourself with imperfect credit, we work with you to find the best solution. 
    
    We’re here to find ways to say yes.`,
    image: {
      src: images.home.aboutUsFamily,
      position: "right",
      alt: "Placeholder",
    },
    button: {
      text: "View more industries",
    },
  },
  benefits: {
    title: "Benefits of equipment leasing",
    subtitle: `We’re here to help you succeed.`,
    description: `Deciding between leasing versus buying equipment can be difficult, so here are some of the core benefits you can expect from leasing equipment with us.`,
    button: {
      text: "View more benefits",
    },
  },
  reasons: {
    dark: true,
    subtitle: `Reasons to partner with us`,
  },
  process: {
    title: "Our 5 step process",
    subtitle: `Getting equipment has never been easier.`,
    description: `With 40 years of experience, we’ve streamlined our process and pride ourselves on financing equipment faster than anyone in the business.`,
    button: {
      text: "More details",
    },
  },
  helped: {
    title: `How we've helped people`,
    subtitle: `People first.
    Something about us caring.`,
    button: {
      text: "More success stories",
    },
  },
}

const IndexPage = () => (
  <Layout {...{ seo, topBannerData }}>
    <Section {...pageSections?.industriesWeServe}>
      <MUI.Grid container spacing={6}>
        <MUI.Grid container direction="column" item xs={12} md>
          <ImagePlain
            src={images.home.hospitalityIndustry}
            alt="Hospitality Equipment"
          />
          <Text variant="h4" strong>
            Hospitality Equipment
          </Text>
        </MUI.Grid>
        <MUI.Grid container direction="column" item xs={12} md>
          <ImagePlain
            src={images.home.constructionIndustry}
            alt="Construction Equipment"
          />
          <Text variant="h4" strong>
            Construction Equipment
          </Text>
        </MUI.Grid>
        <MUI.Grid container direction="column" item xs={12} md>
          <ImagePlain src={placeholderData.image} alt="Forestry Equipment" />
          <Text variant="h4" strong>
            Forestry Equipment
          </Text>
        </MUI.Grid>
      </MUI.Grid>
    </Section>
    <Banner cta={placeholderData.button}>
      We listen when the banks won't. Chat directly with the decision makers
      today.
    </Banner>
    <Section {...pageSections?.aboutUs}></Section>
    <Section {...pageSections?.benefits}></Section>
    <Section {...pageSections?.reasons}></Section>
    <Section {...pageSections?.process}></Section>
    <Section {...pageSections?.helped}>
      <MUI.Grid container spacing={6}>
        <MUI.Grid item xs={12} md>
          <Card
            meta="Alberta, Canada - Construction Equipment"
            image={{
              src: placeholderData.image,
              alt:
                "Offering customers more choice: how National Leasing end title.",
            }}
            title="Offering customers more choice: how National Leasing end title."
          >
            <Text variant="body2">
              Sometimes it seems like nothing goes right. We hear some crazy and
              inspirational stories of small business owners overcoming
              incredible challenges through had work and something something …
            </Text>
          </Card>
        </MUI.Grid>
        <MUI.Grid item xs={12} md>
          <Card
            meta="Alberta, Canada - Construction Equipment"
            image={{
              src: placeholderData.image,
              alt: "Offering customers more choice.",
            }}
            title="Offering customers more choice."
          >
            <Text variant="body2">
              Sometimes it seems like nothing goes right. We hear some crazy and
              inspirational stories of small business owners overcoming
              incredible challenges through had work and something something and
              one more line to show you what happens when…
            </Text>
          </Card>
        </MUI.Grid>
        <MUI.Grid item xs={12} md>
          <Card
            meta="Alberta, Canada - Construction Equipment"
            image={{
              src: placeholderData.image,
              alt:
                "Offering customers more choice: how National Leasing end title.",
            }}
            title="Offering customers more choice: how National Leasing end title."
          >
            <Text variant="body2">
              Sometimes it seems like nothing goes right. We hear some crazy and
              inspirational stories of small business owners overcoming
              incredible challenges through had work and something something …
            </Text>
          </Card>
        </MUI.Grid>
      </MUI.Grid>
    </Section>
  </Layout>
)

export default IndexPage
