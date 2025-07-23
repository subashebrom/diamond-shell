import { NavLink } from "react-router";


const About = () => {
    return (
        <div className="lg-w-full h-fit text-white mt-12 bg-mainbg font-Ubuntu">
            <section className="lg:w-[80%] mx-auto justify-items-center bg-primarybg border-r border-r-gray-700 border-l border-l-gray-700">
                {/* === Card Section === */}
                <div className="grid grid-cols-4 gap-6 p-6">
                    <div className="card w-full">
                        <NavLink>
                            <img className="h-62" src="/src/assets/image/apex-legend.jpg" alt="" />
                        </NavLink>
                    </div>
                    <div className="card w-full">
                        <NavLink>
                            <img className="h-62" src="/src/assets/image/apex-legend.jpg" alt="" />
                        </NavLink>
                    </div>
                    <div className="card w-full">
                        <NavLink>
                            <img className="h-62" src="/src/assets/image/apex-legend.jpg" alt="" />
                        </NavLink>
                    </div>
                    <div className="card w-full">
                        <NavLink>
                            <img className="h-62" src="/src/assets/image/apex-legend.jpg" alt="" />
                        </NavLink>
                    </div>
                    <div className="card w-full">
                        <NavLink>
                            <img className="h-62" src="/src/assets/image/apex-legend.jpg" alt="" />
                        </NavLink>
                    </div>
                    <div className="card w-full">
                        <NavLink>
                            <img className="h-62" src="/src/assets/image/apex-legend.jpg" alt="" />
                        </NavLink>
                    </div>
                    <div className="card w-full">
                        <NavLink>
                            <img className="h-62" src="/src/assets/image/apex-legend.jpg" alt="" />
                        </NavLink>
                    </div>
                    <div className="card w-full">
                        <NavLink>
                            <img className="h-62" src="/src/assets/image/apex-legend.jpg" alt="" />
                        </NavLink>
                    </div>
                    <div className="card w-full">
                        <NavLink>
                            <img className="h-62" src="/src/assets/image/apex-legend.jpg" alt="" />
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;