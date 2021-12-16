import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useRequestData from '../../hooks/useRequestData';
import { url_base } from '../../constants/urls/URL';
import { goToCommit } from '../../rotes/Coordinator';
import { useHistory } from 'react-router';
import Loading from "../../components/loading"
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import Vote from "../../components/Vote"


const RecipeReviewCard = () =>  {
  const getPosts = useRequestData([], `${url_base}/posts`)
  const history = useHistory()
 
  console.log(getPosts)

  var corlorRandom = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const onClickCard = (id) => {
    goToCommit(history, id);
  };

  const getPostPeoples = getPosts.map((posts) => {
    const userFirstLetter = () => {
      const firstLetter = posts.username && posts.username.substr(0, 1);
      return posts.username && firstLetter.toUpperCase();
    };
      return(
          <Card key={posts.id } sx={{ maxWidth: 900 }}>
            <CardHeader
             avatar={
               <Avatar sx={{ bgcolor: corlorRandom() }} aria-label="recipe">{userFirstLetter()}</Avatar>
             }
             title={posts.username}
             subheader={posts.createdAt}
               />
               <Typography margin={'20px'} variant="body2" color="text.secondary">
                   <h3>{posts.title}</h3>
                    {posts.body}
                 </Typography>
                 <CardActions >
                 <Vote/>
                
                  <IconButton aria-label="commits" onClick={() => onClickCard(posts.id)}>
                   <QuestionAnswerOutlinedIcon/> {posts.commentCount}
                  </IconButton>
                  
                 </CardActions>
          </Card>
      )
  })
 
  return (
    <div>
       {getPostPeoples} 
      
    </div>
 
   )
}

export default RecipeReviewCard;


