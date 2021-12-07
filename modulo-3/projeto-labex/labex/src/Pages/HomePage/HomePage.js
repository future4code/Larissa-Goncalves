import {DivFlow, DivGrid, DivHome, DivPhoto, DivText} from './HomePage-Styled'
import Header from '../../Components/Header./Header';
import { useHistory } from 'react-router-dom';

const HomePage = () => {

    const history = useHistory()

    const goToListTrip = () => {
        history.push('/trips/list')
    }

    const goToAdminHome = () => {
        history.push('/login')
    }

    return(
        <DivHome>
            <Header/>
            <DivGrid>
            <div>
                <DivText>
                    <div>
                    <h1> oiiiii eu sou o ipsun</h1>
                    </div>
                 
                 <div>
                     <button onClick={goToListTrip}>VER VIAGENS</button>  
                     <button onClick={goToAdminHome}>ADMIN</button>
                 </div>
                </DivText>
                <button>x</button>
            </div>
            <div>
                <DivPhoto>
                <div>
                    foto 1
                </div>
                <div>
                    foto2
                </div>
                <div>
                    foto3
                </div>
                </DivPhoto>
                
            </div>

            </DivGrid>
            <DivFlow>
                <div>1</div>

                <div>2</div> 
                <div>3</div>
               
            </DivFlow>

            

        </DivHome>
    )
}

export default HomePage;