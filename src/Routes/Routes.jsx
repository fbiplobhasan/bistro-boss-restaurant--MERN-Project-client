import Home from '../Components/Home';
import Menu from '../Pages/Menu/Menu/Menu';
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
            path: '/menu',
            element: <Menu></Menu>
        },
    ]
  },
]);