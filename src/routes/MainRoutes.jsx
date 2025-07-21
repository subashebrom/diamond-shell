import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import TopNav from './../components/TopNav';
import Bottom from './../components/Bottom';
import Loging from './../auth/Loging';
import SignUp from './../auth/SignUp';
import Home from "../pages/Home";
import About from './../pages/About';
import Contact from './../pages/Contact';
import CustomerReview from "../pages/CustomerReview";
import Registration from "../pages/Registration";

const MainRoutes = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayOut/>,
        children: [
            {
                path: 'top-navbar',
                element: <TopNav/>
            },
            {
                path: '/footer',
                element: <Bottom/>
            },
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/reviews',
                element: <CustomerReview/>
            },
            {
                path: '/registration',
                element: <Registration/>
            },
            {
                path:'/login',
                element: <Loging/>
            },
            {
                path:'/signup',
                element: <SignUp/>
            },
        ]
    }
]);
export default MainRoutes;