import { IconButton, Tooltip } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import { DivMatch, DivImg, DivRender, DivHeaderMatches} from "./MatchPage-Styled";
import { BackspaceOutlined, FavoriteOutlined, GroupAddOutlined } from "@material-ui/icons";


const MatchPage = (props) => {
  const [matches, setMatches] = useState([]);
  const [order, setOrder] = useState(1)

  const getMatches = () => {
    axios
    .get(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches",
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

  const clearMatchs = () => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear",
    )
    .then((res) => {
      setMatches([])
      swal({
        title: "CUIDADO! ",
        text: "Apagar todos os matches?",
        icon: "warning",
        // buttons: true,
        // dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete ) {
          swal("Seus matches foram deletados com sucesso!", {
            icon: "success",
          });
        } else {
          // swal("Nenhum match deletado!");
        }
      });
    })
      
    .catch((err) => {
      console.log(err)
      swal({
        title: "ERRO!",
        text: "Desculpe algo deu errado!",
        icon : "warning",
        buttons: true,
      })
    })
  }
  return (
    <DivMatch>
      <DivHeaderMatches>
     
      <Tooltip title="Encontrar Matchs">
        <IconButton aria-label="Back" onClick={() => props.changePage("inicialPage")} > 
       <GroupAddOutlined color='primary'/>
        </IconButton>
      </Tooltip>
        <Tooltip title="Apagar Matchs">
        <IconButton aria-label="delete" onClick={() => clearMatchs()}> 
       <BackspaceOutlined color='error'/>
        </IconButton >
       
      </Tooltip>
      <FavoriteOutlined color='primary'/>{allMatches.length}
     
      
      </DivHeaderMatches>
     
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
