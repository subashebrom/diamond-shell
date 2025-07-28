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
import PrivecyPolicy from "../pages/PrivecyPolicy";
import RefundPolicy from "../pages/RefundPolicy";
import TermsCond from "../pages/TermsCond";
import FreeFire from "../pages/FreeFire";
import PubgMobile from "../pages/PubgMobile";
import CallOfDuty from "../pages/CallOfDuty";
import Valorant from "../pages/Valorant";
import ApexLegend from "../pages/ApexLegend";
import FreeFireDiamond from "../pages/FreeFireDiamond";
import CheckOut from "../pages/CheckOut";
import VpPoint from "../pages/VpPoint";

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
            {
                path: '/privecy-policy',
                element: <PrivecyPolicy/>
            },
            {
                path: '/refund-policy',
                element: <RefundPolicy/>
            },
            {
                path: '/terms-condition',
                element: <TermsCond/>
            },
            {
                path: '/free-fire',
                element: <FreeFire/>
            },
            {
                path: '/pubg-mobile',
                element: <PubgMobile/>
            },
            {
                path: '/call-of-duty',
                element: <CallOfDuty/>
            },
            {
                path: '/valorant',
                element: <Valorant/>
            },
            {
                path: '/apex-legend',
                element: <ApexLegend/>
            },
            {
                path: '/free-fire-daiomond',
                element: <FreeFireDiamond/>
            },
            {
                path: '/check-out',
                element: <CheckOut/>
            },
            {
                path: '/vp-points',
                element : <VpPoint/>
            },
        ]
    }
]);
export default MainRoutes;