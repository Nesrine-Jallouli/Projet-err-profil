import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  
  if (!isAuth) return <Redirect to="/login" />
  // if (!localStorage.getItem('token')) return <Redirect to="/login" />


  return (
    <div>
      <Route {...rest} render={(props) => <Component {...props} />} />
    </div>
  );
};

export default PrivateRoute;
