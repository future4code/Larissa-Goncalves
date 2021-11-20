import axios from "axios";
import React from "react";


export default class RenderList extends React.Component{
  state = {
    listDePlaylists:[],
  }

  componentDidMount(){
    this.getAllPlaylists()
  }

  getAllPlaylists = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", 
    {
      headers: {
        Authorization: "larissa-lanes-carver"
      }
    })
    .then((res) => {
      this.setState({listDePlaylists: res.data.result.list})
      console.log(this.state.listDePlaylists)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  deletePlaylist = (id) => {
    if (
      window.confirm(
        `Tem certeza que deseja excluir a playlist?`
      )
    )
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
    {
        headers: {
            Authorization: "larissa-lanes-carver"
        }
    })
    .then((res) => {
        alert('playlist deletada ')
        this.getAllPlaylists()
    })
    .catch((err) => {
        alert('erro!')
    })
}
    render(){
      const allPlaylist = this.state.listDePlaylists.map((playlists) => (
        <div key={playlists.id}>
          <p> {playlists.name} </p>  
          <button onClick={this.props.goToMusic} > Abrir</button>
          <button onClick={() => this.deletePlaylist(playlists.id)}>
            Delete
          </button>
        </div>
      ));
      return(
        <div> 
          <h3>lista de playlists</h3>
          <button onClick={this.props.goToInput}>Nova playlist</button>  
          {allPlaylist}
        </div>
      )
    }
  }
  