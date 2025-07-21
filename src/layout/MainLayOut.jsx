import TopNav from '../components/TopNav';
import { Outlet } from 'react-router';
import Bottom from '../components/Bottom';

const MainLayOut = () => {
    return (
        <div>
            <TopNav/>
            <Outlet/>
            <Bottom/>
        </div>
    );
};

export default MainLayOut;