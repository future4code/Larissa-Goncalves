import {TextField, Fab, Button} from "@material-ui/core";
import useForm from "../../hooks/useForm"
import { goToLogin } from "../../rotes/Coordinator";
import { useHistory } from "react-router";
import {signUp} from "../../components/Requests";
// import { useUnprotectedPage } from "../../hooks/useProtectedPage";


const SignUpForm= () => {
  // useUnprotectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({username:'', email:'', password:''})

    const submitForm = (e) => {
      console.log(form)
      e.preventDefault();
      signUp(form, clear, history)
  }

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
                type='password'
                label={'Senha'}
                fullWidth
                margin={'normal'}
                />
                  <Fab 
                  type="submit"
                variant={'extended'}
                aria-label='add'
                fullWidth
                size='medium'
                color='secondary'
                > cadastrar-se </Fab>
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