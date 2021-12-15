import axios from "axios";
import {url_base} from "../constants/urls/URL";
import { goToFeed } from "../rotes/Coordinator";

   export const login = (body, clear, history) => {
      axios.post(`${url_base}/users/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        alert("Você está logado, seja bem vindo")
        clear()
        goToFeed(history)
      
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.message)
        alert('Senha ou email incorreto, tente novamente')
       
      })
    }

    export const signUp = (body, clear, history) => {
      axios.post(`${url_base}/users/signup`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        alert("Você foi cadastrado com sucesso!")
        clear()
        goToFeed(history)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.message)
        alert('algo deu errado, tente novamente')
      })
    }