import{ useState } from "react";
import { useForm } from "../../../hooks/useForm";
import axios from "axios";
import { urlAllTrips } from "../../../Constants/Url";
import { useHistory } from "react-router-dom";
import {Fab, TextField} from "@material-ui/core"
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { DivCreateTrip, DivForm } from "./CreateTripPage-Styled";

const initialForm = {
  name: "",
  planet: "",
  date: "",
  description: "",
  durationInDays: "",
  image: ""
};

const currencies = [
    {
      value: '',
      label: '',
    },
    {
      value: 'Marte',
      label: 'Marte',
    },
    {
      value: 'Mercúrio',
      label: 'Mercúrio',
    },
    {
      value: 'Venus',
      label: 'Venus',
    },
    {
      value: 'Terra',
      label: 'Terra',
    },
    {
        value: 'Jupiter',
        label: 'Jupiter',
    },
    {
        value: 'Saturno',
        label: 'Saturno',
    },
    {
        value: 'Urano',
        label: 'Urano',
    },
    {
        value: 'Netuno',
        label: 'Netuno',
    },
    {
        value: 'Plutão',
        label: 'Plutão',
    },
  ];
  

const CreateTripPage = (props) => {
  const [form, onChange] = useForm(initialForm);
  const history = useHistory();
  const [currency, setCurrency] = useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const goToAdminHomePage = () => {
    history.goBack("/admin/trips/list");
  };

  const createTrip = (event) => {
    const token = window.localStorage.getItem("token");

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
      image: form.image
    };
    event.preventDefault();
    axios
      .post(`${urlAllTrips}`, body, {
        headers: {
          auth: token
        }
      })
      .then((response) => {
        alert("A Viagem foi criada com sucesso!");
      })
      .catch((error) => {
        alert("Dados incompletos, retorne para o formulário!");
      });
  };
  return (
    <DivCreateTrip>
      <Fab color="primary" aria-label="add" onClick={goToAdminHomePage}>
          <KeyboardBackspaceRoundedIcon/>
        </Fab>
        <h1>CRIE UMA VIAGEM</h1>
        <DivForm>
                <form onSubmit={createTrip}>
        <div>
            <TextField
                id="outlined-textarea"
                label="Nome da viagem"
                placeholder="Nome da viagem"
                multiline
                name="name"
                onChange={onChange}
                value={form.name}
                title={"Minimum 5 characters"}
                />
            </div>
            <div>
                    <TextField
                id="outlined-select-currency-native"
                select
                label="Destino"
                value={currency}
                onChange={handleChange}
                name="planet"
                value={form.planet}
                    onChange={onChange}
                SelectProps={{
                    native: true,
                }}
                helperText="Escolha um lugar de destino"
                >
                {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
                ))}
                </TextField>
                </div>
        <div>
                <TextField
                placeholder="Data"
                name="date"
                onChange={onChange}
                value={form.date}
                type="date"
                id="outlined-textarea"
                />
        </div>
         <div>
                <TextField
                id="outlined-textarea"
                label="Descrição"
                multiline
                placeholder="Descrição"
                name="description"
                onChange={onChange}
                value={form.description}
                pattern={"^.{10,}$"}
                title={"Minimum 10 characters"}
                />
                </div> 
        <div>
                <TextField
                id="outlined-textarea"
                label="Duração em dias"
                placeholder="Duração em Dias"
                name="durationInDays"
                onChange={onChange}
                value={form.durationInDays}
                type="number"
                min="50"
                />
                </div>
            <div>
                <Fab variant="extended" color="secondary" aria-label="add" type="submit">
                    Criar nova viagem
                </Fab>
                </div>
            </form>
        </DivForm>
    </DivCreateTrip>
  );
};

export default CreateTripPage;
