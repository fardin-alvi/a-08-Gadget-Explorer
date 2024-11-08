import { createBrowserRouter } from "react-router-dom"
import BaseLayout from "../layouts/BaseLayout"
import Home from "../pages/Home"
import Statistics from "../pages/Statistics"
import Dashboard from "../pages/Dashboard"
import Card from "../components/Card"
import GadgetsDetails from "../components/GadgetsDetails"
import Gadgets from "../components/Gadgets"
import Cards from "../components/Cards"
import FilterCard from "../components/Filtercard"
import ErrorPage from "../pages/ErrorPage"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        loader: () => fetch('/Gadgets.json'),
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('/Gadgets.json'),
                children: [
                    {
                        path: "/category/:category",
                        loader: () => fetch('/Gadgets.json'),
                        element: <Cards/>
                    },
                ]
            },
            
            {
                path: '/gadgets/:product_id',
                element: <GadgetsDetails />,
                loader:()=> fetch('/Gadgets.json')
            },
            {
                path: "/statistics",
                element:<Statistics/>
            },
            {
                path: "dashboard",
                element: <Dashboard />,
                loader: () => fetch('/Gadgets.json')
            }
        ]
    }
])

export default routes