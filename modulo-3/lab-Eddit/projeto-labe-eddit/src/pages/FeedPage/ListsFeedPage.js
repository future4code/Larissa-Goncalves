import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useRequestData from '../../hooks/useRequestData';
import { url_base } from '../../constants/urls/URL';
import { goToCommit } from '../../rotes/Coordinator';
import { useHistory } from 'react-router';
import Loading from "../../components/loading"


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
      return(
          <Card key={posts.id } sx={{ maxWidth: 900 }}>
            <CardHeader
             avatar={
               <Avatar sx={{ bgcolor: corlorRandom() }} aria-label="recipe">B</Avatar>
             }
             title={posts.username}
             subheader={posts.createdAt}
               />
               <Typography margin={'20px'} variant="body2" color="text.secondary">
                   <h3>{posts.title}</h3>
                    {posts.body}
                 </Typography>
                 <CardActions disableSpacing>
                 <IconButton aria-label="add to favorites">
               <FavoriteIcon />
              </IconButton>
                   <IconButton aria-label="share">
                   <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="commits" onClick={() => onClickCard(posts.id)}>
                   <ExpandMoreIcon/> {posts.commentCount}
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


