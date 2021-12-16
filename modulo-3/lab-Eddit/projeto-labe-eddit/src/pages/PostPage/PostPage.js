import { Fab, TextField } from "@mui/material";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useForm from "../../hooks/useForm"
import {createPost} from "../../components/Requests"


const PostPage = () => {
    useProtectedPage()
    const [form, onChange, clear] = useForm({title: '', body: ''})
    
    const  onSubmitFormPost = (e) => {
        e.preventDefault()
        createPost(form, clear)
        
    }
    return(
        <div>
            <form onSubmit={onSubmitFormPost}>
        Faça uma postagem para o amigos.
        <TextField 
        name='title'
        value={form.title}
        onChange={onChange}
        placeholder="de um titulo para a sua postagem"
        variant={'outlined'}
        type='text'
        fullWidth
       />
        <TextField
        name='body'
        value={form.body}
        onChange={onChange}
        placeholder="o que está acontecendo?"
        variant={'outlined'}
        type='text'
        fullWidth/>
            <Fab
                  type="submit"
                variant={'extended'}
                aria-label='add'
                fullWidth
                size='medium'
               
                >Postar </Fab>
        </form>
    </div>
    )
   
}

export default PostPage;