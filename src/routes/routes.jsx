import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import MyLoans from "../pages/MyLoans";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signUp',
        element: <SignUp />
    },
    {
        path: '/myLoans',
        element: <MyLoans />
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />
    },

])

export default routes