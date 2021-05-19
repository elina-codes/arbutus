import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(() => ({
  noMargin: {
    "&:not(:last-child)": {
      marginBottom: 0,
    },
  },
}))

export default styles
