import React, { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import Layout from "components/layout"
import images from "src/images"
import pageSections from "src/page-content/brokers"
import {
  Button,
  Banner,
  Section,
  IconList,
  RecentDeals,
  Text,
} from "components"
import * as Mui from "@material-ui/core"
import SuccessView from "components/success-view"
const seo = {
  title: "Brokers",
}

const scrollToForm = e => {
  e.preventDefault()
  document.getElementById("brokers-form").scrollIntoView({ behavior: "smooth" })
}

const topBannerData = {
  title: "We work hard for you and your clients",
  description:
    "We always endeavour to find a way through, structuring deals that get your clients the equipment they need with the resources they have.",
  cta: <Button onClick={scrollToForm}>Start a partnership</Button>,
  bgImage: images.banners.broker,
}

const BrokersPage = () => {
  const [errorText, setErrorText] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [showSuccessView, setShowSuccessView] = useState(false)
  const { why, truePartnership, moreReasons } = pageSections || {}
  const { content: moreReasonsContent, ...moreReasonsSection } = moreReasons
  const { content: whyContent, ...whySection } = why
  const { control } = useForm()

  const handleSubmit = async e => {
    e.preventDefault()
    setErrorText("Submitting...")
    const formElements = [...e.currentTarget.elements]
    const honeypotField = formElements.find(
      elem => elem.name === "totallyRealField"
    )
    const isValid = honeypotField.value === ""

    const validFormElements = isValid ? formElements : []

    if (validFormElements.length < 1) {
      setErrorText("It looks like you filled out too many fields!")
    } else {
      const filledOutElements = validFormElements
        .filter(elem => !!elem.value)
        .map(
          element =>
            encodeURIComponent(element.name) +
            "=" +
            encodeURIComponent(element.value)
        )
        .join("&")

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: filledOutElements,
      })
        .then(() => {
          setShowSuccessView(true)
        })
        .catch(_ => {
          setSubmitting(false)
          setErrorText(
            "There was an error with your submission, please try again later."
          )
        })
    }
  }

  return (
    <Layout {...{ seo, topBannerData }}>
      <Section>
        <Mui.Grid container spacing={3}>
          <Mui.Grid item xs={12} md={6}>
            <Section {...whySection}>
              <IconList data={whyContent} singleCol outlined />
            </Section>
          </Mui.Grid>
          <Mui.Grid item xs={12} md={6} id="brokers-form">
            <Section
              {...{
                ...truePartnership,
                description: showSuccessView
                  ? null
                  : truePartnership.description,
              }}
            >
              {showSuccessView ? (
                <SuccessView />
              ) : (
                <form
                  name="Brokers Contact Form"
                  onSubmit={handleSubmit}
                  data-netlify="true"
                  data-netlify-honeypot="totallyRealField"
                >
                  <input type="hidden" name="totallyRealField" />
                  <input
                    type="hidden"
                    name="form-name"
                    value="Brokers Contact Form"
                    readOnly={true}
                  />

                  <Mui.Grid container spacing={3}>
                    <Mui.Grid item xs={12} sm>
                      <Controller
                        name="fullName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <Mui.TextField
                            label="Full Name"
                            margin="dense"
                            fullWidth
                            required
                            variant="outlined"
                            {...field}
                          />
                        )}
                      />
                    </Mui.Grid>
                    <Mui.Grid item xs={12} sm>
                      <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <Mui.TextField
                            label="Phone number"
                            margin="dense"
                            fullWidth
                            required
                            variant="outlined"
                            {...field}
                          />
                        )}
                      />
                    </Mui.Grid>
                  </Mui.Grid>
                  <Button type="submit" disabled={submitting}>
                    Let's talk
                  </Button>
                  {errorText && <Text>{errorText}</Text>}
                </form>
              )}
            </Section>
          </Mui.Grid>
        </Mui.Grid>
      </Section>
      <Banner>
        <em>
          We are always evaluating the way we do business with our brokers, and
          constantly integrate their feedback in our ongoing plans.
        </em>
      </Banner>
      <Section {...moreReasonsSection}>
        <IconList data={moreReasonsContent} />
      </Section>
      <RecentDeals />
    </Layout>
  )
}

export default BrokersPage
