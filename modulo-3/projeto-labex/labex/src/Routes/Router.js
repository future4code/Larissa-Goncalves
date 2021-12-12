import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import ListTripsPage from "../Pages/Public/ListTripPage/ListTripPage";
import LoginPage from "../Pages/Private/LoginPage/LoginPage";
import ApplicationFormPage from "../Pages/Public/ApplicationFormPage/ApplicationFormPage"
import AdminHomePage from "../Pages/Private/AdminHomePage/AdminHomePage"

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/trips/list">
          <ListTripsPage />
        </Route>

        {/* <Route exact path="/admin/trips/list">
          <AdminHomePage />
        </Route> */}

        <Route exact path="/login">
          <LoginPage />
        </Route>

         <Route exact path="/trips/application">
          <ApplicationFormPage />
        </Route>

        {/* <Route exact path="/admin/trips/:id">
          <TripDetailsPage />
        </Route>  */}

        <Route>
          <div>Página não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
