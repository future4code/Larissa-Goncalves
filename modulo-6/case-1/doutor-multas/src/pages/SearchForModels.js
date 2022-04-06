import { useHistory } from "react-router";
import { goToSearchPage } from "../routes/Coordinator";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Fab } from "@mui/material";
import { ButtonBack, DivModels} from "./Styled";


const SearchForModels = () => {
    const history = useHistory()
     
    return(
        <DivModels>
            <ButtonBack>
            <Fab onClick={() => goToSearchPage(history)} color="primary"><ArrowBackIosNewOutlinedIcon/></Fab>
            </ButtonBack>
        </DivModels>
    )
}

export default SearchForModels;