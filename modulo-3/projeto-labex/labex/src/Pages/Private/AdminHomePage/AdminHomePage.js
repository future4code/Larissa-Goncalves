import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../../../hooks/useProtected";
import { urlAllTrips } from "../../../Constants/Url";
import useRequestData from "../../../hooks/useRequestData";
import axios from "axios";
import {Fab} from "@material-ui/core"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { DivAdminHome, DivButton, DivCard, DivInfos, DivButtons} from "./AdminHomePage-Styled";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const AdminHomePage = () => {
  useProtectedPage();
  const history = useHistory();
  const [reload, setReload] = useState(false);
  const listTrips = useRequestData(urlAllTrips, reload, []);


  const goToTripsDetailsPage = (id) => {
    history.push(`/admin/trips/${id}`);
  };

  const goToHomePage = () => {
    history.push("/");
  };

  const goToLogout = () => {
    window.localStorage.removeItem("token");
    history.push("/");
  };

  const goToCreateTripPage = () => {
    history.push("/admin/trips/create ");
  };
  const deleteTrip = (trip, name) => {
    const token = window.localStorage.getItem("token");
    axios
      .delete(`${urlAllTrips}${trip}`, {
        headers: {
          auth: token
        }
      })
      .then((res) => {
        alert("a viagem foi deletada");
        setReload();
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  const getTrips =
    listTrips.trips &&
    listTrips.trips.map((iten) => {
      return (
        <DivInfos key={iten.id}>
            <div>
            <p>
              <strong>{iten.name}</strong>
            </p>
            <p>
              <strong>Saída:</strong> {iten.date}
            </p>
            <p>
              <strong>Destino:</strong> {iten.planet}
            </p>
            </div>
            <DivButtons><Fab color="secondary" aria-label="add" onClick={() => goToTripsDetailsPage(iten.id)}>
               <AddRoundedIcon/>
            </Fab>
            <Fab color="primary" aria-label="add" onClick={() => deleteTrip(iten.id, iten.name)}>
              <DeleteRoundedIcon/>
            </Fab></DivButtons>
              
         
        </DivInfos>
      );
    });

  return (
    <DivAdminHome>
      <DivButton>
      <Fab color="primary" aria-label="add" onClick={goToHomePage}>
          <HomeRoundedIcon/>
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add" onClick={goToCreateTripPage}>
        <AddCircleRoundedIcon sx={{ mr: 1 }} />
     Criar Viagem
      </Fab>
    <Fab variant="extended" color="primary" aria-label="add" onClick={goToLogout}>
      <LoginRoundedIcon sx={{ mr: 1 }} />
      Logout
          </Fab>
      </DivButton>
      <DivCard>
        <div>
          <h1>EXPLORE AS PRÓXIMAS VIAGENS</h1>
          <div>{getTrips}</div>
        </div>
      </DivCard>
    </DivAdminHome>
  );
};
export default AdminHomePage;
