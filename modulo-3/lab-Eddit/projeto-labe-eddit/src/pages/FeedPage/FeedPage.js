// import { useHistory } from "react-router";
import Header from "../../components/header/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { DivFeed, NavBar, News, Posts, DivHeaderFixed, DivCreatePost } from "./Styled-Feed";
import ListFeedPage from "./ListsFeedPage"
import NavBarPage from "../../components/navBar/NavBar";
import NewsPage from "../../components/News/NewsPage";
import useRequestData from "../../hooks/useRequestData";
import { url_base } from "../../constants/urls/URL";

const FeedPage = () => {
    useProtectedPage()
    // const history = useHistory()
//     const getPosts = useRequestData([], `${url_base}/posts`)
//   console.log(getPosts)


//   const getPostPeoples = getPosts.map((posts) => {
//       return(
//           <div key={posts.id}>
//               <p>{posts.title}</p>

//           </div>
//       )
//   })
   
    return(
        <DivFeed>
            <NavBar><NavBarPage/></NavBar>
            <Posts>
                <DivHeaderFixed><Header/></DivHeaderFixed>
                <DivCreatePost>postagem</DivCreatePost>
                <div>
                    {/* {getPostPeoples} */}
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