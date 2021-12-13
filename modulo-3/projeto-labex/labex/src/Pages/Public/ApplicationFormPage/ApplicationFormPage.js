import { useHistory } from "react-router";
import { useForm } from "../../../hooks/useForm";
import useRequestData from "../../../hooks/useRequestData";
import { urlAllTrips } from "../../../Constants/Url";
import axios from "axios";

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
      age: Number(form.age),
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    };
    axios
      .post(`${urlAllTrips}${form.tripSelect}/apply`, body)
      .then((res) => {
        console.log(res.data);
        alert("Inscrição realizada!", "Agora é só aguardar!", "success");
        // goToList(history);
      })
      .catch((err) => {
        console.log(err.data.res);
        // swal("Oops", "Dados incompletos, retorne para o formulário!", "error");
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
  // const getCountry = countryToWord.map((country) => {
  //   return (
  //     <option key={country.nome} value={country.nome}>
  //       {country.nome} - {country.sigla3}
  //     </option>
  //   );
  // });

  const goToList = () => {
    history.push("/trips/list");
  };

  return (
    <div>
      <div>
        <button onClick={goToList}>Voltar a lista </button>
        Aaqui voce se inscreve para uma viagem
        <div>
          {/* <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input> */}
          <form onSubmit={applicationToTrip}>
            <p>FAÇA A SUA INSCRIÇÃO</p>
            <select
              required
              name="tripSelect"
              value={form.tripSelect}
              onChange={onChange}
            >
              <option value="">escolha uma viagem</option>
              {getTrips}
            </select>

            <input
              required
              placeholder="Nome"
              name="name"
              value={form.name}
              pattern={"^.{3,}$"}
              title={"Minimum 3 characters"}
              onChange={onChange}
            ></input>
            <input
              placeholder="Idade"
              name="age"
              value={form.age}
              required
              min="18"
              onChange={onChange}
            ></input>
            <input
              placeholder="Profissão"
              name="profession"
              value={form.profession}
              required
              pattern={"^.{6,}$"}
              title={"Minimum 10 characters"}
              onChange={onChange}
            ></input>
            <input
              required
              placeholder="texto de inscrição"
              name="applicationText"
              value={form.applicationText}
              pattern={"^.{30,}$"}
              title={"Minimum 30 characters"}
              onChange={onChange}
            ></input>
            <select
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

              {/* {getCountry} */}
            </select>

            <button type="submit">ENVIAR</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ApplicationFormPage;
