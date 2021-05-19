import { makeStyles } from "@material-ui/core/styles"
import images from "src/images"

const styles = makeStyles(theme => ({
  banner: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url(${images.bg.logo})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center left",
  },
  bannerContent: {
    flex: 1,
    textAlign: "left",
    paddingRight: theme.space.xl,
  },
}))

export default styles
