
import { ThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";
import InicialPage from "./Components/InicialPage/InicialPage";
import MatchPage from "./Components/MatchPage/MatchPage";
import theme from "./Constants/Theme";
 
const App = () => {
  const [pages, setPages] = useState("inicialPage");

  const selectPage = () => {
    if (pages === "inicialPage") {
      return <InicialPage changePage={changePage} />;
    } else if (pages === "MatchPage") {
      return <MatchPage changePage={changePage} />;
    } else {
      return <InicialPage />;
    }
  };

  const changePage = (pages) => {
    setPages(pages);
  };

  return <ThemeProvider theme={theme}>
    {selectPage()}

   
  </ThemeProvider>;
};

export default App;
