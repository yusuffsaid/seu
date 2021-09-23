import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./default.css";
import { store } from "./app/store";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { authState, setCurrentUser } from "./features/auth/authSlice";
import jwt_decode from "jwt-decode";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import PrivateRoute from "./PrivateRoute";
import Nav from "./components/Nav/Nav";
import Home from "./Pages/Home";
const Root = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(authState);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);

      dispatch(setCurrentUser(decoded));
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, []);

  return (
    <div>
      <Nav />
      {
        <Switch>
          <Route path="/" exact render={(props) => <Home />} />
          <PrivateRoute></PrivateRoute>
        </Switch>
      }

      <Register></Register>
      <Login></Login>
    </div>
  );
};

export default Root;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Root />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
