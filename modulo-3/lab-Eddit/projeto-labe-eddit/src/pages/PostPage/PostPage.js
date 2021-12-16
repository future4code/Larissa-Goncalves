import { Fab, TextField } from "@mui/material";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const PostPage = () => {
    useProtectedPage()
    return(
        <div>
            {/* <form onSubmit={}> */}
        Faça uma postagem para o amigos.
        <TextField 
        required
        name='title'
        // value={form.title}
        // onChange={onChange}
        placeholder="de um titulo para a sua postagem"
        variant={'outlined'}
        type='text'
        fullWidth
       />
        <TextField
        required
        name='body'
        // value={form.body}
        // onChange={onChange}
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
                color='secondary'
                >Postar </Fab>
        {/* </form> */}
    </div>
    )
   
}

export default PostPage;