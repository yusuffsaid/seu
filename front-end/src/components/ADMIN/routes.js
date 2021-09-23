import Categories from "./Categories/Categories";
import Questions from "./Questions/Questions";
import Request from "./Request/Request";
import User from "./User/User";

const routes = [
  {
    path: "/admin/questions",
    exact: true,
    name: "Questions",
    component: Questions,
  },
  {
    path: "/admin/categories",
    exact: true,
    name: "Categories",
    component: Categories,
  },
  {
    path: "/admin/request",
    exact: true,
    name: "Request",
    component: Request,
  },
  {
    path: "/admin/user",
    exact: true,
    name: "User",
    component: User,
  },
];

export default routes;
