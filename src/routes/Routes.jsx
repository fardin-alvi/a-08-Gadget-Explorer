import { createBrowserRouter, Navigate, NavLink } from "react-router-dom"
import Home from "../pages/Home"
import Statistics from "../pages/Statistics"
import Dashboard from "../pages/Dashboard"
import GadgetsDetails from "../components/GadgetsDetails"
import ErrorPage from "../pages/ErrorPage"
import FilterCard from "../components/Filtercard"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <FilterCard />,
                loader:()=> fetch('../Gadgets.json'),
                
            },
            {
                path: "/category/:category",
                element: <FilterCard />,
                loader: () => fetch('../Gadgets.json'),

            },
        ]
    },      
    {
        path: '/gadgets/:product_id',
        element: <GadgetsDetails />,
        loader: () => fetch('../Gadgets.json')
    },
    {
        path: "/statistics",
        element: <Statistics />
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        loader: () => fetch('/Gadgets.json')
    }
])
export default routes