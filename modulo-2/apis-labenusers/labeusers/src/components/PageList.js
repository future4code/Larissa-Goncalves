import axios from "axios";
import React from "react";

export default class PageList extends React.Component{

    state = {
        dataUsers: [], 
    }

     componentDidMount(){
    this.getAllUsers()
    }



    getAllUsers = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
            headers: {
                Authorization: "larissa-lanes-carver"
            }
        })
        .then((res) => {
            this.setState({dataUsers: res.data})
        })
        .catch((err) => {
            console.log(err)

        })
    } 

    deleteUsers = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
            headers: {
                Authorization: "larissa-lanes-carver"
            }
        })
        .then((res) => {
            alert('usuario deletado com sucesso')
            this.getAllUsers()

        })
        .catch((err) => {
            alert('erro! tente novamente')

        })

    }


    render(){
        const listUsers = this.state.dataUsers.map((user) => {
            return <div 
            key={user.id}>
            {user.name}
            <button onClick={() => this.deleteUsers(user.id)}> x </button>
            </div>
        })
        return(
            <div>
            <button onClick={this.props.goToRegister}>ir para cadastro</button>
            <h3>Página de listas</h3>
            {listUsers}
            </div>
        )
    }
}