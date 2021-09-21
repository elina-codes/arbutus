import React from "react"
import Layout from "components/layout"
import pageSections from "src/page-content/about-us"
import * as Mui from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import {
  OpenContactModalButton,
  Banner,
  ImagePlain,
  Section,
  Text,
} from "src/components"
import { Blockquote, IconText } from "components"

const seo = {
  title: "About Us",
}

const BgImage = () => (
  <StaticImage
    layout="fullWidth"
    placeholder="blurred"
    alt=""
    src="../images/banner-aboutus.jpg"
    style={{ gridArea: "1/1" }}
    fit="cover"
    formats={["auto", "jpg", "png", "jpeg"]}
  />
)
const topBannerData = {
  title: "Family-owned for over 40 years",
  description:
    "We value deep relationships and are well established to handle demands of any size.",
  cta: <OpenContactModalButton>Let's work together</OpenContactModalButton>,
  topImage: BgImage,
}

const AboutUsPage = () => {
  const { ourStory, ourLeadershipTeam, ourValues, staff, values } =
    pageSections || {}
  return (
    <Layout {...{ seo, topBannerData, showSuccessStories: true }}>
      <Section {...ourStory}></Section>
      <Section {...ourLeadershipTeam}>
        <Mui.Grid container spacing={5}>
          {staff.map((s, i) => (
            <Mui.Grid
              key={`staff-${s.name}`}
              container
              direction="column"
              item
              xs={12}
              sm={6}
              md
            >
              <ImagePlain src={s.image} alt={s.name} delay={i * 100} />
              <Text variant="h4" strong>
                {s.name}
                <Text>{s.position}</Text>
              </Text>
            </Mui.Grid>
          ))}
        </Mui.Grid>
        <Blockquote author="Elizabeth Benda, President &amp; Chief Executive Officer, Arbutus Capital">
          We understand that juggling work and family while being an independent
          business owner has its challenges. We are here to find solutions when
          you need them most.”
        </Blockquote>
      </Section>
      <Banner
        cta={<OpenContactModalButton>Get started</OpenContactModalButton>}
      >
        Contact us and you can chat directly with one of the owners today.
      </Banner>
      <Section {...ourValues}>
        <Mui.Grid container spacing={5} justify="center">
          {values.map(v => (
            <Mui.Grid
              key={`values-${v.title}`}
              container
              direction="column"
              item
              xs={12}
              md={6}
              lg={4}
              alignItems="center"
            >
              <IconText
                icon={v.icon}
                color={v.iconColor || "inherit"}
                text={v.title}
                size="md"
                center
              />
              <Text>{v.text}</Text>
            </Mui.Grid>
          ))}
        </Mui.Grid>
      </Section>
    </Layout>
  )
}

export default AboutUsPage
