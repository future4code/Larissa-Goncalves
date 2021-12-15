import { useHistory } from "react-router";
import Header from "../../components/header/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToLogin } from "../../rotes/Coordinator";
import { DivFeed, NavBar, News, Posts } from "./Styled-Feed";

const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
   
    return(
        <DivFeed>
            <NavBar>nav bar</NavBar>
            <Posts>
                <div><Header/></div>
                <div></div>
                <div>
                </div>
            </Posts>
            <News>
                <div>
                    <input placeholder={"Pesquise aqui"}></input>
                    <button onClick={() => (goToLogin(history))}>logout</button>
             
                </div>
                <div>news</div>
                <div>friends</div>
            </News>
    </DivFeed>
    )
  
}

export default FeedPage;