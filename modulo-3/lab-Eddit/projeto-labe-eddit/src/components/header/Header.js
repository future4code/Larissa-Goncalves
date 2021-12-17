import { DivHeader } from "./Styled-Header";
import {goToFeed, goToLogin} from "../../rotes/Coordinator"
import { useHistory} from "react-router";
import swal from "sweetalert"
import { Button, Fab, IconButton } from "@mui/material";
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';


const Header = () => {
    const history = useHistory()

  const goToLogout = () => {
    window.localStorage.removeItem("token");
    window.confirm("deseja sair?") ? goToLogin(history) : goToFeed(history)}

    return(
        <DivHeader>
            <h3>Página Inicial</h3>
            <IconButton aria-label="share" onClick={() => goToLogout(history)}>
                   <ExitToAppOutlinedIcon color='secondary' />
                  </IconButton>
            {/* <button>
                <Brightness4OutlinedIcon/>

            </button> */}
        
        </DivHeader>
    )
}

export default Header;