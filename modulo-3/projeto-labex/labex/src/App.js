import Router from './Routes/Router';
import Footer from "./Components/Footer/Footer"
import Theme from './Constants/Theme';
import { ThemeProvider } from '@material-ui/core/styles';

const App = () => {
  return(
    <ThemeProvider Theme={Theme}>
       <Router/>
    <Footer/>


    </ThemeProvider>
     
     
     
  
  )
}

export default App