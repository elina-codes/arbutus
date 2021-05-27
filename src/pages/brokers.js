import React from "react"
import { useForm, Controller } from "react-hook-form"
import Layout from "components/layout"
import images from "src/images"
import pageSections from "src/content/brokers"
import {
  Button,
  OpenContactModalButton,
  Banner,
  CardGrid,
  Section,
  IconList,
} from "components"
import * as MUI from "@material-ui/core"
const seo = {
  title: "Brokers",
}

const topBannerData = {
  title: "We work hard for you and your clients",
  description:
    "We always endeavour to find a way through, structuring deals that get your clients the equipment they need with the resources they have.",
  cta: <OpenContactModalButton>Start a partnership</OpenContactModalButton>,
  bgImage: images.banners.broker,
}

const BrokersPage = () => {
  const { why, truePartnership, moreReasons, recentDeals } = pageSections || {}
  const { content: moreReasonsContent, ...moreReasonsSection } = moreReasons
  const { content: whyContent, ...whySection } = why
  const { content: recentDealsContent, ...recentDealsSection } = recentDeals

  const { control, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <Layout {...{ seo, topBannerData }}>
      <Section>
        <MUI.Grid container spacing={5}>
          <MUI.Grid container direction="column" spacing={3} item sm={12} md>
            <MUI.Grid item>
              <Section {...whySection}>
                <IconList data={whyContent} singleCol outlined />
              </Section>
            </MUI.Grid>
          </MUI.Grid>
          <MUI.Grid container direction="column" spacing={3} item sm={12} md>
            <MUI.Grid item>
              <Section {...truePartnership}>
                <form
                  name="Brokers Contact Form"
                  onSubmit={handleSubmit(onSubmit)}
                  // data-netlify="true"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="Brokers Contact Form"
                  />

                  <MUI.Grid container spacing={3}>
                    <MUI.Grid item xs={12} sm>
                      <Controller
                        name="fullName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <MUI.TextField
                            label="Full Name"
                            margin="dense"
                            fullWidth
                            variant="outlined"
                            {...field}
                          />
                        )}
                      />
                    </MUI.Grid>
                    <MUI.Grid item xs={12} sm>
                      <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <MUI.TextField
                            label="Phone number"
                            margin="dense"
                            fullWidth
                            variant="outlined"
                            {...field}
                          />
                        )}
                      />
                    </MUI.Grid>
                  </MUI.Grid>
                  <Button type="submit">Let's talk</Button>
                </form>
              </Section>
            </MUI.Grid>
          </MUI.Grid>
        </MUI.Grid>
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
      <Section {...recentDealsSection}>
        <CardGrid data={recentDealsContent} dark />
      </Section>
    </Layout>
  )
}

export default BrokersPage
