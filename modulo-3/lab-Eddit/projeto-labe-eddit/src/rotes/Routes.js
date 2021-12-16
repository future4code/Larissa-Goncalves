import { BrowserRouter, Switch, Route} from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import PostPage from "../pages/PostPage/PostPage";
import CommitPage from "../pages/CommitPage/CommitPage"

const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/login">
                <LoginPage/>
            </Route>
            <Route exact path="/">
                <FeedPage/>
            </Route>
            <Route exact path="/Postagem/:id">
                <PostPage/>
            </Route>
            <Route exact path="/comentarios/:id">
                <CommitPage/>
            </Route>
            <Route exact path="/cadastro">
                <SignUpPage/>
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
            
          
        </Switch>
        </BrowserRouter>
    )

}

export default Routes;