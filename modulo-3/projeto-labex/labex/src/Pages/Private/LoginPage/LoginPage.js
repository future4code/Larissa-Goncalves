import { useHistory } from "react-router";
import { DivLoginPage } from "./LoginPage-Styled";

const LoginPage = () => {
    const history = useHistory()

    const goToHome = () => {
        history.push('/')
    }
    const goToAdmHome = () => {
        history.replace('/admin/trips/list')
    }

    return(
        <DivLoginPage>
             <button onClick={goToHome}>
                Voltar home

            </button> 
            <button onClick={goToAdmHome}>
                entrar
            </button>
            llogin page
        </DivLoginPage>
    )
}

export default LoginPage;