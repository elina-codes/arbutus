import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  plainImageContainer: {
    flex: 1,
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
  },
  animationContainer: {
    display: "flex",
    flex: 1,
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
