import {Switch, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import ListTripPage from './Pages/Public/ListTripPage/ListTripPage';
import LoginPage from './Pages//Private/LoginPage/LoginPage'
import ApplicationFormPage from './Pages/Public/ApplicationFormPage/ApplicationFormPage'
import TripDetails from './Pages/Private/TripDetailsPage/TripDetailsPage'
import CreateTrip from './Pages/Private/CreateTripPage/CreateTripPage'
import AdminHome from './Pages/Private/AdminHomePage/AdminHomePage'


const App = () => {
  return(
    <div >
      <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
        <HomePage/>
        </Route>

        <Route  exact path={'/trips/list'}>
        <ListTripPage/>
        </Route>

        <Route exact path={'/trips/application'}>
        <ApplicationFormPage/>
        </Route>

        <Route exact path={'/login'}>
        <LoginPage/>
        </Route>

        <Route exact path={'/admin/trips/list'}> 
        <AdminHome/>
        </Route>

         
        <Route exact path={'/admin/trips/create'}>
        <CreateTrip/>
        </Route>

        <Route exact path={'/admin/trips/:id'}>
        <TripDetails/>
        </Route>
       
        
        

        <Route>
          <HomePage/>
        </Route>
    
       
       
       
       
       
       
      </Switch>
       
      </BrowserRouter>

    </div>
  )
}

export default App;