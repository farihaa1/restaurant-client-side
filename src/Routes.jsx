import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Order from "./Pages/Order/Order";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Dashboard from "./layout/Dashboard";
import Cart from "./Pages/Dashboard/Cart";
import AllUsers from "./Pages/Dashboard/AllUsers";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element:<Home></Home>,
        },
        {
            path: '/menu',
            element:<Menu></Menu>,
        },
       
        {
            path: '/order/:category',
            element:<Order></Order>,
        },
        {
            path: '/login',
            element:<Login></Login>,
        },
        {
            path: '/sign-up',
            element:<Register></Register>,
        },
        
      ]
    },
    {
      path:"dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'cart',
          element:<Cart></Cart>
        },

        //Admin routes
        {
          path: 'users',
          element:<AllUsers></AllUsers>
        }
      ]
    }
  ]);

export default router;