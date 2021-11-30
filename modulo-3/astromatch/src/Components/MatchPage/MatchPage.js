import axios from "axios";
import { useState,useEffect } from "react";
import {DivMatch} from "./MatchPage-Styled";


const MatchPage = (props) => {
  const [matches, setMatches] = useState([])

  useEffect(() => {getMatches()}, []);

  const getMatches = () => {
    axios.get(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/larissa/matches",
    {

    })
    .then((res) => {
      console.log(res.data)
      setMatches(res.data.matches)

    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }

  return(
    <DivMatch>
     <div>
      <button onClick ={() => props.changePage ('inicialPage')}>Voltar aos matchs</button>
      
      </div>
      
     
     
      

    </DivMatch>
  )

}

export default MatchPage;