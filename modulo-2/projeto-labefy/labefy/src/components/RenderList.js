import axios from "axios";
import React from "react";
import styled from "styled-components";
import spotifyImg from './img/spoti-yellow.png'

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
        <List key={playlists.id}>
          <Name> {playlists.name} </Name>  
          <ButtonAbrir onClick={this.props.goToMusic} > Abrir</ButtonAbrir>
          <ButtonDelete onClick={() => this.deletePlaylist(playlists.id)}>
            Delete
          </ButtonDelete>
        </List>
      ));
      return(
        <DivGobal> 
           <divImgSpoti>
            <img src={spotifyImg}/>
            <h1>labefy</h1>
            </divImgSpoti>
          <DivTitle>
              <h3>Suas playlists</h3>
              <button onClick={this.props.goToInput}>Criar nova playlist</button>  
            
          </DivTitle>
         
          <DivList>
              {allPlaylist}

          </DivList>
          
        </DivGobal>
      )
    }
  }

  ///////styled////////////////
  

  const DivGobal = styled.div`
    display:flex;
    flex-direction: column;
    /* align-items: center; */
    /* background-color: #141f40; */
    
    
    divImgSpoti{
          display: flex;
          flex-direction: row;
          gap: 20px;
   
          img{
          height: 40px;
          margin-top: 20px;
        }
        h1{
          font-size: 30px;
          margin-top: 20px;
          color: #141f40;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }  
      }      
  `

  const DivTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h3{
    font-size: 1.5em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #141f40;
  }

  button{
    display: flex;
    color: #141f40;
    background-color:transparent;
    align-items: center;
    border: solid 2px #ffba0a;
    border-radius: 20px;
    width: 8vw;
    height: 3vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    cursor: pointer;
    justify-content: space-evenly;
    
   
  }

  button:hover{
          background-color:#ffba0a;
          color: #141f40;
          border: none;
        }
  `
  const Name = styled.p`
    margin-right:40%;`

    

  const List = styled.div`
  background-color: #221e6b;
  border:1px solid;
  border-radius: 10px;
  margin: 20px;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  width: 30vw;
  /* justify-content: space-around; */
  justify-content: end;

  Button:hover{
    cursor: pointer;
    background-color: white;
    border: none;
    color: #221e6b;
  }
  `

  const DivList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3%;
  gap: 40%;
  font-size:1em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  align-items: center;


  `

  const ButtonAbrir= styled.button`
      border-radius: 20px;
      height: 4vh;
      width: 6vw;
      margin: 12px;
      background-color: #ffba0a;
      border: none;
      color:#141f40 ;

  `

       
      
 
  const ButtonDelete = styled.button`
     border-radius: 20px;
      height: 4vh;
      width: 6vw;
      border: solid 2px #ffba0a;
      background: transparent;
      color: white;


`
