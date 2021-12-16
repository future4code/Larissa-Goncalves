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
        alert('Houve um erro!', err.response.data.message)
       
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

    export const createPost = (body, clear) => {
      axios.post(`${url_base}/posts`, body, {
          headers: {
              Authorization: localStorage.getItem("token")
          }
      })
      .then((res) => {
        alert("Post Criado com sucesso")
        console.log(res.data)
        clear()
        
      })
      .catch((err) => {
        console.log(err)

      })
    }

    export const createCommit = (body, params, clear) => {
      axios.post(`${url_base}/posts/${params.id}/comments`, body,{
          headers:{
              Authorization: localStorage.getItem("token")
          }
      })
      .then((res) => {
          console.log(res)
          alert(res.data)
          clear()
          

      }).catch((err) => {
          console.log(err)

      })
  }