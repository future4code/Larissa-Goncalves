import {TextField, Fab, Button} from "@material-ui/core";
import useForm from "../../hooks/useForm"
import { goToSignUp} from "../../rotes/Coordinator";
import { useHistory } from "react-router";
import { login } from "../../components/Requests";
import { useUnprotectedPage } from "../../hooks/useProtectedPage";
import {showPassWord} from "../../components/VisibilityPage"

const LoginForm = (props) => {
    useUnprotectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({email:'', password:''})
 
    const submitForm = (e) => {
        e.preventDefault();
        login(form, clear, history);
    }
    return(
        <div>
                <form onSubmit={submitForm}>
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
                
                />
                  <Fab 
                  type="submit"
                variant={'extended'}
                aria-label='add'
                fullWidth
                size='medium'
                color='secondary'
                > Entrar </Fab>
                  <Button 
                onClick={() => goToSignUp(history)}
                variant={'text'}
                fullWidth
                size='medium'
                color='secondary'
                > 
                ou cadastra-se
                </Button>
                </form>
                

    </div>

    )
   
}

export default LoginForm;