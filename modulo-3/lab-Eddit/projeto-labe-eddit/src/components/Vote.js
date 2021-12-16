import { IconButton } from '@mui/material';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import { useParams } from 'react-router';
import {url_base} from "../constants/urls/URL"
import useRequestData from '../hooks/useRequestData';

const Vote = () => {
    
   

    return(
        <div>
             <IconButton aria-label="add to favorites" margin-left={'10px'}>
               <ArrowDownwardOutlinedIcon color='error' />
              </IconButton>
              2
                   <IconButton aria-label="share">
                   <ArrowUpwardOutlinedIcon color='primary' />
                  </IconButton>
        </div>
    )
}

export default Vote;