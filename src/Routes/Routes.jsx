import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Section2 from "../Pages/Home/Home/Section2";
import Section3 from "../Pages/Home/Home/Section3";
import Section4 from "../Pages/Home/Home/Section4";
import Contact from "../Pages/Contact/Contact";


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
                path: '/talks',
                element: <Section2></Section2>
            },
            {
                path: '/testimonials',
                element: <Section3></Section3>
            },
            {
                path: '/books',
                element: <Section2></Section2>
            },
            {
                path: '/blogs',
                element: <Section4></Section4>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    },
]);