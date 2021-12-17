import Header from "../../components/header/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { DivFeed, NavBar, News, Posts, DivHeaderFixed, DivCreatePost, DivListPost } from "./Styled-Feed";
import ListFeedPage from "./ListsFeedPage"
import NavBarPage from "../../components/navBar/NavBar";
import NewsPage from "../../components/News/NewsPage";
import CommitPage from "../CommitPage/CommitPage";
import PostPage from "../PostPage/PostPage";
import { useState } from "react";

const FeedPage = () => {
    useProtectedPage()   

    return(
        <DivFeed>
            <Posts>
                <DivHeaderFixed><Header/></DivHeaderFixed>
                <DivCreatePost><PostPage/></DivCreatePost>
                <div>
                   <ListFeedPage/>
                </div>
                </Posts>
    </DivFeed>
    )
  
}

export default FeedPage;