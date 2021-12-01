import axios from "axios";
import { useState, useEffect } from "react";
import { DivCard, ImagemPerfil} from "./IncialPage-Styled";

const InicialPage = (props) => {
  const [profile, setProfile] = useState({});

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
      )
      .then((response) => {
        const matchPerson = response.data.profile
        setProfile(matchPerson);
        console.log(response.data.profile);
      })
      .catch((err) => {
        console.log(err);
        
      });
    };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const ChoosePerson = (event) => {
  axios
    .post(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person",
      {
        id: profile.id,
        choice: event
      }
    )
    .then((res) => {
      console.log(res.data);
      getProfile();
    })
    .catch((err) => {
      console.log(err);
    });
};
//////////////////////////////////////
    useEffect(() => {getProfile()}, [])

  return(
    <DivCard>
    <div>
      <button onClick={() => props.changePage("MatchPage")}>
        ver matchs
      </button>
    </div>
      {
         profile.id ? <div> <ImagemPerfil src={profile.photo}/> <h3>{profile.name} , {profile.age}</h3> <p>{profile.bio}</p> </div>: <p>Todos os perfis já foram vistos</p> 
      }
    <div>
        <button onClick={() => ChoosePerson(false)}>X</button>
        <button onClick={() => ChoosePerson(true)}>v</button>
      
      
    </div>
  </DivCard>
);
};
export default InicialPage;

 