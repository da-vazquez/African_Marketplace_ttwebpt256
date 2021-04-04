import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/Home';
import RegisterForm from './components/Register'
import Marketplace from './components/Marketplace';
import ProductList from './components/ProductList';
import Nav from './components/Nav';
import AddProduct from './components/AddProduct';
import {ProductProvider} from './contexts/ProductListContext';
import {AuthProvider} from './contexts/AuthContext';
import {UserProvider} from './contexts/UserAuthContext';
import PrivateRoute from './components/PrivateRoute'


function App() {
  
  return (
    <AuthProvider>
    <UserProvider>
    <ProductProvider>
      <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/register' component={RegisterForm}/>
        <Route path='/marketplace' component={Marketplace}/>
        <Route path='/my-listings' component={ProductList}/>
        <Route path='/new-listing' component={AddProduct}/>
      </Switch>

    </div>
    </Router>
    </ProductProvider>
    </UserProvider>
    </AuthProvider>
  );
}

export default App;
