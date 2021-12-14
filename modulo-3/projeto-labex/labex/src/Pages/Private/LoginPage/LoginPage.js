import axios from "axios";
import { useHistory } from "react-router-dom";
import { useProtectedLog } from "../../../hooks/useProtected";
import { urlLogin } from "../../../Constants/Url";
import { useForm } from "../../../hooks/useForm";
import {Fab, TextField} from "@material-ui/core"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { DivInput, DivLogin, DivLoginPage } from "./LoginPage-Styled";
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';

const initialForm = {
  email: "",
  password: ""
};

const LoginPage = () => {
  const history = useHistory();
  useProtectedLog();
  const [form, onChange] = useForm(initialForm);

  const goToHomePage = () => {
    history.push("/");
  };

  const goToAdminHomePage = () => {
    history.push("/admin/trips/list");
  };

  const login = (event) => {
    event.preventDefault();
    const body = {
      email: form.email,
      password: form.password
    };
    axios
      .post(urlLogin, body)
      .then((res) => {
        console.log(res.data.response);
        window.localStorage.setItem("token", res.data.token);
        goToAdminHomePage();
        alert(
          `Bem Vindo!`,
        );
      })
      .catch((err) => {
        alert(
          "E-mail ou Senha incorretos, preencha os dados corretamente!"
        );
      });
  };

  return (
    <DivLoginPage>
      <DivLogin>
      <Fab color="primary" aria-label="add" onClick={goToHomePage}>
          <HomeRoundedIcon/>
        </Fab>
      </DivLogin>
      <DivInput>
        <form onSubmit={login}>
        <h2>Login </h2>
        <TextField id="standard-basic"
         label="Email" variant="standard"
         name="email"
         value={form.email}
         onChange={onChange}
         />
          <TextField id="standard-basic" 
          label="Password" variant="standard" 
          name="password"
          value={form.password}
          onChange={onChange}
          type="password"/>
           <Fab type="submit" variant="extended" color="primary">
               <LockOpenRoundedIcon/>
           Login
            </Fab>
        </form>
      </DivInput>
    </DivLoginPage>
  );
};

export default LoginPage;
