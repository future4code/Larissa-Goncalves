import React from "react";
import InputPlaylist from './components/InputPlaylist';
import Music from "./components/Music";
import RenderList from './components/RenderList';








export default class App extends React.Component{
  state = {
    page: "cadastroMusica",
    // id: null,
  }

  selectPage = () => {
    switch(this.state.page){
      case "cadastroMusica":
        return <InputPlaylist goToRenderList={this.goToRenderList} />
      case "renderList":
        return <RenderList goToInput={this.goToInput} goToMusic={this.goToMusic}/>
      case "music":
        return <Music goToRenderList={this.goToRenderList} />
      default:
        return <div>"Desculpe,página não encontrada!"</div>
    }
  };

  goToInput = () => {
    this.setState({page: "cadastroMusica"})
  };

  goToRenderList = () => {
    this.setState({page: "renderList"})
  };

  goToMusic = () => {
    this.setState({page: "music"})
    // this.setState({id: id})
  };

  render(){
    return(
      <div>
        
        {this.selectPage()}
      </div>
    )
  }
}
