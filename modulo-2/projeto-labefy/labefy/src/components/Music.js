import axios from "axios";
import React from "react";

export default class Music extends React.Component {
    state = {
        inputNameMusic: '',
        inputArtist: '',
        inputUrl: '',
        playlistMusic: [],
    }

    // selectPlaylist = (playlist) => {
    //     this.setState({ playlistId: playlist.id });
    
    //     axios
    //       .get(
    //         `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`,
    //         {
    //           headers: {
    //             Authorization: "kethreen-lanes-cruz"
    //           }
    //         }
    //       )
    //       .then((res) => {
    //         this.setState({ tracks: res.data.result.tracks });
    
    //         this.setState({ screen: "tracks" });
    //       })
    //       .catch((err) => {
    //         alert(err.response.data.message, "Tente novamente!");
    //       });
    //   };
  

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
            <div key={tracks.id} >
            <p>{tracks.name}</p>
            <p>{tracks.artist}</p>
            <p>{tracks.url}</p>

            <button onClick={() => this.removeTrackFromPlaylist(tracks.id)}>
                Delete
            </button>
            </div>
        ))
        return(
            <div>
                <h3>Adicionar Musicas</h3>
                <input placeholder={'nome da música'} value={this.state.inputNameMusic} onChange={this.onChangeNameMusic}></input>
                <input placeholder={'artista'} value={this.state.inputArtist} onChange={this.onChangeArtist}></input>
                <input placeholder={'url'} value={this.state.inputUrl} onChange={this.onChangeUrl}></input>
                <button onClick={this.addTrackToPlaylist}>Adicionar Música</button>
                <button onClick={this.props.goToRenderList}>Voltar a tela anterior</button>
                {allTracks}
            </div>
        )}
}