
import React from "react";
import { useHistory } from "react-router-dom";
import useRequestData from "../../../hooks/useRequestData";
import { urlAllTrips } from "../../../Constants/Url";


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
    <div>
      <button onClick={goToFormPage}>increverse</button>
      <div />
      <button onClick={goToHomePage}>home</button>
      <div>
        <h1>PRÓXIMAS VIAGENS</h1>
        <p>{getTrips}</p>
      </div>
    </div>
  );
};
export default ListTripsPage;
