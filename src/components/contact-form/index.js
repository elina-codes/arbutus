import { phoneNumber } from "src/constants"
import React, { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { TextField } from "@material-ui/core"
import { Button, PhoneLink, Text } from "components"
import useStyles from "./styles"
import { IoMdCheckmarkCircleOutline as CheckIcon } from "react-icons/io"

const ContactForm = ({
  showHeader,
  showFooter,
  submissionCallback = () => {},
}) => {
  const classes = useStyles()
  const [showSuccessView, setShowSuccessView] = useState(false)
  const { control } = useForm()
  // const { control, handleSubmit } = useForm()
  const onSubmit = data => {
    console.log(data)
    setShowSuccessView(true)
    submissionCallback()
  }

  useEffect(() => {
    setShowSuccessView(false)
  }, [])

  const SuccessView = () => {
    return (
      <>
        <CheckIcon size={60} color="#7ED321" />
        <Text variant="h5" component="h3">
          Success!
        </Text>
        <Text variant="h4">
          We have received your message and will contact you within one business
          day.
        </Text>
        <Text variant="h4" strong>
          That’s our promise to you.
        </Text>
      </>
    )
  }

  return showSuccessView ? (
    <SuccessView />
  ) : (
    <>
      {showHeader && (
        <div className={classes.contactFormHeader}>
          <Text variant="h3">Start leasing equipment</Text>
          <Text variant="h4">
            Tell us what you’re looking for and we will get back to you within 1
            business day.
          </Text>
        </div>
      )}
      <form
        name="Contact Form"
        // onSubmit={handleSubmit(onSubmit)}
        onSubmit={onSubmit}
        data-netlify="true"
        data-netlify-honeypot="totallyRealField"
      >
        <input type="hidden" name="totallyRealField" />
        <input type="hidden" name="form-name" value="Contact Form" />
        <Controller
          name="fullName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              required
              label="Full Name"
              margin="dense"
              fullWidth
              variant="outlined"
              {...field}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              required
              label="Phone number"
              margin="dense"
              fullWidth
              type="tel"
              variant="outlined"
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="Email"
              margin="dense"
              fullWidth
              type="email"
              variant="outlined"
              {...field}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              required
              label="Tell us what you’re looking for"
              placeholder="ie. What equipment do you need? How much money do you need?"
              fullWidth
              margin="dense"
              variant="outlined"
              multiline
              rows={4}
              {...field}
            />
          )}
        />
        <div data-netlify-recaptcha="true" />
        <Button type="submit">Submit</Button>
      </form>
      {showFooter && (
        <div className={classes.contactFormFooter}>
          <Text>
            <PhoneLink color="inherit">
              or call us directly at <strong>{phoneNumber.text}</strong>
            </PhoneLink>
          </Text>
        </div>
      )}
    </>
  )
}

export default ContactForm
