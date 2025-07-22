import { NavLink } from "react-router";

const Home = () => {
    return (
        <div className="lg-w-full h-fit text-white mt-12 bg-mainbg font-Ubuntu">
            <section className="lg:w-[80%] mx-auto justify-items-center bg-primarybg border-r border-r-gray-700 border-l border-l-gray-700">
                <div className="pt-4">
                    <h1 className="lg:w-90 lg:text-2xl text-center bg-cardbg rounded-full py-1 px-8">FIND YOUR OWN GAMES</h1>
                </div>
                {/* === Adds Section (Carousel) === */}
                <div></div>
                {/* === CARDS SECTION === */}
                <div className="w-full px-4 py-4 grid grid-cols-4 gap-6 text-gray-900">
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/free-fire.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">FREE FIRE</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/pubg.png" alt="" />
                        <h2 className="lg:text-lg py-2">PUBG MOBILE</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/call-of-duty.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">CALL OF DUTY</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/valorant.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">VALORANT</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/apex-legend.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">APEX LEGEND</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/warezone.webp" alt="" />
                        <h2 className="lg:text-lg py-2">WARZONE</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/blood-strike.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">BLOOD STRIKE</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/doom-eternal.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">DOOM ETERNAL</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/elden.webp" alt="" />
                        <h2 className="lg:text-lg py-2">ELDEN RING</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/cyberpunk.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">CYBER PUNK 2077</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/the-witcher.webp" alt="" />
                        <h2 className="lg:text-lg py-2">THE WITCHER 3:WILD HUNT</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/baldurs.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">BALDUR'S GATE 3</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/baldurs.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">FORTNITE</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/baldurs.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">CLASS OF CLANCE</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/baldurs.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">DELTA FORCE</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/baldurs.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">FAR LIGHT 84</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/baldurs.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">GANSHIN IMPACT</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/baldurs.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">LEAGUE OF LEGENDS</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/baldurs.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">MOBILE LEGENDS: BANG BANG</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/baldurs.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">SAUSAGE MAN</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/baldurs.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">SOLO LEVELING: ARISE</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/baldurs.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">ASPHALT LEGEND</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/baldurs.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">CALL OF DUTY MOBILE</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/baldurs.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">ROBLOX</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/baldurs.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">BRAWL STARS</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/baldurs.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">SMASH LEGENDS</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/baldurs.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">DEVIL MAY CRY</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/baldurs.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">CLASH ROYALE</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/baldurs.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">MORTAL KOMBAT</h2>
                    </NavLink>
                    <NavLink to=''
                    className="w-full text-center bg-white rounded-lg border border-gray-700 hover:text-hoverbdr hover:scale-105 hover:border-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out"
                    >
                        <img className="w-full h-62 rounded-t-lg" src="/src/assets/image/baldurs.jpg" alt="" />
                        <h2 className="lg:text-lg py-2">BRAWL HALLA</h2>
                    </NavLink>
                </div>
            </section>
        </div>
    );
};

export default Home;