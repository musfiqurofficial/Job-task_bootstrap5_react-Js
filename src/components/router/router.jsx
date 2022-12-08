import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../root/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
        ]
    }
])