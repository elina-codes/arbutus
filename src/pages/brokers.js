import React from "react"
import { useForm, Controller } from "react-hook-form"
import Layout from "components/layout"
import images from "src/images"
import pageSections from "src/page-content/brokers"
import { Button, Banner, Section, IconList, RecentDeals } from "components"
import * as Mui from "@material-ui/core"
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
  const { why, truePartnership, moreReasons } = pageSections || {}
  const { content: moreReasonsContent, ...moreReasonsSection } = moreReasons
  const { content: whyContent, ...whySection } = why

  const { control } = useForm()
  // const { control, handleSubmit } = useForm()
  // const onSubmit = data => console.log(data)
  // function encode(data) {
  //   return Object.keys(data)
  //       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //       .join("&")
  // }

  // const onSubmit = (event) => {
  //   event.preventDefault()
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({
  //       ...name
  //     })
  //   }).then(() => navigate("/thank-you/")).catch(error => alert(error))
  // }

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
            <Section {...truePartnership}>
              <form
                name="Brokers Contact Form"
                // onSubmit={handleSubmit(onSubmit)}
                data-netlify="true"
                data-netlify-honeypot="totallyRealField"
                method="POST"
              >
                <input type="hidden" name="totallyRealField" />
                <input
                  type="hidden"
                  name="form-name"
                  value="Brokers Contact Form"
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
                          variant="outlined"
                          {...field}
                        />
                      )}
                    />
                  </Mui.Grid>
                </Mui.Grid>
                <Button type="submit">Let's talk</Button>
              </form>
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
