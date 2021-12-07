import { useHistory } from "react-router";
import { DivTripDetails } from "./TripDetailsPage-Styled";

const TripDetailsPage = () => {
    const history = useHistory()

    const goToList = () => {
        history.goBack('')
    }

    const goToHome = ()  => {
        history.push('/')
    }
    return(
        <DivTripDetails>
                page detalhesssssssssssssssssssssssssssssssssssss

            <button onClick={goToList}>voltar para a lista</button>
            <button onClick={goToHome}>home</button>
        </DivTripDetails>
    )
}

export default TripDetailsPage;