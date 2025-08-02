import { faChevronLeft, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router';

const FreeFire = () => {
    return (
        <div className="lg:w-full bg-mainbg lg:h-screen lg:mt-12 font-Ubuntu">
            <section className="lg:w-[1296px] lg:h-screen bg-primarybg border-r border-r-gray-700 border-l border-l-gray-700 mx-auto justify-items-center lg:pt-8 text-white">
                <NavLink to='/' className="flex">
                    <div className=" pb-4">
                    <div className="home-search-first-box ">
                        <div className="home-search-second-box">
                            <div className="home-search-box flex items-center text-center justify-between lg:text-md outline-none px-2" >
                                <span><FontAwesomeIcon icon={faChevronLeft}/></span>
                                <h1>Choose Your Game Server</h1>
                                <span><FontAwesomeIcon icon={faGamepad}/></span>
                            </div>
                        </div>
                    </div>
                </div>
                </NavLink>
                {/* === Card Section === */}
                <div className="mobilesh w-full px-4 py-4 lg:grid lg:grid-cols-4 gap-6 text-white">
                    <div
                        className="card relative w-full text-center hover:text-hoverbdr hover:scale-105 transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                        >
                        <img className="w-full h-62 object-cover" src="/src/assets/image/free-fire.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto cursor-pointer">
                            <div className="triangle absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <button className="card-btn w-60 bg-btnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </button>
                        </div>
                        <div className="flag absolute w-full top-0 flex items-center justify-center bg-white/60">
                            <img className="size-10" src="/src/assets/image/bd-flag.png" alt="" />
                            <h2 className="lg:text-xl text-[#2b3550]"> 
                             Bangladesh</h2>
                        </div>
                        <div className="absolute top-30 w-full flex items-center justify-center bg-white/60 text-[#2b3550] font-semibold text-lg">
                            <h2>Coming Soon</h2>
                        </div>
                    </div>
                    <div
                        className="card relative w-full text-center hover:text-hoverbdr hover:scale-105 transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                        >
                        <img className="w-full h-62 object-cover" src="/src/assets/image/free-fire.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto cursor-pointer">
                            <div className="triangle absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <button className="card-btn w-60 bg-btnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </button>
                        </div>
                        <div className="flag absolute w-full top-0 flex items-center justify-center bg-white/60">
                            <img className="size-10" src="/src/assets/image/nepal-flag.png" alt="" />
                            <h2 className="lg:text-xl text-[#2b3550]"> 
                             India</h2>
                        </div>
                        <div className="absolute top-30 w-full flex items-center justify-center bg-white/60 text-[#2b3550] font-semibold text-lg">
                            <h2>Coming Soon</h2>
                        </div>
                    </div>
                    <div
                        className="card relative w-full text-center hover:text-hoverbdr hover:scale-105 transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                        >
                        <img className="w-full h-62 object-cover" src="/src/assets/image/free-fire.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto cursor-pointer">
                            <div className="triangle absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <button className="card-btn w-60 bg-btnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </button>
                        </div>
                        <div className="flag absolute w-full top-0 flex items-center justify-center bg-white/60">
                            <img className="size-10" src="/src/assets/image/pakistan-flag.png" alt="" />
                            <h2 className="lg:text-xl text-[#2b3550]"> 
                             Pakistan</h2>
                        </div>
                        <div className="absolute top-30 w-full flex items-center justify-center bg-white/60 text-[#2b3550] font-semibold text-lg">
                            <h2>Coming Soon</h2>
                        </div>
                    </div>
                    <div
                        className="card relative w-full text-center hover:text-hoverbdr hover:scale-105 transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                        >
                        <img className="w-full h-62 object-cover" src="/src/assets/image/free-fire.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto cursor-pointer">
                            <div className="triangle absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <button className="card-btn w-60 bg-btnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </button>
                        </div>
                        <div className="flag absolute w-full top-0 flex items-center justify-center bg-white/60">
                            <img className="size-10" src="/src/assets/image/indonesia-flag.png" alt="" />
                            <h2 className="lg:text-xl text-[#2b3550]"> 
                             Indonesia</h2>
                        </div>
                        <div className="absolute top-30 w-full flex items-center justify-center bg-white/60 text-[#2b3550] font-semibold text-lg">
                            <h2>Coming Soon</h2>
                        </div>
                    </div>
                    <div
                        className="card relative w-full text-center hover:text-hoverbdr hover:scale-105 transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                        >
                        <img className="w-full h-62 object-cover" src="/src/assets/image/free-fire.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto cursor-pointer">
                            <div className="triangle absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <button className="card-btn w-60 bg-btnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </button>
                        </div>
                        <div className="flag absolute w-full top-0 flex items-center justify-center bg-white/60">
                            <img className="size-10" src="/src/assets/image/brazil-flag.png" alt="" />
                            <h2 className="lg:text-xl text-[#2b3550]"> 
                            Brazil</h2>
                        </div>
                        <div className="absolute top-30 w-full flex items-center justify-center bg-white/60 text-[#2b3550] font-semibold text-lg">
                            <h2>Coming Soon</h2>
                        </div>
                    </div>
                    <div
                        className="card relative w-full text-center hover:text-hoverbdr hover:scale-105 transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                        >
                        <img className="w-full h-62 object-cover" src="/src/assets/image/free-fire.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto cursor-pointer">
                            <div className="triangle absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <button className="card-btn w-60 bg-btnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </button>
                        </div>
                        <div className="flag absolute w-full top-0 flex items-center justify-center bg-white/60">
                            <img className="size-10" src="/src/assets/image/russia-flag.png" alt="" />
                            <h2 className="lg:text-xl text-[#2b3550]"> 
                             Dubai</h2>
                        </div>
                        <div className="absolute top-30 w-full flex items-center justify-center bg-white/60 text-[#2b3550] font-semibold text-lg">
                            <h2>Coming Soon</h2>
                        </div>
                    </div>
                    <div
                        className="card relative w-full text-center hover:text-hoverbdr hover:scale-105 transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                        >
                        <img className="w-full h-62 object-cover" src="/src/assets/image/free-fire.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto cursor-pointer">
                            <div className="triangle absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <button className="card-btn w-60 bg-btnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </button>
                        </div>
                        <div className="flag absolute w-full top-0 flex items-center justify-center bg-white/60">
                            <img className="size-10" src="/src/assets/image/malaysia-flag.png" alt="" />
                            <h2 className="lg:text-xl text-[#2b3550]"> 
                            Malaysia</h2>
                        </div>
                        <div className="absolute top-30 w-full flex items-center justify-center bg-white/60 text-[#2b3550] font-semibold text-lg">
                            <h2>Coming Soon</h2>
                        </div>
                    </div>
                    <div
                        className="card relative w-full text-center hover:text-hoverbdr hover:scale-105 transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                        >
                        <img className="w-full h-62 object-cover" src="/src/assets/image/free-fire.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto cursor-pointer">
                            <div className="triangle absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <button className="card-btn w-60 bg-btnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </button>
                        </div>
                        <div className="flag absolute w-full top-0 flex items-center justify-center bg-white/60">
                            <img className="size-10" src="/src/assets/image/malaysia-flag.png" alt="" />
                            <h2 className="lg:text-xl text-[#2b3550]"> 
                            Singapur</h2>
                        </div>
                        <div className="absolute top-30 w-full flex items-center justify-center bg-white/60 text-[#2b3550] font-semibold text-lg">
                            <h2>Coming Soon</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FreeFire;