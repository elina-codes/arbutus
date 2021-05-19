import images from "src/images"
import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  pageMenu: {
    backgroundImage: `url(${images.bg.logo})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center left",
  },
  pageMenuList: {
    flex: 1,
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  pageMenuListItem: {
    margin: 0,
    "&:not(:first-child)::before": {
      content: `"|"`,
      margin: theme.spacing(0, 1),
      opacity: 0.5,
    },
    "& a": {
      color: "inherit",
      textDecoration: "none",
    },
  },
}))

export default styles
