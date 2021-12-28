import { useHistory } from "react-router";
import { useForm } from "../../../hooks/useForm";
import useRequestData from "../../../hooks/useRequestData";
import { urlAllTrips } from "../../../Constants/Url";
import axios from "axios";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import {Fab, TextField} from "@material-ui/core"
import { DivApplicationForm, DivBackground } from "./ApplicationFormPage-Styled";

const initialForm = {
  name: "",
  age: "",
  profession: "",
  applicationText: "",
  country: "",
  tripSelect: ""
};

const ApplicationFormPage = () => {
  const history = useHistory();
  const listTrips = useRequestData(urlAllTrips, history, []);
  const [form, onChange] = useForm(initialForm);

  const applicationToTrip = (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      age: (form.age),
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    };
    axios
      .post(`${urlAllTrips}${form.tripSelect}/apply`, body)
      .then((res) => {
        alert("Inscrição realizada!");
      })
      .catch((err) => {
      });
  };

  const getTrips =
    listTrips.trips &&
    listTrips.trips.map((iten) => {
      return (
        <option key={iten.id} value={iten.id}>
          {iten.name} - {iten.planet}
        </option>
      );
    });

  const goToList = () => {
    history.push("/trips/list");
  };

  return (
    <DivBackground>
      <div>
        <Fab color="primary" aria-label="add" onClick={goToList}>
          <KeyboardBackspaceRoundedIcon/>
        </Fab>
        </div>
        <DivApplicationForm>
          <form onSubmit={applicationToTrip}>
          <h1>FAÇA A SUA INSCRIÇÃO</h1>
            <div>
            <TextField
              select
              label="Escolha o destino"
              required
              name="tripSelect"
              value={form.tripSelect}
              onChange={onChange}
              helperText="Escolha um lugar de destino"
            >
              <option value=""></option>
              {getTrips}
            </TextField>
            </div>
            <div>
            <TextField
            required
            placeholder="Nome"
            name="name"
            value={form.name}
            onChange={onChange}
            label="Nome" 
                />
            </div>
            <div>
            <TextField
            required
              placeholder="Idade"
              name="age"
              type="number"
              value={form.age}
              min="18"
              onChange={onChange}
              label="Idade"
            />
            </div>
            <div>
            <TextField
            required
            placeholder="Profissão"
            name="profession"
            value={form.profession}
            required
            pattern={"^.{6,}$"}
            title={"Minimum 10 characters"}
            onChange={onChange}
              label="Profissão"
            />
            </div>
            <div>
            <TextField
             required
             placeholder="texto de inscrição"
             name="applicationText"
             value={form.applicationText}
             pattern={"^.{30,}$"}
             title={"Minimum 30 characters"}
             onChange={onChange}
              label="Texto"
            />
            </div>
            <div>
               <TextField
               select
               label="Selecione o seu país de origem"
              required
              name="country"
              value={form.country}
              onChange={onChange}
            >
              <option value="">Selecione seu País</option>
              <option value="Estados-unidos">Estados-unidos-USA</option>
              <option value="Brasil">Brasil-BR</option>
              <option value="Afeganistão">Afeganistão-AF</option>
              <option value="Alemanha">Alemanha-DE</option>
              <option value="Argentina">Argentina-AR</option>
              <option value="Chile">Chile-CL</option>
            </TextField>
           </div>
           <div>
           <Fab variant="extended" color="secondary" aria-label="add" type="submit">
                   Enviar
                </Fab>
           </div>
          </form>
        </DivApplicationForm>
    </DivBackground>
  );
};
export default ApplicationFormPage;
