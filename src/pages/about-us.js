import React from "react"
import Layout from "components/layout"
import placeholderData from "src/placeholder-data"
import pageSections from "src/content/about-us"
import * as MUI from "@material-ui/core"
import {
  OpenContactModalButton,
  Banner,
  ImagePlain,
  Section,
  Text,
} from "src/components"

const seo = {
  title: "About Us",
}

const topBannerData = {
  title: "Family-owned for over 40 years",
  description:
    "We value deep relationships and are well established to handle demands of any size.",
  cta: <OpenContactModalButton>Let's work together</OpenContactModalButton>,
  bgImage: placeholderData.bannerImage,
}

const AboutUsPage = () => {
  const { ourStory, ourLeadershipTeam, ourValues, staff, values } =
    pageSections || {}
  return (
    <Layout {...{ seo, topBannerData, showSuccessStories: true }}>
      <Section {...ourStory}></Section>
      <Section {...ourLeadershipTeam}>
        <MUI.Grid container spacing={5}>
          {staff.map(s => (
            <MUI.Grid
              key={`staff-${s.name}`}
              container
              direction="column"
              item
              xs={12}
              sm={6}
              md
            >
              <ImagePlain src={s.image} alt={s.name} />
              <Text variant="h4" strong>
                {s.name}
                <Text>{s.position}</Text>
              </Text>
            </MUI.Grid>
          ))}
        </MUI.Grid>
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
              {v.icon}
              <Text variant="h4" strong>
                {v.title}
              </Text>
              <Text>{v.text}</Text>
            </MUI.Grid>
          ))}
        </MUI.Grid>
      </Section>
    </Layout>
  )
}

export default AboutUsPage
