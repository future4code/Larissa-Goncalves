import { useHistory } from "react-router";
import { DivApplicationForm, DivBackground } from "./ApplicationFormPage-Styled";

const ApplicationFormPage = () => {

    const history = useHistory()

    const goToList = () => {
        history.goBack('/trips/list')
    }

    return(
        <DivApplicationForm>
            <DivBackground>
                
                <div>
                    <input></input>
                    <button>ENVIAR</button>
                    <button  onClick={goToList}>Voltar a lista </button>
                    applicationnnn


            </div>
                

            </DivBackground>
            

        </DivApplicationForm>
    )
}
export default ApplicationFormPage;