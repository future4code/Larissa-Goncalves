import Header from "../../components/header/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { DivFeed, NavBar, News, Posts, DivHeaderFixed, DivCreatePost } from "./Styled-Feed";
import ListFeedPage from "./ListsFeedPage"
import NavBarPage from "../../components/navBar/NavBar";
import NewsPage from "../../components/News/NewsPage";
import CommitPage from "../CommitPage/CommitPage";
import PostPage from "../PostPage/PostPage";

const FeedPage = () => {
    useProtectedPage()   
    return(
        <DivFeed>
            <NavBar><NavBarPage/></NavBar>
            <Posts>
                <DivHeaderFixed><Header/></DivHeaderFixed>
                <DivCreatePost><PostPage/></DivCreatePost>
                <div>

                    <ListFeedPage/>
                    
                </div>
            </Posts>
            <News>
                <NewsPage/>
            </News>
    </DivFeed>
    )
  
}

export default FeedPage;