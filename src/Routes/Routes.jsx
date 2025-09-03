import Home from '../Components/Home';
import LogIn from '../Pages/LogIn/LogIn';
import Menu from '../Pages/Menu/Menu/Menu';
import OrderFood from '../Pages/OrderFood/OrderFood';
import Secret from '../Pages/Shared/Secret/Secret';
import SignUP from '../Pages/SignUp/SignUP';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Main from './../Main/Main';
import {
  createBrowserRouter,
} from "react-router-dom";

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
            path: 'menu',
            element: <Menu></Menu>
        },
        {
            path: 'order/:category',
            element: <OrderFood></OrderFood>
        },
        {
            path: 'login',
            element: <LogIn></LogIn>
        },
        {
            path: 'signup',
            element: <SignUP></SignUP>
        },
        {
            path: 'secret',
            element: <PrivateRoute><Secret></Secret></PrivateRoute>
        },
    ]
  },
]);