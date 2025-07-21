import { NavLink } from 'react-router';


const TopNav = () => {
    return (
        <div className='fixed top-0 lg:w-full bg-mainbg font-Ubuntu border-b border-b-gray-700 z-10'>
            <div className='lg:flex lg:w-[80%] relative mx-auto flex items-center justify-between border-r border-r-gray-700 border-l border-l-gray-700 py-2 px-8'>
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
                <div className='lg:flex text-white lg:gap-7'>
                    <NavLink to='/' className={({isActive}) =>
                        `group transition-all duration-150 delay-75 ease-in-out lg:text-lg ${
                            isActive
                            ? "text-hoverbdr border-b-2"
                            : "hover:text-hoverbdr hover:border-b-2"
                        }`}>
                        Home
                    </NavLink>
                    <NavLink to='/about' className={({isActive}) =>
                        `group transition-all duration-150 delay-75 ease-in-out lg:text-lg ${
                            isActive
                            ? "text-hoverbdr border-b-2"
                            : "hover:text-hoverbdr hover:border-b-2"
                        }`}>
                        About
                    </NavLink>
                    <NavLink to='/contact' className={({isActive}) =>
                        `group transition-all duration-150 delay-75 ease-in-out lg:text-lg ${
                            isActive
                            ? "text-hoverbdr border-b-2"
                            : "hover:text-hoverbdr hover:border-b-2"
                        }`}>
                        Contact
                    </NavLink>
                    <NavLink to='/reviews' className={({isActive}) =>
                        `group transition-all duration-150 delay-75 ease-in-out lg:text-lg ${
                            isActive
                            ? "text-hoverbdr border-b-2"
                            : "hover:text-hoverbdr hover:border-b-2"
                        }`}>
                        Customer Reviews
                    </NavLink>
                </div>
                <div className='text-white'>
                    <NavLink to='/registration' className={({isActive}) =>
                        `group transition-all duration-150 delay-75 ease-in-out lg:text-lg ${
                            isActive
                            ? "text-hoverbdr border-b-2"
                            : "hover:text-hoverbdr hover:border-b-2"
                        }`}>
                        Registration
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default TopNav;