import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import PagFinal from './components/PagFinal';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`
const RenderizaDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    padding: 20px;
    gap: 30px;
  `
export default class App extends React.Component{
  state = {
    pagina: 1,
    }

    proximaPagina = () => {
      this.setState({
        pagina: this.state.pagina + 1
      })
      console.log('Mudou!')
    }

    renderizaPagina = () => {
      switch (this.state.pagina) {
        case 1:
          return <Form1 />;
        case 2:
          return <Form2 />;
        case 3:
          return <Form3 />;
        case 4:
          return <PagFinal />;
      }
    }

    alertCompleto = () => {
      alert ("não não não")
      }
    
  render(){
    return (
      <RenderizaDiv >
        <GlobalStyle/>
        {this.renderizaPagina()}
        {this.state.pagina <= 3 && 
        <button onClick={this.proximaPagina}>Próxima etapa</button>}
      </RenderizaDiv>
    )
  }
}
 
  

