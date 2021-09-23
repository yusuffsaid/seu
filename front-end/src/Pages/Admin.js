import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { authState } from "../features/auth/authSlice";
import { withRouter, Switch, Route } from "react-router-dom";

import Sidebar from "../components/ADMIN/Sidebar/Sidebar";
import routes from "../components/ADMIN/routes";
import QuestionDetail from "../components/ADMIN/Questions/QuestionDetail";
const Admin = ({ history }) => {
  const { user } = useSelector(authState);
  const [more, setMore] = useState(false);
  useEffect(() => {
    console.log(user);
    if (user.role !== "admin") {
      history.push("/");
    }
  }, []);
  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
  }, []);
  const changeMore = () => {
    setMore(!more);
    console.log(more);
  };
  return (
    <div>
      <Sidebar moreArea={changeMore}></Sidebar>
      <div className={more ? "admin-left-side more" : "admin-left-side"}>
        <Switch>
          {routes.map((route, index) => {
            return (
              route.component && (
                <Route
                  key={index}
                  path={route.path}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              )
            );
          })}
        </Switch>
      </div>
      <QuestionDetail></QuestionDetail>
    </div>
  );
};

export default withRouter(Admin);
