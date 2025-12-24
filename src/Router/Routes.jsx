import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Component/Shared/ErrorPage";
import Home from "../Pages/Home";
import AllTickets from "../Pages/AllTickets";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/auth/Login";
import Register from "../Pages/auth/Register";


export const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'all-tickets',
                Component:AllTickets 
            },
            {
                path:'*',
                Component:ErrorPage
            }
        ]
    },
    {
        path:'auth',
        Component:AuthLayout,
        children:[
            {
                path:'/auth/login',
                Component:Login
            },
            {
                path:'/auth/register',
                Component:Register

            }
        ]
    }
])