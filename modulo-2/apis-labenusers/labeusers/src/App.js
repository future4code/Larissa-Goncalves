import React from 'react';
import PageRegister from './components/PageRegister';
import PageList from './components/PageList';
// import Styled from 'styled-components'

export default class App extends React.Component{
  state = {
    page: "cadastro",
    
  }

  /////Mudar de tela///////////////////////////////

  selectPage = () => {
    switch(this.state.page){
      case "cadastro":
       return <PageRegister goToList={this.goToList}/>
      case "lista":
        return <PageList goToRegister={this.goToRegister}/>
      default:
       return <div>erro!</div>
    }
  }

  goToRegister = () => {
    this.setState({page: "cadastro"})
  };

  goToList = () => {
    this.setState({page: "lista"})
  };

  /////Fim de mudar a tela/////////////////////

 

  render(){
    
    return(
      <div >
        {this.selectPage()}
      </div>
    )
  }
}

  



