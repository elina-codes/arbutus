import React from "react"
import Layout from "components/layout"
import images from "src/images"
import pageSections from "src/content/about-us"
import * as MUI from "@material-ui/core"
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

const topBannerData = {
  title: "Family-owned for over 40 years",
  description:
    "We value deep relationships and are well established to handle demands of any size.",
  cta: <OpenContactModalButton>Let's work together</OpenContactModalButton>,
  bgImage: images.banners.aboutUs,
}

const AboutUsPage = () => {
  const { ourStory, ourLeadershipTeam, ourValues, staff, values } =
    pageSections || {}
  return (
    <Layout {...{ seo, topBannerData, showSuccessStories: true }}>
      <Section {...ourStory}></Section>
      <Section {...ourLeadershipTeam}>
        <MUI.Grid container spacing={5}>
          {staff.map((s, i) => (
            <MUI.Grid
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
            </MUI.Grid>
          ))}
        </MUI.Grid>
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
        <MUI.Grid container spacing={5}>
          {values.map(v => (
            <MUI.Grid
              key={`values-${v.title}`}
              container
              direction="column"
              item
              xs={12}
              md={6}
              alignItems="center"
            >
              <IconText icon={v.icon} text={v.title} size="md" center />
              <Text>{v.text}</Text>
            </MUI.Grid>
          ))}
        </MUI.Grid>
      </Section>
    </Layout>
  )
}

export default AboutUsPage
