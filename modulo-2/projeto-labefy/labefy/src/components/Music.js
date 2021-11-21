import axios from "axios";
import React from "react";
import styled from "styled-components";
import img from './img/music.png'
import spotifyImg from './img/spoti-yellow.png'

export default class Music extends React.Component {
    state = {
        inputNameMusic: '',
        inputArtist: '',
        inputUrl: '',
        playlistMusic: [],
    }

    onChangeNameMusic = (event) => {
        this.setState({inputNameMusic: event.target.value})
    };

    onChangeArtist = (event) => {
        this.setState({inputArtist: event.target.value})
    };

    onChangeUrl = (event) => {
        this.setState({inputUrl: event.target.value})
    };


    componentDidMount(){
        this.getPlaylistTracks()
    }
    
    // componentDidUpdate(){
    //     this.getPlaylistTracks()
    // }

    addTrackToPlaylist = () => {
        var keyPlaylist = "27d5d9b7-9451-4628-971c-ecef5abc0fab"
        const body = {
            name: this.state.inputNameMusic,
            artist: this.state.inputArtist,
            url: this.state.inputUrl,
        };
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${keyPlaylist}/tracks`, body,
        {
            headers:{
                Authorization: "larissa-lanes-carver"
            }
        })
        .then((res) => {
            this.setState({inputNameMusic: "", inputArtist: "", inputUrl: ""})
            alert("Música adicionada a playlist")
             this.getPlaylistTracks()
            console.log(res)
        })
        .catch((err) => {
            alert(err.response.data.message)
            console.log(err)
        })
    }

    getPlaylistTracks = () => {
        var keyPlaylist = "27d5d9b7-9451-4628-971c-ecef5abc0fab"
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${keyPlaylist}/tracks`,
        {
            headers:{
                Authorization: "larissa-lanes-carver"
            }
        })
        .then((res) => {
            this.setState({playlistMusic: res.data.result.tracks})
            console.log(this.state.playlistMusic)
        })
        .catch((err) => {
            console.log(err)
        })
    }


    removeTrackFromPlaylist = (id) => {
        var keyPlaylist = "27d5d9b7-9451-4628-971c-ecef5abc0fab"
        if (
            window.confirm(
              `Tem certeza que deseja excluir a música?`
            )
          ) 
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${keyPlaylist}/tracks/${id}`,
        {
            headers:{
                Authorization: "larissa-lanes-carver"
            }
        })
        .then((res) => {
            alert('musica deletada com sucesso')
            this.getPlaylistTracks()
        })
        .catch((err) => {
            alert("erro!")
        })
    }

    render(){
        const allTracks = this.state.playlistMusic.map((tracks) => (
            <DivList key={tracks.id} >
            <p>{tracks.name}</p>
            <p>{tracks.artist}</p>
            <p>{tracks.url}</p>

            <buttonDelete onClick={() => this.removeTrackFromPlaylist(tracks.id)}>
                Delete
            </buttonDelete>
            </DivList>
        ))
        return(
            <DivPrincipal>
                <divAdd>
                <divHeader>
                <img src={spotifyImg}/>
                 <h1>labefy</h1>

                <h3>Adicione uma música a sua playlist</h3>
        
                </divHeader>
                <DivInput>
                <input placeholder={'nome da música'} value={this.state.inputNameMusic} onChange={this.onChangeNameMusic}></input>
                <input placeholder={'artista'} value={this.state.inputArtist} onChange={this.onChangeArtist}></input>
                <input placeholder={'url'} value={this.state.inputUrl} onChange={this.onChangeUrl}></input>
                </DivInput>
                <DivBotao>
                <button onClick={this.addTrackToPlaylist}>Adicionar Música</button>
                <button onClick={this.props.goToRenderList}>Voltar a tela anterior</button>
                </DivBotao>
                <DivTotal>
                {allTracks}
                </DivTotal>
                </divAdd>

               
                
                
                <divImg>
                    <img src={img}/>

                </divImg>
                
            </DivPrincipal>
        )}
}

///styldes/////////////

const DivPrincipal = styled.div`
  display:grid;
  grid-template-columns: 2fr 1fr;

  divAdd{
      divHeader{
          display: flex;
          
          img{
          height: 30px;
       
          padding:10px;

        }
        h1{
          font-size: 20px;
          color: #141f40;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
         
        }        
        h3{
            display: flex;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #141f40;
            margin-left: 28%;
        }
      }


    }


  divImg{
     img{
         height: 100vh;
     }
  }

`
const DivInput = styled.div`
    display:flex;
    justify-content:center;
    gap: 20px;
  
    input{
        border: solid 2px #ffba0a;
        border-radius: 20px ;
        height: 3vh;
        width: 15vw;
        text-align: center;
    }

    input:hover{
            background-color: #ffba0a;
        }
    `
const DivBotao = styled.div`
    display:flex;
    justify-content:center;
    margin:20px;
    gap: 20px;

    button{
        
    color: #141f40;
    background-color:transparent;
    align-items: center;
    border: solid 2px #ffba0a;
    border-radius: 20px;
    width: 8vw;
    height: 3vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    cursor: pointer;
    
    }

    button:hover{
        background-color:#ffba0a;
          color: white;
          border: none;
          
    }
`
const DivList = styled.div`
 background-color: #221e6b;
  border:1px solid;
  border-radius: 10px;
  margin: 20px;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 30vw;
    justify-content: center;

    p{
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: mediums;
    }

    buttonDelete{
        border-radius: 20px;
      height: 3vh;
      width: 6vw;
      margin: 12px;
      background-color: #ffba0a;
      border: none;
      color:#141f40 ;
      text-align: center;
      
      

    }

    buttonDelete:hover{
        cursor: pointer;
        border: solid 2px #ffba0a;
        background-color:transparent;
        color: white;

    }

`

const DivTotal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`



