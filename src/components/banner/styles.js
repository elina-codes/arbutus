import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  banner: {
    backgroundColor: theme.palette.primary.main,
  },
  bannerList: {
    flex: 1,
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
  },
  bannerListItem: {
    margin: 0,
    "&:not(:first-child)::before": {
      content: `"|"`,
      margin: theme.spacing(0, 1),
      opacity: 0.5,
    },
  },
}))

export default styles
