import { phoneNumber } from "src/constants"
import React from "react"
import Layout from "components/layout"
import {
  Button,
  OpenContactModalButton,
  ArbutusMap,
  ContactForm,
  Text,
  Section,
} from "components"
import placeholderData from "src/placeholder-data"
import * as MUI from "@material-ui/core"
import pageSections from "src/content/contact-us"

const seo = {
  title: "Contact Us",
}

const topBannerData = {
  title: "Contact Us",
  description:
    "We make all of our decisions in-house. That means we can get you the equipment financing you need, today.",
  cta: (
    <>
      <Button color="default" href={phoneNumber.href}>
        {phoneNumber.text}
      </Button>
      <OpenContactModalButton>Apply Now</OpenContactModalButton>
    </>
  ),
  bgImage: placeholderData.bannerImage,
}

const ContactUsPage = () => {
  const { location, locationDetails, sendMessage, faq } = pageSections || {}
  return (
    <Layout {...{ seo, topBannerData }}>
      <Section>
        <MUI.Grid container spacing={5}>
          <MUI.Grid container direction="column" spacing={3} item sm={12} md>
            <MUI.Grid item>
              <Section {...location}>
                <ArbutusMap />
              </Section>
            </MUI.Grid>
            <MUI.Grid item>
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
                  Tel: <MUI.Link href="tel:6046627717">604.662.7717</MUI.Link>
                  <br />
                  Fax: 604.662.3999
                  <br />
                  <br />
                </Text>
                <Text variant="h5">Email Us</Text>
                <Text>
                  <MUI.Link href="mailto:lease@arbutuscapital.com">
                    lease@arbutuscapital.com
                  </MUI.Link>
                </Text>
              </Section>
            </MUI.Grid>
          </MUI.Grid>
          <MUI.Grid container direction="column" spacing={3} item sm={12} md>
            <MUI.Grid item>
              <Section {...sendMessage}>
                <ContactForm />
              </Section>
            </MUI.Grid>
            <MUI.Grid item>
              <Section {...faq} />
            </MUI.Grid>
          </MUI.Grid>
        </MUI.Grid>
      </Section>
    </Layout>
  )
}

export default ContactUsPage
