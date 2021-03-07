import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  root: {
    background: "linear-gradient(0deg, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 50%)",
  },
  contactForm: {
    minHeight: 400,
    borderRadius: theme.borderRadius,
  },
}))

export default styles
