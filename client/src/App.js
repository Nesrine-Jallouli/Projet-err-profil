import React from 'react';
import './App.css';
import {Component} from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import { Container, Row, Col } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import EditProfile from "./pages/EditProfile";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ErroPage from './pages/Error' ;
import { getProfile } from "./JS/actions";
import PrivateRoute from "./pages/PrivateRoute";
import SignUpCompany from './pages/SignUpCompany';
import LoginEntreprise from "./pages/LoginEntreprise";


const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
const isAuthEnt = useSelector((state) => state.entrepriseReducer.isAuthEnt)
  useEffect(() => {
    dispatch(getProfile());
  }, [isAuth]);

    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/Register" render={(props) => <Register {...props} />} />
         <Route exact path="/login" render={(props) => <Login {...props} />} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route path="/EditProfile"  component={EditProfile} />
        <Route path="/signupcompany" component={SignUpCompany} />
        <Route path="/LoginEntreprise" component={LoginEntreprise} />

        <Route component={ErroPage}/>
        </Switch>
    
        </BrowserRouter>
        

      </div>
    )
};

export default App;
