import {BrowserRouter, Switch, Route} from "react-router-dom"
import SearchForModels from "../pages/SearchForModels";
import SearchForProviders from "../pages/SearchForProviders";

const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path = '/'>
                <SearchForProviders/>
            </Route>
            <Route exact path = "/:id/modelos">
        <SearchForModels/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;