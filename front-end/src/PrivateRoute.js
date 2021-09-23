import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { authState } from "./features/auth/authSlice";
import Container from "./Pages/Container";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoading } = useSelector(authState);
  if (isLoading) {
    return <div>Aglaaa</div>;
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          <Container {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
