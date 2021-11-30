import { useState } from "react";
import InicialPage from "./Components/InicialPage/InicialPage";
import MatchPage from './Components/MatchPage/MatchPage';

const App = () => {
  const [pages, setPages] = useState("inicialPage");
 
  const selectPage = () => {
    if (pages === 'inicialPage') {
        return <InicialPage changePage={changePage}/>;
    }else if (pages === 'MatchPage'){
        return <MatchPage changePage={changePage}/>
    }else <p>pagina não encontrada</p>
  }
   
    const changePage = (pages) => {
      setPages(pages);
    };
  
  return(
    <div>    
     {selectPage()}
    
    </div>
  )

}

export default App;