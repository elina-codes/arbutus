import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  plainImageContainer: {
    display: "flex",
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto",
  },
  alignTop: {
    alignSelf: "flex-start",
  },
  image: {
    borderRadius: theme.borderRadius,
    objectFit: "cover",
    boxShadow: theme.boxShadow,
  },
}))

export default styles
