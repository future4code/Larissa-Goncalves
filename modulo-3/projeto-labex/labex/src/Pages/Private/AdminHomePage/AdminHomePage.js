import { useHistory } from "react-router";
import { DivAdminHome } from "./AdminHomePage-Styled";


const AdminHomePage = () => {

    const history = useHistory()

    const goToHome = () => {
        history.push('/')
    }

    const goToCreateTrip = () => {
        history.push('/admin/trips/create')
    }

    const goToDetails = () => {
        history.push('/admin/trips/:id')
    }
   
    const goToLogin = () => {
        history.push('/login')
    }
    
    return(
        <DivAdminHome>
            home do admin
            <button onClick={goToHome}>home</button>  <button onClick={goToCreateTrip}>criar viagem </button>  
            <button onClick={goToDetails} >detalhes</button>  <button onClick={goToLogin} >logout</button>
           
         

        </DivAdminHome>
    )
}

export default AdminHomePage;