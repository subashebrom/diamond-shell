import { faDiscord, faFacebook, faInstagram, faSnapchat, faWhatsapp, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

const Bottom = () => {
    return (
        <div className="w-full h-auto text-white bg-mainbg font-Ubuntu">
            <footer className="relative w-[80%] mx-auto border-r border-r-gray-700 border-l border-l-gray-700 px-8 border-t border-t-gray-700 py-12">
                {/* === DIAMOND === */}
                <div className="absolute -top-10 -right-5 size-10 z-80">
                    <img src="/image/diamond.png" alt="" />
                </div>
                <div className="absolute -top-10 -left-5 size-10 z-80">
                    <img src="/image/diamond.png" alt="" />
                </div>
                <section className="lg:grid lg:grid-cols-4 items-start">
                    {/* === Logo Section === */}
                    <div>
                        <h1 className="lg:text-xl">Logo image</h1>
                    </div>
                    {/* === About Section === */}
                    <div className="grid gap-0">
                        <h1 className="lg:text-xl">Contact Us</h1>
                        <div className="grid mt-1">
                            <NavLink to='' className="lg:text-lg hover:text-hoverbdr transition-all duration-200 delay-75 ease-in-out">
                                <span className="mr-1 lg:text-xl"> <FontAwesomeIcon icon={faDiscord}/> </span>
                                Join Our Discord Server
                            </NavLink>
                            <NavLink to='' className="lg:text-lg hover:text-hoverbdr transition-all duration-200 delay-75 ease-in-out">
                                <span className="mr-1 lg:text-xl"> <FontAwesomeIcon icon={faWhatsapp}/> </span>
                                Chat with Us!
                            </NavLink>
                            <NavLink to='' className="lg:text-lg hover:text-hoverbdr transition-all duration-200 delay-75 ease-in-out">
                                <span className="mr-1 lg:text-xl"> <FontAwesomeIcon icon={faPhone}/> </span>
                                +880 1315291293
                            </NavLink>
                            <NavLink to='' className="lg:text-lg hover:text-hoverbdr transition-all duration-200 delay-75 ease-in-out">
                                <span className="mr-1 lg:text-xl"> <FontAwesomeIcon icon={faEnvelope}/> </span>
                                subashebrom@gmail.com
                            </NavLink>
                        </div>
                    </div>
                    {/* === Service Section === */}
                    <div className="lg:grid">
                        <h1 className="lg:text-xl">Security</h1>
                        <div className="grid mt-1">
                            <NavLink to='' className="lg:text-lg hover:text-hoverbdr transition-all duration-200 delay-75 ease-in-out">
                                Privecy Policy
                            </NavLink>
                            <NavLink to='' className="lg:text-lg hover:text-hoverbdr transition-all duration-200 delay-75 ease-in-out">
                                Refund Policy
                            </NavLink>
                            <NavLink to='' className="lg:text-lg hover:text-hoverbdr transition-all duration-200 delay-75 ease-in-out">
                               Terms and Conditions
                            </NavLink>
                        </div>
                    </div>
                    {/* === Social Section === */}
                    <div className="w-full lg:flex lg:flex-col gap-2">
                        <h1 className="lg:text-xl">Social</h1>
                        <div className="flex items-center justify-between px-2 py-1 gap-2 lg:text-xl border border-gray-700 rounded-full hover:bg-blue-600 hover:scale-105 transition-all duration-400 dealy-75 ease-in-out">
                            <span className="lg:text-2xl"><FontAwesomeIcon icon={faFacebook}/></span>
                            <h2 className="lg:font-semibold lg:text-xl">Facebook</h2>
                            <span></span>
                        </div>
                        <div className="flex items-center justify-between px-2 py-1 gap-2 lg:text-xl border border-gray-700 rounded-full hover:bg-red-600 hover:scale-105 transition-all duration-400 dealy-75 ease-in-out">
                            <span className="lg:text-2xl"><FontAwesomeIcon icon={faYoutube}/></span>
                            <h2 className="lg:font-semibold lg:text-xl">Youtube</h2>
                            <span></span>
                        </div>
                        <div className="flex items-center justify-between px-2 py-1 gap-2 lg:text-xl border border-gray-700 rounded-full hover:bg-hoverbdr hover:scale-105 transition-all duration-400 dealy-75 ease-in-out">
                            <span className="lg:text-2xl"><FontAwesomeIcon icon={faXTwitter}/></span>
                            <h2 className="lg:font-semibold lg:text-xl">Twitter</h2>
                            <span></span>
                        </div>
                        <div className="flex items-center justify-between px-2 py-1 gap-2 lg:text-xl border border-gray-700 rounded-full hover:bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:scale-105 transition-all duration-400 dealy-75 ease-in-out">
                            <span className="lg:text-2xl"><FontAwesomeIcon icon={faInstagram}/></span>
                            <h2 className="lg:font-semibold lg:text-xl">Instagram</h2>
                            <span></span>
                        </div>
                        <div className="flex items-center justify-between px-2 py-1 gap-2 lg:text-xl border border-gray-700 rounded-full hover:bg-yellow-400 hover:scale-105 transition-all duration-400 dealy-75 ease-in-out">
                            <span className="lg:text-2xl"><FontAwesomeIcon icon={faSnapchat}/></span>
                            <h2 className="lg:font-semibold lg:text-xl">Snapchat</h2>
                            <span></span>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default Bottom;