

import { Fab, IconButton, Tooltip } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import { DivBio, DivCard, ImagemPerfil} from "./IncialPage-Styled";
import { CheckCircle, CloseOutlined, FavoriteOutlined, PaletteOutlined} from "@material-ui/icons";
import { ForumOutlined } from "@material-ui/icons";

// import { palette } from '@material-ui/system';


const InicialPage = (props) => {
  const [profile, setProfile] = useState({});

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person",
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

  const choosePerson = (event) => {
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
      // if(res.data.isMatch ===  "true"){
      //   return alert("Deu Match")
      // }else {
      //   return alert("Ainda não")
      // }
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
      <h1></h1>
    <Tooltip title="Ver Matchs">
        <IconButton aria-label="matches" onClick={() => props.changePage("MatchPage")} > 
       <ForumOutlined color='primary'/>
        </IconButton>
      </Tooltip>
    </div>
      {
         profile.id ? <DivBio> <ImagemPerfil src={profile.photo}/> <h3>{profile.name} , {profile.age} <CheckCircle color='tercery' /> </h3> <p>{profile.bio}</p> </DivBio>: <FavoriteOutlined fontSize='large' color='primary'/>
      }
    <div>
        <Fab onClick={() => choosePerson(false)} aria-label="edit"><CloseOutlined color='error'/></Fab>
        <Fab onClick={() => choosePerson(true)}  aria-label="edit"> <FavoriteOutlined color="success"/></Fab>
    </div>
    <div>
   
    </div>
  </DivCard>
);
};
export default InicialPage;

 