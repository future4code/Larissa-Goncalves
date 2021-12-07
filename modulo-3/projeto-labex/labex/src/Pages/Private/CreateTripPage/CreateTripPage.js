import { useHistory } from "react-router";
import { DivCreateTrip } from "./CreateTripPage-Styled";

const CreateTripPage = () => {
    const history = useHistory()

    const goToList = () => {
        history.goBack('/admin/trips/list')
    }
    return(
        <DivCreateTrip>
            create a tripppppppppppppppppppppppppppppp

            <button onClick={goToList}>voltar para a lista</button>

        </DivCreateTrip>
    )
}

export default CreateTripPage;