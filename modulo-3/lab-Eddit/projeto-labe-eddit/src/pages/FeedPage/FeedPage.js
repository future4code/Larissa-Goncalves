import { useHistory } from "react-router";
import Header from "../../components/header/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";
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
                
             
                </div>
                <div>news</div>
                <div>friends</div>
            </News>
    </DivFeed>
    )
  
}

export default FeedPage;