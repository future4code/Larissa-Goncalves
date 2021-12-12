import { useHistory } from "react-router";
import { DivLoginPage } from "./LoginPage-Styled";
import { useState } from "react";
import axios from 'axios';
import { Auth, URL_BASE } from "../../../Constants/Url";

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const goToHome = () => {
        history.push('/')
    }
    const goToAdmHome = () => {
        history.replace('/admin/trips/list')
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)

    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
        
    }

    const Login = () => {
        console.log(email, password)
        const body = {
            email: email,
            password: password,

        }
        
        // axios.post`${URL_BASE}/login, body`
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmbjQ3bVN4c0c5S1B0QUxhQnh4IiwiZW1haWwiOiJBZG1pbkxhcmlzc2FAZ21haWwuY29tIiwiaWF0IjoxNjM4OTg3MTI1fQ.DkhdmG8Af-mljIneavlJXT2yFckEdg1M7k2fgmzSLAQ/login", body)

        .then((res) => {
            console.log(res.data)
            console.log('Senha correta')

        })
        .catch((err) => {
            console.log('Senha incorreta')
            console.log(err.response.data)


        })
        
    }

    return(
        <DivLoginPage>
             <button onClick={goToHome}>
                Voltar home

            </button> 
           
            llogin page
           <div>
              <input placeholder={'email'} type={'email'} value={email} onChange={onChangeEmail}></input>
                <input placeholder={'senha'} type={'password'} value={password} onChange={onChangePassword}></input>
                <button onClick={Login}>
                entrar
            </button>
           </div>
        </DivLoginPage>
    )
}

export default LoginPage;