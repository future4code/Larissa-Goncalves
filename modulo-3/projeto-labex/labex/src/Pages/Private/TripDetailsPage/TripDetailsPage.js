import axios from "axios";
import  { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../../../hooks/useProtected";
import { urlAllTrips, urlTripDetails } from "../../../Constants/Url";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Details, DivButton, CandidateAprodeved, CandidateRejected, DivCards, DivTripDetails } from "./TripDetailsPage-Styled";
import {Fab} from "@material-ui/core"
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import DoNotDisturbRoundedIcon from '@mui/icons-material/DoNotDisturbRounded';

const TripDetailsPage = () => {
  useProtectedPage();
  const [tripDetail, setTripDetail] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [approved, setApproved] = useState([]);
  const params = useParams();
  const history = useHistory();

  const goToLogout = (history) => {
    window.localStorage.removeItem("token");
    history.push("/");
  };

  const goToAdminHomePage = () => {
    history.push("/admin/trips/list");
  };

  useEffect(() => {
    getTripDetailChosen();
  }, []);

  const getTripDetailChosen = (id) => {
    const token = window.localStorage.getItem("token");
    axios
      .get(`${urlTripDetails}${params.id}`, {
        headers: {
          auth: token
        }
      })
      .then((res) => {
        setTripDetail(res.data.trip);
        setCandidates(res.data.trip.candidates);
        setApproved(res.data.trip.approved);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const aproveCandidate = (candidateId, name, aprov) => {
    const token = window.localStorage.getItem("token");
    const body = { approve: aprov };
    if (body.approve === false) {
      alert("CANDIDATO REPROVADO!",)
      .then((err) => {
        if (err) {
          axios
            .put(
              `${urlAllTrips}${params.id}/candidates/${candidateId}/decide`,
              body,
              {
                headers: {
                  auth: token
                }
              }
            )
            .then((res) => {
              alert.window.confirm(
                "A inscrição foi Reprovada!"
              );
              getTripDetailChosen();
            })
            .catch((error) => {
              alert("Houve um erro,tente novamente mais tarde");
            });
        } else {
          alert("OK, Nada foi deletado!");
        }
      });
    } else if (body.approve === true) {
      axios
        .put(
          `${urlAllTrips}${params.id}/candidates/${candidateId}/decide`,
          body,
          {
            headers: {
              auth: token
            }
          }
        )
        .then((res) => {
          alert(
            "CANDIDATO APROVADO!",
          );
          getTripDetailChosen();
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const tripDetailsPage = (
    <div>
      <h3>{tripDetail.name}</h3>
      <p>
        <strong>Saída:</strong>
        {tripDetail.date}
      </p>
      <p>
        <strong>Descrição:</strong>
        {tripDetail.description}
      </p>
      <p>
        <strong>Destino:</strong>
        {tripDetail.planet}
      </p>
      <p>
        <strong>Duração:</strong>
        {tripDetail.durationInDays} dias
      </p>
    </div>
  );

  const getCandidates = candidates.map((iten) => (
    <div key={iten.id}>
      <h4>
        <strong>Nome: </strong>
        {iten.name}, {iten.age} anos
      </h4>
      <p>
        <strong>Profissão: </strong> {iten.profession}
      </p>
      <p>
        <strong>Sobre: </strong> {iten.applicationText}
      </p>
      <p>
        <strong>País: </strong> {iten.country}{" "}
      </p>
        <Fab variant="extended" color="secondary" aria-label="add" onClick={() => aproveCandidate(iten.id, iten.name, true)}>
         <ThumbUpAltRoundedIcon sx={{ mr: 1 }} />
         Aprovar Candidato
            </Fab>
        <Fab variant="extended" color="primary" aria-label="add" onClick={() => aproveCandidate(iten.id, iten.name, false)}>
        <DoNotDisturbRoundedIcon sx={{ mr: 1 }} />
        Reprovar Candidato
        </Fab>
    </div>
  ));

  const getApproved = approved.map((iten) => (
    <li key={iten.id}>{iten.name}</li>
  ));

  return (
    <DivTripDetails>
      <div>
      <DivButton>
      <Fab color="primary" aria-label="add" onClick={goToAdminHomePage}>
          <KeyboardBackspaceRoundedIcon/>
        </Fab>
    <Fab variant="extended" color="primary" aria-label="add" onClick={goToLogout}>
      <LoginRoundedIcon sx={{ mr: 1 }} />
      Logout
          </Fab>
      </DivButton>
      </div>
      <DivCards>
        <Details>
          <h2>DETALHES DA VIAGEM</h2>
          {tripDetailsPage}
        </Details>
        <CandidateAprodeved>
          <h2>CANDITADOS APROVADOS</h2>
          <p> {getApproved} </p>
        </CandidateAprodeved>
        <CandidateRejected>
          <h2>CANDIDATOS PENDENTES</h2>
          <div> {getCandidates} </div>
        </CandidateRejected>
      </DivCards>
    </DivTripDetails>
  );
};

export default TripDetailsPage;
