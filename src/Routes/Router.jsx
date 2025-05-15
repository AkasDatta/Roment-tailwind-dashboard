import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import LoginPage from "../AllPages/Pages/LoginPage/LoginPage";
import Home from "../AllPages/Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <LoginPage></LoginPage>
        }
    ]
  },
]);