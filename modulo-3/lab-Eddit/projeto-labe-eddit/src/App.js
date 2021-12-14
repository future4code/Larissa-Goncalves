import { ThemeProvider } from "@material-ui/core";
import Theme from "./constants/theme/Theme";
import LoginPage from "./pages/LoginPage/LoginPage";
import Routes from "./rotes/Routes"

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Routes/>  
    </ThemeProvider>
    

   
  );
}

export default App;
