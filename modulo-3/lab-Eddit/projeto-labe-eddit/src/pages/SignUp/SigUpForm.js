import {TextField, Fab, Button} from "@material-ui/core";
import useForm from "../../hooks/useForm"
import { goToLogin } from "../../rotes/Coordinator";
import { useHistory } from "react-router";
import {signUp} from "../../components/Requests";
// import { useUnprotectedPage } from "../../hooks/useProtectedPage";
import { IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";
import { CircularProgress } from "@mui/material";


const SignUpForm= () => {
  // useUnprotectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({username:'', email:'', password:''})
    const [showPassWord, setPassWord] = useState(true);
    const [loading, setLoading] = useState(false)

    const submitForm = (e) => {
      console.log(form)
      e.preventDefault();
      signUp(form, clear, history, setLoading)
  }

  const handleClickShowPassword = () => {
    setPassWord(!showPassWord);
  };
   const handleMouseDownPassword = () => {
    setPassWord(!showPassWord);
  };

    return(

        <div>
             <form onSubmit={submitForm}>
             <TextField 
                required
                name='username'
                value={form.username}
                onChange={onChange}
                placeholder="Nome de usuário"
                variant={'outlined'}
                type='text'
                label={'Nome'}
                fullWidth
                margin={'normal'}
                />
                <TextField 
                required
                name='email'
                value={form.email}
                onChange={onChange}
                placeholder="Email"
                variant={'outlined'}
                type='email'
                label={'Email'}
                fullWidth
                margin={'normal'}
                />
                <TextField 
                required
                name='password'
                value={form.password}
                onChange={onChange}
                placeholder="Senha"
                variant={'outlined'}
                type={!showPassWord ? "password" : "text" }
                label={'Senha'}
                fullWidth
                margin={'normal'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassWord ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                />
                  <Fab 
                  type="submit"
                variant={'extended'}
                aria-label='add'
                fullWidth
                size='medium'
                color='secondary'
                >{ loading ? <CircularProgress size={24}/> :  <>cadastrar-se </>} </Fab>
                  <Button 
                onClick={() => goToLogin(history)}
                variant={'text'}
                fullWidth
                size='medium'
                color='secondary'
                > 
                Voltar ao login?
                </Button>
                </form>
              
           
    </div>

    )
   
}

export default SignUpForm;