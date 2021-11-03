import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';
import AddService from './components/AddService/AddService';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';
import ManageServices from './components/ManageServices/ManageServices';
import BookingConfirmed from './components/BookingConfirmed/BookingConfirmed';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
      <Route exact path="/">
            <Home></Home>
      </Route>
      <Route path='/home'>
            <Home></Home>
      </Route>
      <Route path='/services'>
            <Services></Services>
      </Route>
      <Route path='/addService'>
            <AddService></AddService>
      </Route>
      <PrivateRoute path="/booking/:_id">
              <Booking></Booking>
      </PrivateRoute>
      <Route path="/bookingConfirmed">
      <BookingConfirmed></BookingConfirmed>
      </Route>
      <Route path='/manageServices'>
      <ManageServices></ManageServices>
      </Route>
      <Route path='/login'>
            <Login></Login>
        </Route>
      <Route path='/register'>
            <Register></Register>
      </Route>
      <Route path="*">
            <NotFound></NotFound>
      </Route>
      </Switch>
            <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
