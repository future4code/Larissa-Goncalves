import axios from 'axios';
import React from 'react';
// import Styled from 'styled-components'

export default class App extends React.Component{


  state = {
    dataUsers: [],
    inputValueName: "",
    inputValueEmail:"",

  }

  componentDidMount(){
    this.createUser();
  }

  onChangeEnviarDados = (event) => {
    this.setState({ inputValueName: event.target.value });
  };

  createUser = () => {
    const body = {
      'name': this.state.inputValueName,
      'email':this.state.inputValueEmail,
    };
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
    {
      headers:{
        Authorization: "larissa-lanes-carver"
      }
    })
    .then((res) => {
      this.setState({ inputValueName: '' });
      this.setState({ inputValueEmail: "" });
      })
    .catch((err) => {
      console.log('deu errado!')
    })
  };
    
  
  render(){
    
    return(
      <div >
        <div>
        <p>header</p>
        </div>
        <div>
          <h3>TELA DE CADASTRO</h3>
          <input placeholder={"nome"}/>
          <input placeholder={"email"}/>
          <button onClick={this.createUser} value={this.state.inputValueName} onChange={this.onChangeEnviarDados}>CADASTRAR DADOS</button>
        
          onChange={this.handleInputChange}
        </div>


       

      </div>
    )
  }
}

  



