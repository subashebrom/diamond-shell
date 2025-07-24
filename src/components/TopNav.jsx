import { NavLink } from 'react-router';
import "../css/TopNav.css"
import "../js/TopNav.js"

const TopNav = () => {
    return (
        <div className='fixed top-0 lg:w-full bg-mainbg font-Ubuntu border-b border-b-gray-700 z-10'>
            <div className='lg:flex lg:w-[80%] topActiveBtn relative mx-auto flex items-center justify-between border-r border-r-gray-700 border-l border-l-gray-700 py-2 px-8'>
                {/* === DIAMOND === */}
                <div className="absolute bottom-0 -right-5 size-10 z-80">
                    <img src="/image/diamond.png" alt="" />
                </div>
                <div className="absolute bottom-0 -left-5 size-10 z-80">
                    <img src="/image/diamond.png" alt="" />
                </div>
                {/* === TOP NAV ITEMS === */}
                <div>
                    <NavLink to='/' className='text-white text-2xl'>
                        DIAMOND
                    </NavLink>
                </div>
                <div className='lg:flex text-white lg:gap-8'>
                    <div className="top-btn">
                        <NavLink to='/' className={({isActive}) =>
                            `group transition-all duration-150 delay-75 ease-in-out lg:text-lg active-btn px-4 flex items-center justify-center${
                                isActive
                                ? ""
                                : ""
                            }`}>
                            Home
                        </NavLink>
                        <div className="top-triangle"></div>
                        <div className="btm-triangle"></div>
                    </div>
                    <div className="top-btn">
                        <NavLink to='/about' className={({isActive}) =>
                            `group transition-all duration-150 delay-75 ease-in-out lg:text-lg active-btn px-4 flex items-center justify-center${
                                isActive
                                ? ""
                                : ""
                            }`}>
                            About
                        </NavLink>
                        <div className="top-triangle"></div>
                        <div className="btm-triangle"></div>
                    </div>
                    <div className="top-btn">
                        <NavLink to='/contact' className={({isActive}) =>
                            `group transition-all duration-150 delay-75 ease-in-out lg:text-lg active-btn px-4 flex items-center justify-center${
                                isActive
                                ? ""
                                : ""
                            }`}>
                            Contact
                        </NavLink>
                        <div className="top-triangle"></div>
                        <div className="btm-triangle"></div>
                    </div>
                    <div className="top-btn">
                        <NavLink to='reviews' className={({isActive}) =>
                            `group transition-all duration-150 delay-75 ease-in-out lg:text-lg active-btn px-4 flex items-center justify-center${
                                isActive
                                ? ""
                                : ""
                            }`}>
                            Reviews
                        </NavLink>
                        <div className="top-triangle"></div>
                        <div className="btm-triangle"></div>
                    </div>
                </div>
                <div className='text-white'>
                    <div className="top-btn">
                        <NavLink to='/signup' className={({isActive}) =>
                            `group transition-all duration-150 delay-75 ease-in-out lg:text-lg active-btn px-4 flex items-center justify-center${
                                isActive
                                ? ""
                                : ""
                            }`}>
                            {/* After signing up, the registration will be (Registered). */}
                            Registration
                        </NavLink>
                        <div className="rtop-triangle"></div>
                        <div className="rbtm-triangle"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;