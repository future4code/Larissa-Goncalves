import axios from "axios";
import React from "react";

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
        <div>
          <h3>Labefy</h3>
          <input placeholder={'Nome da playlist'} value={this.state.inputPlaylistName} onChange={this.onChangeName}></input>
          <button onClick={this.createPlaylist}>Criar playlist</button>
          <button onClick={this.props.goToRenderList}>ver playlists</button>
        </div>
      )
    }
  }
  