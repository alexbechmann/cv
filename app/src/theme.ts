import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#25303b"
    },
    secondary: {
      main: "#ffb238"
    }
  }
});

export default theme;
