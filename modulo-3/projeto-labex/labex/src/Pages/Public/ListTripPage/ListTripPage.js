import { DivListTripPage } from "./ListTripPage-Styled";
import Header from "../../../Components/Header./Header";
import { useHistory } from "react-router";

const ListTripPage = () => {

    const hitory = useHistory()

    const goToHome = () => {
        hitory.goBack('/')
    }

    const goToApplication = () => {
        hitory.push('/trips/application')
    }
    return(
        <DivListTripPage>
            {/* <Header/> */}
            <div>
                texttoooo e input
            </div> 
            <div>
               
                <button onClick={goToHome}>voltar</button>
                <button onClick={goToApplication}>Inscrever-se para uma viagem</button>

            </div>
            
           

        </DivListTripPage>
    )
}

export default ListTripPage;