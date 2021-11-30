import axios from "axios";
import { useState, useEffect } from "react";
import { DivCard } from "./IncialPage-Styled";

const InicialPage = (props) => {
    const [profile, setProfile] = useState("")

    useEffect(() => {getProfileToChoose()}, []);

    const getProfileToChoose = () => {
        axios.get(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/larissa/person",{
        })
        .then((res) => {
            console.log(res.data.profile)
            setProfile(res.data.profile)
        })
        .catch((err) => {
            // console.log(err.reponse.data)
        })
    }


    //////// match true or false////////

    const ChoosePerson = (event) => {
        axios.post(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/larissa/choose-person",
            {
              id: profile.id,
              choice: event
            }
          )
          .then((res) => {
            console.log(res.data,"deu certo");
            getProfileToChoose();

          })
          .catch((err) => {
            console.log('x', err);
            
          });
      };

    
  
    
  return(
    <DivCard>
        <div>
        <button onClick ={() => props.changePage ('MatchPage')}>ver matchs</button>
        </div>
        <div>
        <img src={profile.photo}/>
        </div>
        <div>
        <h2>{profile.name} {profile.age}</h2>
        <p>{profile.bio}</p>
        </div>
        <div>
        <button onClick={() => ChoosePerson(false)}>x</button>
        <button onClick={() => ChoosePerson(true)}>match</button>
        </div>
    </DivCard>
  )
}
export default InicialPage;