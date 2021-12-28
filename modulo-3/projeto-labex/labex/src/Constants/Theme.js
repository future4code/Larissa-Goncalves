import { createTheme } from '@material-ui/core/styles';
import {
  BackgroundColor,
  PrimaryColor,
  SecondaryColor,
  TextColor
} from './Colors';



const Theme = createTheme({
  palette: {
    primary: {
      main: PrimaryColor,
      text: TextColor
    },
    Secondary: {
      main: SecondaryColor,
      text: TextColor
    },
    background: {
      main: BackgroundColor
    },
  }
});
export default Theme;
