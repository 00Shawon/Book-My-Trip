import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Component/Shared/ErrorPage";
import Home from "../Pages/Home";
import AllTickets from "../Pages/AllTickets";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/auth/Login";
import Register from "../Pages/auth/Register";
import MyProfile from "../Pages/MyProfile";
import DashboardLayout from "../Layout/DashboardLayout";
import AddTicket from "../Pages/Dashboard/Vendor/AddTicket";
import MyBookedTickets from "../Pages/Dashboard/User/MyBookedTickets";
import TransactionHistory from "../Pages/Dashboard/User/TransactionHistory";
import AddTickets from "../Pages/Dashboard/Vendor/AddTickets";
import MyAddedTickets from "../Pages/Dashboard/Vendor/MyAddedTickets";
import RequestedBookings from "../Pages/Dashboard/Vendor/RequestedBookings";
import RevenueOverview from "../Pages/Dashboard/Vendor/RevenueOverview";
import ManageTickets from "../Pages/Dashboard/Admin/ManageTickets";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import AdvertiseTickets from "../Pages/Dashboard/Admin/AdvertiseTickets";
import PrivateRoute from "./PrivateRoute";
import SeeDetails from "../Pages/SeeDetails";



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
                path:'my-profile',
                Component:MyProfile
            },
            {
                path:'see-details/:id',
                Component: SeeDetails
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
                path:'login',
                Component:Login
            },
            {
                path:'register',
                Component:Register

            },
            {
                path:'see-details',
                Component: SeeDetails
            }
        ]
    },
    {
        path:'dashboard',
        element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
        children:[
            {
                index:true,
                Component:MyProfile
            },
            {
                path:'add-ticket',
                Component: AddTicket
            },
            {
                path:'my-booked-tickets',
                Component: MyBookedTickets
            },
            {
                path:'transaction-history',
                Component: TransactionHistory
            },
            {
                path:'add-tickets',
                Component: AddTickets
            },
            {
                path:'my-added-tickets',
                Component: MyAddedTickets
            },
            {
                path:'requested-bookings',
                Component: RequestedBookings
            },
            {
                path:'revenue-overview',
                Component: RevenueOverview
            },
            {
                path:'manage-tickets',
                Component: ManageTickets
            },
            {
                path:'manage-users',
                Component: ManageUsers
            },
            {
                path:'advertise-tickets',
                Component: AdvertiseTickets
            },
        ]
    }
   
])