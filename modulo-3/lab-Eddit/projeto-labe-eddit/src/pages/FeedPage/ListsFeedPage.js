import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useRequestData from '../../hooks/useRequestData';
import { url_base } from '../../constants/urls/URL';
import { typography } from '@mui/system';

const RecipeReviewCard = () =>  {
  const getPosts = useRequestData([], `${url_base}/posts`)
 
  console.log(getPosts)

  const getPostPeoples = getPosts.map((posts) => {
      return(
          <Card key={posts.id } sx={{ maxWidth: 900 }}>
            <CardHeader
             avatar={
               <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">LT</Avatar>
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
                  <IconButton aria-label="commits">
                   <ExpandMoreIcon /> {posts.commentCount}
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


