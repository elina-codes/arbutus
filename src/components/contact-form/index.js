import React from "react"
import { useForm, Controller } from "react-hook-form"
import { TextField } from "@material-ui/core"
import { Button, Text } from "components"
import useStyles from "./styles"

const ContactForm = ({ showHeader, showFooter }) => {
  const { control, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)
  const classes = useStyles()
  return (
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
        onSubmit={handleSubmit(onSubmit)}
        // data-netlify="true"
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        <Controller
          name="fullName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
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
              label="Phone number"
              margin="dense"
              fullWidth
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
        <Button type="submit">Submit</Button>
      </form>
      {showFooter && (
        <div className={classes.contactFormFooter}>
          <Text>
            or call us directly at <strong>1-800-510-8040</strong>
          </Text>
        </div>
      )}
    </>
  )
}

export default ContactForm
