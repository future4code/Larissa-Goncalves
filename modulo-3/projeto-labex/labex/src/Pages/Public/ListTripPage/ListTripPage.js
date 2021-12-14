import { useHistory } from "react-router-dom";
import useRequestData from "../../../hooks/useRequestData";
import { urlAllTrips } from "../../../Constants/Url";
import {Fab} from "@material-ui/core"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LuggageRoundedIcon from '@mui/icons-material/LuggageRounded';
import { DivListTripPage} from "./ListTripPage-Styled";

const ListTripsPage = (props) => {
  const history = useHistory();
  const listTrips = useRequestData(urlAllTrips, history, []);

  const goToHomePage = () => {
    history.push("/");
  };

  const goToFormPage = () => {
    history.push("/trips/application");
  };

  const getTrips =
    listTrips.trips &&
    listTrips.trips.map((iten) => {
      return (
        <div key={iten.id}>
          <h3>{iten.name}</h3>
          <p>
            <strong>Saída:</strong> {iten.date}
          </p>
          <p>
            <strong>Descrição:</strong> {iten.description}
          </p>
          <p>
            <strong>Planeta:</strong> {iten.planet}
          </p>
          <p>
            <strong>Duração:</strong> {iten.durationInDays} dias
          </p>
        </div>
      );
    });

  return (
    <DivListTripPage>
      <div>
      <Fab color="primary" aria-label="add" onClick={goToHomePage}>
          <HomeRoundedIcon/>
        </Fab>
        <Fab variant="extended" color="secondary" onClick={goToFormPage}>
          <LuggageRoundedIcon/>
        Inscrever-se em uma viagem
      </Fab>
        <h1>PRÓXIMAS VIAGENS</h1>
        <p>{getTrips}</p>
      </div>
    </DivListTripPage>
  );
};
export default ListTripsPage;
