import { makeStyles } from "@material-ui/core/styles"
import images from "../../images"

const styles = makeStyles(theme => ({
  banner: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url(${images.bg.logo})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center left",
  },
}))

export default styles
