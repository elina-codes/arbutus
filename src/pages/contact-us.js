import React from "react"
import Layout from "components/layout"
import {
  PhoneLink,
  OpenContactModalButton,
  ArbutusMap,
  ContactForm,
  Text,
  Section,
} from "components"
import { StaticImage } from "gatsby-plugin-image"
import * as Mui from "@material-ui/core"
import pageSections from "src/page-content/contact-us"
import { AiOutlineLinkedin as LinkedInIcon } from "react-icons/ai"

const seo = {
  title: "Contact Us",
}

const BgImage = () => (
  <StaticImage
    layout="fullWidth"
    placeholder="blurred"
    alt=""
    src="../images/banner-contactus.jpg"
    style={{ gridArea: "1/1" }}
    fit="cover"
    formats={["auto", "jpg", "png", "jpeg"]}
  />
)

const topBannerData = {
  title: "Contact Us",
  description:
    "We make all of our decisions in-house. That means we can get you the equipment financing you need, today.",
  cta: (
    <>
      <PhoneLink color="default" button />
      <OpenContactModalButton>Apply Now</OpenContactModalButton>
    </>
  ),
  topImage: BgImage,
}

const ContactUsPage = () => {
  const { location, locationDetails, sendMessage, faq } = pageSections || {}
  return (
    <Layout {...{ seo, topBannerData }}>
      <Section>
        <Mui.Grid container spacing={5}>
          <Mui.Grid container direction="column" spacing={3} item sm={12} md>
            <Mui.Grid item>
              <Section {...location}>
                <ArbutusMap />
              </Section>
            </Mui.Grid>
            <Mui.Grid item>
              <Section {...locationDetails}>
                <Text variant="h5">Our Office</Text>
                <Text>
                  Suite 1530, 355 Burrard St,
                  <br />
                  Vancouver, BC V6C 2G8
                  <br />
                  <br />
                </Text>
                <Text variant="h5">Call Us</Text>
                <Text>
                  Tel: <Mui.Link href="tel:6046627717">604.662.7717</Mui.Link>
                  <br />
                  Fax: 604.662.3999
                  <br />
                  <br />
                </Text>
                <Text variant="h5">Email Us</Text>
                <Text>
                  <Mui.Link href="mailto:lease@arbutuscapital.com">
                    lease@arbutuscapital.com
                  </Mui.Link>
                  <br />
                  <br />
                </Text>
                <Text variant="h5">Connect With Us</Text>
                <Text>
                  <Mui.Link
                    href="https://ca.linkedin.com/company/arbutus-capital"
                    external
                    title="LinkedIn"
                  >
                    <LinkedInIcon size={26} />
                  </Mui.Link>
                </Text>
              </Section>
            </Mui.Grid>
          </Mui.Grid>
          <Mui.Grid container direction="column" spacing={3} item sm={12} md>
            <Mui.Grid item>
              <Section {...sendMessage}>
                <ContactForm />
              </Section>
            </Mui.Grid>
            <Mui.Grid item>
              <Section {...faq} />
            </Mui.Grid>
          </Mui.Grid>
        </Mui.Grid>
      </Section>
    </Layout>
  )
}

export default ContactUsPage
