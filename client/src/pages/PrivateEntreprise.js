import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthEnt = useSelector((state) => state.entrepriseReducer.isAuthEnt)

  if (!isAuthEnt) return <Redirect to="/LoginEntreprise"/>

  return (
    <div>
      <Route {...rest} render={(props) => <Component {...props} />} />
    </div>
  );
};

export default PrivateRoute;
