import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Footer from './Components/Footer/Footer';
import HeaderNavbar from './Components/Header/HeaderNavbar';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceDetailsPage from './Components/ServiceDetailsPage/ServiceDetailsPage';
import Services from './Components/Services/Services';
import Trainers from './Components/Trainers/Trainers';
import AuthProvider from './Contexts/AuthProvider';



const App = () => {
  return (
    <AuthProvider>

         <Router>

            <HeaderNavbar></HeaderNavbar>

            <Switch>

            <Route exact path='/'>
                <Home></Home>
            </Route>

            <Route exact path='/home'>
                <Home></Home>
            </Route>

            <Route exact path='/services'>
                <Services></Services>
            </Route>

            <Route exact path='/trainers'>
                <Trainers></Trainers>
            </Route>

            <Route exact path='/login'>
                <Login></Login>
            </Route>

            <PrivateRoute exact path='/services/:serviceId'>
                <ServiceDetailsPage></ServiceDetailsPage>
            </PrivateRoute>

            <Route exact path='*'>
                <NotFound></NotFound>
            </Route>

            </Switch>

            <Footer></Footer>

       </Router>
       
    </AuthProvider>
  );
};

export default App;
