import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  plainImageContainer: {
    display: "flex",
    flex: 1,
  },
  image: {
    boxShadow: "rgba(68,87,121,0.15)",
    borderRadius: theme.borderRadius,
    objectFit: "cover",
    boxShadow: "4px 8px 30px rgba(68, 87, 121, 0.15)",
  },
}))

export default styles
