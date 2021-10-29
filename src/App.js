import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  path
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import OrdersPlaced from './components/OrdersPlaced/OrdersPlaced';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import AddNewService from './components/AddNewService/AddNewService';
import Login from './components/Login/Login';
import NotFound from './components/Shared/NotFound/NotFound';
import Header from './components/Shared/Header/Header/Header';
import AuthProvider from './components/context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/orderplaced/:orderplacedId'>
              <OrdersPlaced></OrdersPlaced>
            </PrivateRoute>
            <PrivateRoute path='/myorders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path='/manageallorders'>
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path='/addnewservice'>
              <AddNewService></AddNewService>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
