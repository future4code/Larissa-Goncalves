import { Fab, TextField } from "@mui/material";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useForm from "../../hooks/useForm"
import {createPost} from "../../components/Requests"
import { useEffect } from "react";
import { DivInput, ButtonInput} from "./Styled-post";


const PostPage = (props) => {
    useProtectedPage()
    const [form, onChange, clear] = useForm({title: '', body: ''})
    
    const  onSubmitFormPost = (e) => {
        e.preventDefault()
        createPost(form, clear)
        
    }


    return(
        <DivInput>
            <form onSubmit={onSubmitFormPost}>
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
           <ButtonInput>
        <Fab
                  type="submit"
                variant={'extended'}
                aria-label='add'
                fullWidth
                size='medium'
               
                >Postar </Fab>
        </ButtonInput>
        </form>
    </DivInput>
    )
   
}

export default PostPage;