import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import SignIn from "../pages/signin";
import Post from "../pages/post";
import Profile from "../pages/profile";
import Category from "../pages/category";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/category/:name",
      element: <Category />,
    },
    {
      path: "/post",
      element: <Home />,
    },
    {
      path: "/post/:id",
      element: <Post />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
  export default Routes;