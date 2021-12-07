import axios from 'axios';
import React from 'react';

export default class PageRegister extends React.Component{
    state = {
       
    inputValueName: '',
    inputValueEmail:'',
    }


///inputs controlados/////////////
  onChangeDataName = (event) => {
    this.setState({ inputValueName: event.target.value});
  };

  onChangeDataEmail = (event) => {
    this.setState({ inputValueEmail: event.target.value});
  };

///////axios post///////////////

  createUser = () => {
    const body = {
      name: this.state.inputValueName,
      email:this.state.inputValueEmail,
    };
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
    {
      headers:{
        Authorization: "larissa-lanes-carver"
      }
    })

    .then((res) => {
      alert('Usuário cadastrado com sucesso!')
      this.setState({inputValueName: '', inputValueEmail: ''})
      })

    .catch((err) => {
      alert(err.response.data.message)
    })
  };

    render(){
        return(
            <div>
                <button onClick={this.props.goToList}>ir para lista</button>
                <h3>Tela de cadastro</h3>
                <input placeholder={"nome"} value={this.state.inputValueName} onChange={this.onChangeDataName}/>
                <input placeholder={"email"} value={this.state.inputValueEmail} onChange={this.onChangeDataEmail}/>
                <button onClick={this.createUser}>CADASTRAR DADOS</button> 
            </div>
        ) 
    }
}
