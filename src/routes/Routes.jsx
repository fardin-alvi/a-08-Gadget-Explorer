import { createBrowserRouter } from "react-router-dom"
import BaseLayout from "../layouts/BaseLayout"
import Home from "../pages/Home"
import Statistics from "../pages/Statistics"
import Dashboard from "../pages/Dashboard"
import Card from "../components/Card"
import GadgetsDetails from "../components/GadgetsDetails"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        loader: () => fetch('/Gadgets.json'),
        children: [
            {
                path: "/",
                element: <Home />,
                // loader: () => fetch('/Gadgets.json'),
                // children: [
                //     {
                //         path: "/catagory/:category",
                //         loader: () => fetch('/Gadgets.json'),
                //         element:<Card/>
                //     }
                // ]
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
                path: "/dashboard",
                element:<Dashboard/>
            }
        ]
    }
])

export default routes