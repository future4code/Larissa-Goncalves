import axios from "axios";
import { useState, useEffect } from "react";
import { DivMatch, DivImg, DivRender} from "./MatchPage-Styled";


const MatchPage = (props) => {
  const [matches, setMatches] = useState([]);
  const [order, setOrder] = useState(1)

  const getMatches = () => {
    axios
    .get(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches"
    )
    .then((response) => {
      const listMatches = response.data.matches
      setMatches(listMatches)
      console.log(response.data.matches);

    })
    .catch((err) => {
      console.log(err)

    })
  }

  useEffect(() => {getMatches()}, [])

  const allMatches =  matches
  .sort((likes, liked) => {
    return(
      order * likes.name.localeCompare(liked.name)
    )
  })
  .map((match) => {
    return <DivRender key={match.id}>
      <DivImg src={match.photo} />
      <h3>{match.name}, {match.age}</h3>
      

    </DivRender>
  })

  return (
    <DivMatch>
      <div>
        <button onClick={() => props.changePage("inicialPage")}>
          Voltar aos matches
        </button>
        <button>limpar matches</button>
        Você tem {allMatches.length} Match
        
  
      </div>
      <div>
        {allMatches}
        {/* {
          allMatches.id ? <div> <img src={allMatches.photo}/> <h3>{allMatches.name} , {allMatches.age}</h3></div> : <p>Ainda nenhum match</p>
        } */}
      </div>
    </DivMatch>
  );
};

export default MatchPage;
