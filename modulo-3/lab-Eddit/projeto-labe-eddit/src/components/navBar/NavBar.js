import { DivBar } from "./Styled-NavBar";
import AnimationOne from "../animation/Animation.json"
import Lottie from "react-lottie";
import { Button } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';

const NavBar = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: AnimationOne,
        rendererSettings: {
        preserveAspectRatio: 'xMidYmid slice'
        }
    };
    return(
        <DivBar>
            <div>
            <Lottie
                options={defaultOptions}
                height={100}
                width={100}
                />
            </div>
            <div>
            <Button
            type="submit"
            variant={'extended'}
            aria-label='add'
            
            size='medium'
            >
                 <HomeOutlinedIcon/>
                 
                 <h3> Pagina principal</h3>
           
            </Button>
            <Button
            type="submit"
            variant={'extended'}
            aria-label='add'
            
            size='medium'
            
            >
                <PeopleOutlinedIcon/>
               <h3> Perfil</h3>
            </Button>

            <Button
            type="submit"
            variant={'extended'}
            aria-label='add'
           
            size='medium'
            >
                <TagOutlinedIcon/>
                <h3> Explorar</h3>
                
            </Button>
           
                
            </div>
            <div>Botão de postar</div>
            <div>Meus Perfil</div>
            
        </DivBar>
    )
}

export default NavBar;