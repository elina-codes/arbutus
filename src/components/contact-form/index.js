import { phoneNumber } from "src/constants"
import React, { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { TextField } from "@material-ui/core"
import { Button, PhoneLink, Text } from "components"
import useStyles from "./styles"
import SuccessView from "components/success-view"

const ContactForm = ({
  showHeader,
  showFooter,
  submissionCallback = () => {},
}) => {
  const classes = useStyles()
  const [submitting, setSubmitting] = useState(false)
  const [showSuccessView, setShowSuccessView] = useState(false)
  const [errorText, setErrorText] = useState(null)
  const { control } = useForm()

  useEffect(() => {
    setShowSuccessView(false)
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    setSubmitting(true)
    const formElements = [...e.currentTarget.elements]
    const honeypotField = formElements.find(
      elem => elem.name === "totallyRealField"
    )
    const isValid = honeypotField.value === ""

    const validFormElements = isValid ? formElements : []

    if (validFormElements.length >= 1) {
      const filledOutElements = validFormElements
        .filter(elem => !!elem.value)
        .map(
          element =>
            encodeURIComponent(element.name) +
            "=" +
            encodeURIComponent(element.value)
        )
        .join("&")

      try {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: filledOutElements,
        })
        setSubmitting(false)
        setShowSuccessView(true)
        submissionCallback()
      } catch (err) {
        setSubmitting(false)
        setErrorText(
          "There was an error with your submission, please try again later."
        )
        console.error(err)
      }
    }
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
        onSubmit={handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="totallyRealField"
      >
        <input type="hidden" name="totallyRealField" />
        <input
          type="hidden"
          name="form-name"
          value="Contact Form"
          readOnly={true}
        />
        <Controller
          name="fullName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              required
              label="Full name"
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
              required
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
        <Button type="submit" disabled={submitting}>
          Submit
        </Button>
        {errorText && <Text>{errorText}</Text>}
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
