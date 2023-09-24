import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import MyLoans from "../pages/MyLoans";
import PaymentDetails from "../pages/PaymentDetails";

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
        path: '/paymentDetails',
        element: <PaymentDetails />
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />
    },

])

export default routes