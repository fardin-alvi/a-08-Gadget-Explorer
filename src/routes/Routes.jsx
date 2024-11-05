import { createBrowserRouter } from "react-router-dom"
import BaseLayout from "../layouts/BaseLayout"
import Home from "../pages/Home"
import Statistics from "../pages/Statistics"
import Dashboard from "../pages/Dashboard"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('/Gadgets.json'),
                children: [
                    {
                        path: "/catagory",
                        element:<Dashboard/>
                    }
                ]
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