import { useProtectedPage } from "../../hooks/useProtectedPage";
import { DivFeed, NavBar, News, Posts } from "./CommitPage-styled";
import NavBarPage from "../../components/navBar/NavBar";
import NewsPage from "../../components/News/NewsPage";
import { goToFeed } from "../../rotes/Coordinator";
import { useHistory, useParams } from "react-router";
import useRequestData from "../../hooks/useRequestData"
import { url_base } from "../../constants/urls/URL";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import * as React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { TextField } from "@material-ui/core";

const CommitPage = () => {
    useProtectedPage()
    const history = useHistory()
    const params = useParams()
    const commits = useRequestData([], `${url_base}/posts/${params.id}/comments`)
    console.log(commits)

    var corlorRandom = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
      };

    const getPostComments = commits && commits.map((commits) => {
        return(
          <Card key={commits.id } sx={{ maxWidth: 900 }}>
              <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: corlorRandom() }} aria-label="recipe">B</Avatar>
              }
              title={commits.username}
              subheader={commits.createdAt}
              /> 
              <Typography margin={'20px'} variant="body2" color="text.secondary">
              <h3>{commits.body}</h3>
              </Typography>
              <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
               <FavoriteIcon />
              </IconButton>
                   <IconButton aria-label="share">
                   <ShareIcon />
                  </IconButton>

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
             <TextField
             placeholder={'Faça um comentario'}
             variant={'outlined'}
             type='text'
             fullWidth
             />
             
             <button>commit</button>
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