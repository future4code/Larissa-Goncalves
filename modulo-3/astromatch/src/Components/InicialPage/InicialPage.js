import { Fab, IconButton, Tooltip } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import { DivBio, DivButton, DivCard, DivHeader, ImagemPerfil } from "./IncialPage-Styled";
import { CheckCircle, CloseOutlined, FavoriteOutlined } from "@material-ui/icons";
import { ForumOutlined } from "@material-ui/icons";
import LoadingPage from "../LoadingPage/LoadingPage";

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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => { getProfile() }, [])

  return (
    <DivCard>
      <DivHeader>
        <img src={'https://astromatch.tashalovedesign.com/wp-content/uploads/2021/03/Logo-astro-match-exe-final_pink-notag.png'} />
        <Tooltip title="Ver Matchs">
          <IconButton aria-label="matches" onClick={() => props.changePage("MatchPage")} >
            <ForumOutlined color='primary' />
          </IconButton>
        </Tooltip>
      </DivHeader>
      <div>
        {
          profile.id ? <DivBio> <ImagemPerfil src={profile.photo}/> <h3>{profile.name} , {profile.age} <CheckCircle color='tercery' /> </h3> <p>{profile.bio}</p> </DivBio> : <div><LoadingPage /></div>
        }
      </div>
      <DivButton>
        <Fab onClick={() => choosePerson(false)} aria-label="edit"><CloseOutlined color='error' /></Fab>
        <Fab onClick={() => choosePerson(true)} aria-label="edit"> <FavoriteOutlined color="success" /></Fab>
      </DivButton>
    </DivCard>
   
  );
};
export default InicialPage;

