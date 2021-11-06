import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const ConteinerInput = styled.div`
    display:flex ;
    gap: 10px;
    padding: 10px;
`
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
class App extends React.Component {
    state = {
      
  
      posts: [
        {
          nomeUsuario: "paulinha",
          fotoUsuario: "https://picsum.photos/50/50",
          fotoPost: "https://picsum.photos/200/150"
        },
        {
          nomeUsuario: "Larissa",
          fotoUsuario: "https://picsum.photos/40/50",
          fotoPost: "https://picsum.photos/200/159"
        },
        {
          nomeUsuario: "Anna",
          fotoUsuario: "https://picsum.photos/80/50",
          fotoPost: "https://picsum.photos/200/149"
        },
      ],
      InputNome: "",
      InputPerfil: "",
      InputPost: "",
    };

    render() {
      const listaDePosts = this.state.posts.map((pessoaDoPost) => {
        return(
          <Post
            nomeUsuario={pessoaDoPost.nomeUsuario}
            fotoUsuario={pessoaDoPost.fotoUsuario}
            fotoPost={pessoaDoPost.fotoPost}
          />
        );

      });

    //   onChangeInputNome = (event) => {
    //     this.setState({ inputNome: event.target.value});
    //   };
  
    //   onChangeInputPerfil = (event) =>  {
    //     this.setState({inputPerfil: event.targe.value});
    //   };
  
    //   onChangeInputPost = (event) => {
    //     this.setState({inputPost: event.target.value});
    //   };

    // novoPost = () => {
    //   const novaPessoa = {
    //     nomeUsuario: this.state.inputNome,
    //     fotoUsuario: this.state.inputPerfil,
    //     fotoPost: this.state.inputPost
    //   };
     
    //   const copiaUsuario = [...this.state.usuario, novoUsuario];
    //   this.setState({usuario: copiaUsuario});
    //      this.setState({inputNome: "", inputPerfil: "", inputPost: ""});
    //  };

    return (
      <MainContainer>
        <ConteinerInput>
        <input
        value={this.state.inputNome}
        onChange={this.onChangeInputNome}
        placeholder={"Nome"}
        />
         <input
        value={this.state.InputPerfil}
        onChange={this.onChangeInputPerfil}
        placeholder={"Link da sua foto"}
        />
         <input
        value={this.state.InputPost}
        onChange={this.onChangeInputPost}
        placeholder={"Link do seu post"}
        />
        <button onClick={this.novaPessoa}>Adicionar</button>
        </ConteinerInput>
         {listaDePosts}
         
      </MainContainer>
    );
  }
}

export default App;


