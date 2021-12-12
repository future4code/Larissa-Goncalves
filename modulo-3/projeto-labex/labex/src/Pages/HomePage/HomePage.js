import { useHistory } from "react-router-dom";
import { DivHome, DivImg, DivText, DivButton } from "./HomePage-Styled";
import Header from "../../Components/Header./Header"
import {Fab} from "@mui/material"
import LocalAirportRoundedIcon from '@mui/icons-material/LocalAirportRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import ExtraPage from "../extraPage/ExtraPage"
import animationTrip from "../../Components/Animation/animationTrip.json";
import Lottie from "react-lottie"


const HomePage = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/login");
  };
  const goToListTrip = () => {
    history.push("/trips/list");
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationTrip,
    rendererSettings: {
        preserveAspectRatio: 'xMidYmid slice'
    }
};

  return (
    <DivHome>
      <div>
        <Header/>
        
        <DivText>
          <div>
          <h1> Welcome To Labe x</h1>
          <h4>A sua viagem começa agora!</h4>
          </div>
         
         
          <DivButton>
          <Fab onClick={goToListTrip} color="secondary" variant="extended">
              <LocalAirportRoundedIcon/>
          
         Ver Viagens
          </Fab>
          <Fab onClick={goToLogin} color="primary" variant="extended">
              <HttpsRoundedIcon/>
          Área do Admin
          </Fab>
          </DivButton>
        </DivText>
      </div>
      <div>
        <DivImg>
        <Lottie
                options={defaultOptions}
                height={820}
                width={500}
            />
        </DivImg>

      </div>
      {/* <ExtraPage/> */}
    </DivHome>
   
  );
};

export default HomePage;
