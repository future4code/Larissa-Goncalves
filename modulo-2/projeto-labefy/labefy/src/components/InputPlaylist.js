import axios from "axios";
import React from "react";
import styled from "styled-components";
import imagem from './img/papel.jpeg';
import spotifyImg from './img/spoti-yellow.png'


export default class InputPlaylist extends React.Component{
  state = {
    inputPlaylistName: '',
  }

  onChangeName = (event) => {
    this.setState({inputPlaylistName: event.target.value})
  };

  createPlaylist = () => {
    const body = {
      name: this.state.inputPlaylistName,
    };
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body,
    {
      headers:{
        Authorization: "larissa-lanes-carver"
      }
    })
    .then((res) => {
      this.setState({inputPlaylistName: "",})
      alert("Playlist criada com sucesso")
      console.log(res)
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }
    render(){
      return(
        <DivPrincipal>   
          <divCenter>
            <divImgSpotify>
            <img src={spotifyImg}/>
            <h1>labefy</h1>
            </divImgSpotify>
            <h2>Escolha um nome e crie sua nova playlist.
            </h2>
          <input placeholder={'Digite o nome da playlist'} value={this.state.inputPlaylistName} onChange={this.onChangeName}></input>
            <divButton>
            <button onClick={this.createPlaylist}>Criar playlist</button>
            <button onClick={this.props.goToRenderList}>ver playlists</button>
            </divButton>
          </divCenter> 
          <divImg>
            <img src={imagem}/>
          </divImg> 
        </DivPrincipal>
            
      )
    }
  }

  //////styled//////////////////////////

    const DivPrincipal = styled.div`
     display: grid;
     grid-template-columns: 2fr 1fr;

     divCenter{
       background:#141f40;
        align-items: center;
        display: flex;
      
        gap: 40px;
        flex-direction: column;

        h2{
            font-size: 20px;
            color: white;
            position: relative;
            margin-top:10vh;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          }
        divImgSpotify{
          display: flex;
          flex-direction: row;
          margin-top:80px;
          gap: 20px;

          img{
          height: 40px;
          margin-top: 30px;
        }
        h1{
          font-size: 40px;
          color: white;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        }
        input{
          border: solid 2px #ffba0a;
          height: 6vh;
          width: 30vw;
          border-radius: 30px ;
          font-size: medium;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
          background-color:white;
        }
        input:hover{
          background-color: #ffba0a;
        }
        divButton{
          display: flex;
          height: 4vh;
        }
        button{
          color: white;
          background-color:transparent;
          border: solid 2px #ffba0a;
          border-radius: 20px;
          width: 10vw;
          margin-left: 10px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: medium;
          cursor: pointer;
        }
        button:hover{
          background-color:#ffba0a;
          color: white;
          border: none;
        }  
     }
     divImg{
       background-color: red;
       height: 100vh;
     }
     `

   



