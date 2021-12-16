import { useProtectedPage } from "../../hooks/useProtectedPage";
import { DivFeed, NavBar, News, Posts } from "./CommitPage-styled";
import NavBarPage from "../../components/navBar/NavBar";
import NewsPage from "../../components/News/NewsPage";
import { goToFeed } from "../../rotes/Coordinator";
import { useHistory, useParams } from "react-router";
import useRequestData from "../../hooks/useRequestData"
import { url_base } from "../../constants/urls/URL";
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import * as React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { createCommit } from "../../components/Requests";
import Vote from "../../components/Vote";


const CommitPage = () => {
    useProtectedPage()
    const history = useHistory()
    const params = useParams()
    const commits = useRequestData([], `${url_base}/posts/${params.id}/comments`)
    const [form, onChange, clear] = useForm({body: ''})
    console.log(commits)
    

    var corlorRandom = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
      };

      const onSubmitFormComments = (e) => {
          e.preventDefault()
          createCommit(form, params, clear)

      }
    const getPostComments = commits && commits.map((commits) => {
        const userFirstLetter = () => {
            const firstLetter = commits.username && commits.username.substr(0, 1);
            return commits.username && firstLetter.toUpperCase();
          };
        return(
          <Card key={commits.id } sx={{ maxWidth: 900 }}>
              <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: corlorRandom() }} aria-label="recipe">{userFirstLetter()}</Avatar>
              }
              title={commits.username}
              subheader={commits.createdAt}
              /> 
              <Typography margin={'20px'} variant="body2" color="text.secondary">
              <h3>{commits.body}</h3>
              </Typography>
              <CardActions disableSpacing>
              <Vote/>

              </CardActions>
          </Card>
        )
    })
    return(
        <DivFeed>
        <NavBar><NavBarPage/></NavBar>
        <Posts>
            <div>
            <button onClick={() => goToFeed(history)}>Voltar</button>
            <h3>comentarios</h3>
            
            </div>
            <div>
                <form onSubmit={onSubmitFormComments}>
                <TextField
                placeholder={'Faça um comentario'}
                variant={'outlined'}
                type='text'
                name='body'
                value={form.body}
                onChange={onChange}
                fullWidth
                />
             <button
             type='submit'
             >commit</button>

                </form>
            
            </div>
            <div>
             rederiza comits
             {getPostComments}
            </div>
            
        </Posts>
        <News>
            <NewsPage/>
        </News>
</DivFeed>
    )
}

export default CommitPage;