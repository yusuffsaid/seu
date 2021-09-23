import React from "react";
import { Route } from "react-router-dom";
import Admin from "./Admin";
import Aplication from "./Aplication";
import Profile from "./Profile";
import Form from "../components/APPLICATION/Form/Form";
const Container = () => {
  return (
    <div>
      <Route path="/admin" exact render={(props) => <Admin />} />
      <Route path="/admin/:page" render={(props) => <Admin />} />
      <Route path="/profile" exact render={(props) => <Profile />} />
      <Route path="/aplication" exact render={(props) => <Aplication />} />
      <Route path="/aplication/:id" render={(props) => <Form />} />
    </div>
  );
};

export default Container;
