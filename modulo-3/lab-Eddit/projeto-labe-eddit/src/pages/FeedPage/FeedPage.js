import { useHistory } from "react-router";
import Header from "../../components/header/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { DivFeed, NavBar, News, Posts, DivHeaderFixed, DivCreatePost } from "./Styled-Feed";
import ListFeedPage from "./ListsFeedPage"
import NavBarPage from "../../components/navBar/NavBar";
import NewsPage from "../../components/News/NewsPage";

const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
   
    return(
        <DivFeed>
            <NavBar><NavBarPage/></NavBar>
            <Posts>
                <DivHeaderFixed><Header/></DivHeaderFixed>
                <DivCreatePost>postagem</DivCreatePost>
                <div>
                    <ListFeedPage/>
                    <ListFeedPage/>
                    <ListFeedPage/>
                    <ListFeedPage/>
                    <ListFeedPage/>
                    <ListFeedPage/>
                    <ListFeedPage/>
                </div>
            </Posts>
            <News>
                <NewsPage/>
                {/* <div>
                    <input placeholder={"Pesquise aqui"}></input>
                
             
                </div>
                <div>news</div>
                <div>friends</div> */}
            </News>
    </DivFeed>
    )
  
}

export default FeedPage;