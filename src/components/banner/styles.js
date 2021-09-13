import { makeStyles } from "@material-ui/core/styles"
import images from "src/images"

const styles = makeStyles(theme => ({
  banner: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url(${images.bg.logo})`,
    backgroundSize: "auto 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center left",
  },
  bannerInner: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  bannerContent: {
    flex: 1,
    textAlign: "left",
    paddingRight: theme.space.xl,
    "&:not(:last-child)": {
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.space.sm,
      },
    },
  },
}))

export default styles
