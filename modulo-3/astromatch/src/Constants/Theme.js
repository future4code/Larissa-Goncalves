import { createTheme } from '@material-ui/core/styles';
import { primaryColor, textColor, buttonColor, secundyColor, likeColor, deslikeColor, check } from './Colors';


const theme = createTheme({
  palette: {
    primary: {
        main: primaryColor,
        text: textColor,
    },
   secundary:{
       main: buttonColor,
       icon:likeColor,
   },
   tercery:{
       main:check,
   }
  },
});

export default theme;