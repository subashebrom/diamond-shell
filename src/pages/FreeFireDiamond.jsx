import { faBangladeshiTakaSign, faChevronLeft, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../css/FreeFireDiamond.css";
import { NavLink } from 'react-router';

const FreeFireDiamond = () => {
    return (
        <div className='lg:w-full bg-mainbg lg:h-auto lg:mt-12 font-Ubuntu'>
            <section className='lg:w-[1296px] lg:h-auto bg-primarybg border-r border-r-gray-700 border-l border-l-gray-700 mx-auto justify-items-center lg:pt-8 text-white p-2'>
                <NavLink to='/free-fire'>
                    <div
                        className="w-full text-center hover:text-hoverbdr transition-all duration-400 dealy-75 hover:w-full ease-in-out justify-items-center lg:mb-4"
                        >
                        <div className="relative mt-2 mb-2 mx-auto cursor-pointer">
                            <div className="country-triangle-One absolute left-0 top-0"></div>
                            <div className="country-triangle-two absolute right-0 top-0"></div>
                            <div className="country-triangle-three absolute left-0 bottom-0"></div>
                            <div className="country-triangle-four absolute right-0 bottom-0"></div>
                            <button className="country-BTN bg-btnbg cursor-pointer py-2 flex items-center justify-between px-4">
                                <span><FontAwesomeIcon icon={faChevronLeft}/></span>
                                <p className='text-2xl'>Banladesh</p>
                                <img className="size-10" src="/src/assets/image/bd-flag.png" alt="" />
                            </button>
                        </div>
                        <h1 className='userInpt bg-pcbg px-4 py-2 text-2xl text-white/70 mb-4 mt-8'>FREE FIRE DIAMOND TOP-UP BANGLADESH</h1>
                    </div>
                </NavLink>
                <div className='lg:w-full lg:grid lg:grid-cols-4 p-2 lg:gap-5 border border-gray-700'>
                    <div className="relative pt-1">
                        <div className="diamond-first-box relative">
                            <div className="diamond-second-box">
                                <div className="diamond-third-box lg:text-md outline-none">
                                    25 Diamonds
                                    <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 25 TK</p>
                                </div>
                            </div>
                                <span className="search-icon absolute right-5 cursor-pointer">
                                    <img className='size-8' src="/public/image/diamond.png" alt="" />
                                </span>
                        </div>
                        <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                            <div className='flex items-center justify-between p-1'>
                                <p className='lg:text-sm'>Weekly Pass
                                    <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                </p>
                                <p className='lg:text-sm'>1</p>
                                {/* === Increment and Decrement Button === */}
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='bg-red-500 w-8 text-center'>-</p>
                                    <p className='bg-green-700 w-8 text-center'>+</p>
                                </div>
                            </div>
                            <hr className='text-gray-500' />
                            <div className='items-center justify-between p-1'>
                                <p className='text-sm'>Total: 150 Tk</p>
                                <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                    <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                        <button className=''>Reset</button>
                                    </div>
                                    <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                        <button className=''>Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative pt-1">
                        <div className="diamond-first-box relative">
                            <div className="diamond-second-box">
                                <div className="diamond-third-box lg:text-md outline-none">
                                    25 Diamonds
                                    <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 25 TK</p>
                                </div>
                            </div>
                                <span className="search-icon absolute right-5 cursor-pointer">
                                    <img className='size-8' src="/public/image/diamond.png" alt="" />
                                </span>
                        </div>
                        <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                            <div className='flex items-center justify-between p-1'>
                                <p className='lg:text-sm'>Weekly Pass
                                    <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                </p>
                                <p className='lg:text-sm'>1</p>
                                {/* === Increment and Decrement Button === */}
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='bg-red-500 w-8 text-center'>-</p>
                                    <p className='bg-green-700 w-8 text-center'>+</p>
                                </div>
                            </div>
                            <hr className='text-gray-500' />
                            <div className='items-center justify-between p-1'>
                                <p className='text-sm'>Total: 150 Tk</p>
                                <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                    <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                        <button className=''>Reset</button>
                                    </div>
                                    <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                        <button className=''>Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative pt-1">
                        <div className="diamond-first-box relative">
                            <div className="diamond-second-box">
                                <div className="diamond-third-box lg:text-md outline-none">
                                    115 Diamonds
                                    <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 75 TK</p>
                                </div>
                            </div>
                                <span className="search-icon absolute right-5 cursor-pointer">
                                    <img className='size-8' src="/public/image/diamond.png" alt="" />
                                </span>
                        </div>
                        <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                            <div className='flex items-center justify-between p-1'>
                                <p className='lg:text-sm'>Weekly Pass
                                    <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                </p>
                                <p className='lg:text-sm'>1</p>
                                {/* === Increment and Decrement Button === */}
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='bg-red-500 w-8 text-center'>-</p>
                                    <p className='bg-green-700 w-8 text-center'>+</p>
                                </div>
                            </div>
                            <hr className='text-gray-500' />
                            <div className='items-center justify-between p-1'>
                                <p className='text-sm'>Total: 150 Tk</p>
                                <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                    <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                        <button className=''>Reset</button>
                                    </div>
                                    <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                        <button className=''>Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative pt-1">
                        <div className="diamond-first-box relative">
                            <div className="diamond-second-box">
                                <div className="diamond-third-box lg:text-md outline-none">
                                    240 Diamonds
                                    <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                </div>
                            </div>
                                <span className="search-icon absolute right-5 cursor-pointer">
                                    <img className='size-8' src="/public/image/diamond.png" alt="" />
                                </span>
                        </div>
                        <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                            <div className='flex items-center justify-between p-1'>
                                <p className='lg:text-sm'>Weekly Pass
                                    <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                </p>
                                <p className='lg:text-sm'>1</p>
                                {/* === Increment and Decrement Button === */}
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='bg-red-500 w-8 text-center'>-</p>
                                    <p className='bg-green-700 w-8 text-center'>+</p>
                                </div>
                            </div>
                            <hr className='text-gray-500' />
                            <div className='items-center justify-between p-1'>
                                <p className='text-sm'>Total: 150 Tk</p>
                                <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                    <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                        <button className=''>Reset</button>
                                    </div>
                                    <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                        <button className=''>Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative pt-1">
                        <div className="diamond-first-box relative">
                            <div className="diamond-second-box">
                                <div className="diamond-third-box lg:text-md outline-none">
                                    610 Diamonds
                                    <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 390 TK</p>
                                </div>
                            </div>
                                <span className="search-icon absolute right-5 cursor-pointer">
                                    <img className='size-8' src="/public/image/diamond.png" alt="" />
                                </span>
                        </div>
                        <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                            <div className='flex items-center justify-between p-1'>
                                <p className='lg:text-sm'>Weekly Pass
                                    <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                </p>
                                <p className='lg:text-sm'>1</p>
                                {/* === Increment and Decrement Button === */}
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='bg-red-500 w-8 text-center'>-</p>
                                    <p className='bg-green-700 w-8 text-center'>+</p>
                                </div>
                            </div>
                            <hr className='text-gray-500' />
                            <div className='items-center justify-between p-1'>
                                <p className='text-sm'>Total: 150 Tk</p>
                                <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                    <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                        <button className=''>Reset</button>
                                    </div>
                                    <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                        <button className=''>Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative pt-1">
                        <div className="diamond-first-box relative">
                            <div className="diamond-second-box">
                                <div className="diamond-third-box lg:text-md outline-none">
                                    850 Diamonds
                                    <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 550 TK</p>
                                </div>
                            </div>
                                <span className="search-icon absolute right-5 cursor-pointer">
                                    <img className='size-8' src="/public/image/diamond.png" alt="" />
                                </span>
                        </div>
                        <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                            <div className='flex items-center justify-between p-1'>
                                <p className='lg:text-sm'>Weekly Pass
                                    <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                </p>
                                <p className='lg:text-sm'>1</p>
                                {/* === Increment and Decrement Button === */}
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='bg-red-500 w-8 text-center'>-</p>
                                    <p className='bg-green-700 w-8 text-center'>+</p>
                                </div>
                            </div>
                            <hr className='text-gray-500' />
                            <div className='items-center justify-between p-1'>
                                <p className='text-sm'>Total: 150 Tk</p>
                                <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                    <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                        <button className=''>Reset</button>
                                    </div>
                                    <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                        <button className=''>Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative pt-1">
                        <div className="diamond-first-box relative">
                            <div className="diamond-second-box">
                                <div className="diamond-third-box lg:text-md outline-none">
                                    1,250 Diamonds
                                    <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 830 TK</p>
                                </div>
                            </div>
                                <span className="search-icon absolute right-5 cursor-pointer">
                                    <img className='size-8' src="/public/image/diamond.png" alt="" />
                                </span>
                        </div>
                        <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                            <div className='flex items-center justify-between p-1'>
                                <p className='lg:text-sm'>Weekly Pass
                                    <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                </p>
                                <p className='lg:text-sm'>1</p>
                                {/* === Increment and Decrement Button === */}
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='bg-red-500 w-8 text-center'>-</p>
                                    <p className='bg-green-700 w-8 text-center'>+</p>
                                </div>
                            </div>
                            <hr className='text-gray-500' />
                            <div className='items-center justify-between p-1'>
                                <p className='text-sm'>Total: 150 Tk</p>
                                <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                    <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                        <button className=''>Reset</button>
                                    </div>
                                    <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                        <button className=''>Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative pt-1">
                        <div className="diamond-first-box relative">
                            <div className="diamond-second-box">
                                <div className="diamond-third-box lg:text-md outline-none">
                                    2,530 Diamonds
                                    <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 1,550 TK</p>
                                </div>
                            </div>
                                <span className="search-icon absolute right-5 cursor-pointer">
                                    <img className='size-8' src="/public/image/diamond.png" alt="" />
                                </span>
                        </div>
                        <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                            <div className='flex items-center justify-between p-1'>
                                <p className='lg:text-sm'>Weekly Pass
                                    <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                </p>
                                <p className='lg:text-sm'>1</p>
                                {/* === Increment and Decrement Button === */}
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='bg-red-500 w-8 text-center'>-</p>
                                    <p className='bg-green-700 w-8 text-center'>+</p>
                                </div>
                            </div>
                            <hr className='text-gray-500' />
                            <div className='items-center justify-between p-1'>
                                <p className='text-sm'>Total: 150 Tk</p>
                                <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                    <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                        <button className=''>Reset</button>
                                    </div>
                                    <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                        <button className=''>Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative pt-1">
                        <div className="diamond-first-box relative">
                            <div className="diamond-second-box">
                                <div className="diamond-third-box lg:text-md outline-none">
                                    5,000 Diamonds
                                    <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 3,100 TK</p>
                                </div>
                            </div>
                                <span className="search-icon absolute right-5 cursor-pointer">
                                    <img className='size-8' src="/public/image/diamond.png" alt="" />
                                </span>
                        </div>
                        <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                            <div className='flex items-center justify-between p-1'>
                                <p className='lg:text-sm'>Weekly Pass
                                    <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                </p>
                                <p className='lg:text-sm'>1</p>
                                {/* === Increment and Decrement Button === */}
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='bg-red-500 w-8 text-center'>-</p>
                                    <p className='bg-green-700 w-8 text-center'>+</p>
                                </div>
                            </div>
                            <hr className='text-gray-500' />
                            <div className='items-center justify-between p-1'>
                                <p className='text-sm'>Total: 150 Tk</p>
                                <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                    <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                        <button className=''>Reset</button>
                                    </div>
                                    <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                        <button className=''>Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='userInpt bg-pcbg px-4 py-2 text-2xl text-white/70 mb-4 mt-16'>SPECIAL PACKAGE</h1>
                <div>
                    <div className='w-full lg:grid lg:grid-cols-4 p-2 lg:gap-5 border border-gray-700'>
                        <div className="relative pt-1">
                            <div className="diamond-first-box relative">
                                <div className="diamond-second-box">
                                    <div className="diamond-third-box lg:text-md outline-none">
                                        Weekly Lite
                                        <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 40 TK</p>
                                    </div>
                                </div>
                                    <span className="search-icon absolute right-5 cursor-pointer">
                                        <img className='size-8' src="/src/assets/image/weekly-lite.png" alt="" />
                                    </span>
                            </div>
                            <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                                <div className='flex items-center justify-between p-1'>
                                    <p className='lg:text-sm'>Weekly Pass
                                        <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                    </p>
                                    <p className='lg:text-sm'>1</p>
                                    {/* === Increment and Decrement Button === */}
                                    <div className='flex items-center justify-between gap-1'>
                                        <p className='bg-red-500 w-8 text-center'>-</p>
                                        <p className='bg-green-700 w-8 text-center'>+</p>
                                    </div>
                                </div>
                                <hr className='text-gray-500' />
                                <div className='items-center justify-between p-1'>
                                    <p className='text-sm'>Total: 150 Tk</p>
                                    <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                        <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                            <button className=''>Reset</button>
                                        </div>
                                        <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                            <button className=''>Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative pt-1">
                            <div className="diamond-first-box relative">
                                <div className="diamond-second-box">
                                    <div className="diamond-third-box lg:text-md outline-none">
                                        Weekly Pass
                                        <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                    </div>
                                </div>
                                    <span className="search-icon absolute right-5 cursor-pointer">
                                        <img className='size-8' src="/src/assets/image/Weekly.png" alt="" />
                                    </span>
                            </div>
                            <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                                <div className='flex items-center justify-between p-1'>
                                    <p className='lg:text-sm'>Weekly Pass
                                        <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                    </p>
                                    <p className='lg:text-sm'>1</p>
                                    {/* === Increment and Decrement Button === */}
                                    <div className='flex items-center justify-between gap-1'>
                                        <p className='bg-red-500 w-8 text-center'>-</p>
                                        <p className='bg-green-700 w-8 text-center'>+</p>
                                    </div>
                                </div>
                                <hr className='text-gray-500' />
                                <div className='items-center justify-between p-1'>
                                    <p className='text-sm'>Total: 150 Tk</p>
                                    <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                        <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                            <button className=''>Reset</button>
                                        </div>
                                        <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                            <button className=''>Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative pt-1">
                            <div className="diamond-first-box relative">
                                <div className="diamond-second-box">
                                    <div className="diamond-third-box lg:text-md outline-none">
                                        Monthly Pass
                                        <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 760 TK</p>
                                    </div>
                                </div>
                                    <span className="search-icon absolute right-5 cursor-pointer">
                                        <img className='size-8' src="/src/assets/image/monthly.png" alt="" />
                                    </span>
                            </div>
                            <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80'>
                                <div className='flex items-center justify-between p-1'>
                                    <p className='lg:text-sm'>Monthly Pass
                                        <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                    </p>
                                    <p className='lg:text-sm'>1</p>
                                    {/* === Increment and Decrement Button === */}
                                    <div className='flex items-center justify-between gap-1'>
                                        <p className='bg-red-500 w-8 text-center'>-</p>
                                        <p className='bg-green-700 w-8 text-center'>+</p>
                                    </div>
                                </div>
                                <hr className='text-gray-500' />
                                <div className='flex items-center justify-between p-1'>
                                    <p className='text-sm'>Total: 7600 Tk</p>
                                    <div>
                                        <div class="form-check">
                                            <input class="form-check-input text-sm" type="checkbox" name="" id="cancel" />
                                            <label class="form-check-label text-sm" for="cancel"> Cancel </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input text-sm" type="checkbox" name="" id="confirm" />
                                            <label class="form-check-label text-sm" for="confirm"> Confirm </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative pt-1">
                            <div className="diamond-first-box relative">
                                <div className="diamond-second-box">
                                    <div className="diamond-third-box lg:text-md outline-none">
                                        Level Up Pass
                                        <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 160 TK</p>
                                    </div>
                                </div>
                                    <span className="search-icon absolute right-5 cursor-pointer">
                                        <img className='size-8' src="/public/image/diamond.png" alt="" />
                                    </span>
                            </div>
                            <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                                <div className='flex items-center justify-between p-1'>
                                    <p className='lg:text-sm'>Weekly Pass
                                        <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                    </p>
                                    <p className='lg:text-sm'>1</p>
                                    {/* === Increment and Decrement Button === */}
                                    <div className='flex items-center justify-between gap-1'>
                                        <p className='bg-red-500 w-8 text-center'>-</p>
                                        <p className='bg-green-700 w-8 text-center'>+</p>
                                    </div>
                                </div>
                                <hr className='text-gray-500' />
                                <div className='items-center justify-between p-1'>
                                    <p className='text-sm'>Total: 150 Tk</p>
                                    <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                        <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                            <button className=''>Reset</button>
                                        </div>
                                        <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                            <button className=''>Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative pt-1">
                            <div className="diamond-first-box relative">
                                <div className="diamond-second-box">
                                    <div className="diamond-third-box lg:text-md outline-none">
                                        Evo Access 3D
                                        <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 65 TK</p>
                                    </div>
                                </div>
                                    <span className="search-icon absolute right-5 cursor-pointer">
                                        <img className='size-8' src="/src/assets/image/evo.png" alt="" />
                                    </span>
                            </div>
                            <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                                <div className='flex items-center justify-between p-1'>
                                    <p className='lg:text-sm'>Weekly Pass
                                        <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                    </p>
                                    <p className='lg:text-sm'>1</p>
                                    {/* === Increment and Decrement Button === */}
                                    <div className='flex items-center justify-between gap-1'>
                                        <p className='bg-red-500 w-8 text-center'>-</p>
                                        <p className='bg-green-700 w-8 text-center'>+</p>
                                    </div>
                                </div>
                                <hr className='text-gray-500' />
                                <div className='items-center justify-between p-1'>
                                    <p className='text-sm'>Total: 150 Tk</p>
                                    <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                        <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                            <button className=''>Reset</button>
                                        </div>
                                        <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                            <button className=''>Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative pt-1">
                            <div className="diamond-first-box relative">
                                <div className="diamond-second-box">
                                    <div className="diamond-third-box lg:text-md outline-none">
                                        Evo Access 7D
                                        <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 100 TK</p>
                                    </div>
                                </div>
                                    <span className="search-icon absolute right-5 cursor-pointer">
                                        <img className='size-8' src="/src/assets/image/evo.png" alt="" />
                                    </span>
                            </div><div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                                <div className='flex items-center justify-between p-1'>
                                    <p className='lg:text-sm'>Weekly Pass
                                        <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                    </p>
                                    <p className='lg:text-sm'>1</p>
                                    {/* === Increment and Decrement Button === */}
                                    <div className='flex items-center justify-between gap-1'>
                                        <p className='bg-red-500 w-8 text-center'>-</p>
                                        <p className='bg-green-700 w-8 text-center'>+</p>
                                    </div>
                                </div>
                                <hr className='text-gray-500' />
                                <div className='items-center justify-between p-1'>
                                    <p className='text-sm'>Total: 150 Tk</p>
                                    <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                        <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                            <button className=''>Reset</button>
                                        </div>
                                        <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                            <button className=''>Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative pt-1">
                            <div className="diamond-first-box relative">
                                <div className="diamond-second-box">
                                    <div className="diamond-third-box lg:text-md outline-none">
                                        Evo Access 30D
                                        <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 300 TK</p>
                                    </div>
                                </div>
                                    <span className="search-icon absolute right-5 cursor-pointer">
                                        <img className='size-8' src="/src/assets/image/evo.png" alt="" />
                                    </span>
                            </div>
                            <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                                <div className='flex items-center justify-between p-1'>
                                    <p className='lg:text-sm'>Weekly Pass
                                        <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                    </p>
                                    <p className='lg:text-sm'>1</p>
                                    {/* === Increment and Decrement Button === */}
                                    <div className='flex items-center justify-between gap-1'>
                                        <p className='bg-red-500 w-8 text-center'>-</p>
                                        <p className='bg-green-700 w-8 text-center'>+</p>
                                    </div>
                                </div>
                                <hr className='text-gray-500' />
                                <div className='items-center justify-between p-1'>
                                    <p className='text-sm'>Total: 150 Tk</p>
                                    <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                        <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                            <button className=''>Reset</button>
                                        </div>
                                        <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                            <button className=''>Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='userInpt bg-pcbg px-4 py-2 text-2xl text-white/70 mb-4 mt-16'>UNIPIN VORCHER PACKAGE</h1>
                <div>
                    <div className='w-full lg:grid lg:grid-cols-4 p-2 lg:gap-5 border border-gray-700'>
                        <div className="relative pt-1">
                            <div className="diamond-first-box relative">
                                <div className="diamond-second-box">
                                    <div className="diamond-third-box lg:text-md outline-none">
                                        Weekly Lite
                                        <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 40 TK</p>
                                    </div>
                                </div>
                                    <span className="search-icon absolute right-5 cursor-pointer">
                                        <img className='size-8' src="/src/assets/image/weekly-lite.png" alt="" />
                                    </span>
                            </div>
                            <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                                <div className='flex items-center justify-between p-1'>
                                    <p className='lg:text-sm'>Weekly Pass
                                        <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                    </p>
                                    <p className='lg:text-sm'>1</p>
                                    {/* === Increment and Decrement Button === */}
                                    <div className='flex items-center justify-between gap-1'>
                                        <p className='bg-red-500 w-8 text-center'>-</p>
                                        <p className='bg-green-700 w-8 text-center'>+</p>
                                    </div>
                                </div>
                                <hr className='text-gray-500' />
                                <div className='items-center justify-between p-1'>
                                    <p className='text-sm'>Total: 150 Tk</p>
                                    <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                        <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                            <button className=''>Reset</button>
                                        </div>
                                        <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                            <button className=''>Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative pt-1">
                            <div className="diamond-first-box relative">
                                <div className="diamond-second-box">
                                    <div className="diamond-third-box lg:text-md outline-none">
                                        Weekly Pass
                                        <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                    </div>
                                </div>
                                    <span className="search-icon absolute right-5 cursor-pointer">
                                        <img className='size-8' src="/src/assets/image/Weekly.png" alt="" />
                                    </span>
                            </div>
                            <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                                <div className='flex items-center justify-between p-1'>
                                    <p className='lg:text-sm'>Weekly Pass
                                        <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                    </p>
                                    <p className='lg:text-sm'>1</p>
                                    {/* === Increment and Decrement Button === */}
                                    <div className='flex items-center justify-between gap-1'>
                                        <p className='bg-red-500 w-8 text-center'>-</p>
                                        <p className='bg-green-700 w-8 text-center'>+</p>
                                    </div>
                                </div>
                                <hr className='text-gray-500' />
                                <div className='items-center justify-between p-1'>
                                    <p className='text-sm'>Total: 150 Tk</p>
                                    <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                        <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                            <button className=''>Reset</button>
                                        </div>
                                        <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                            <button className=''>Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative pt-1">
                            <div className="diamond-first-box relative">
                                <div className="diamond-second-box">
                                    <div className="diamond-third-box lg:text-md outline-none">
                                        Monthly Pass
                                        <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 760 TK</p>
                                    </div>
                                </div>
                                    <span className="search-icon absolute right-5 cursor-pointer">
                                        <img className='size-8' src="/src/assets/image/monthly.png" alt="" />
                                    </span>
                            </div>
                            <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80'>
                                <div className='flex items-center justify-between p-1'>
                                    <p className='lg:text-sm'>Monthly Pass
                                        <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                    </p>
                                    <p className='lg:text-sm'>1</p>
                                    {/* === Increment and Decrement Button === */}
                                    <div className='flex items-center justify-between gap-1'>
                                        <p className='bg-red-500 w-8 text-center'>-</p>
                                        <p className='bg-green-700 w-8 text-center'>+</p>
                                    </div>
                                </div>
                                <hr className='text-gray-500' />
                                <div className='flex items-center justify-between p-1'>
                                    <p className='text-sm'>Total: 7600 Tk</p>
                                    <div>
                                        <div class="form-check">
                                            <input class="form-check-input text-sm" type="checkbox" name="" id="cancel" />
                                            <label class="form-check-label text-sm" for="cancel"> Cancel </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input text-sm" type="checkbox" name="" id="confirm" />
                                            <label class="form-check-label text-sm" for="confirm"> Confirm </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative pt-1">
                            <div className="diamond-first-box relative">
                                <div className="diamond-second-box">
                                    <div className="diamond-third-box lg:text-md outline-none">
                                        Level Up Pass
                                        <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 160 TK</p>
                                    </div>
                                </div>
                                    <span className="search-icon absolute right-5 cursor-pointer">
                                        <img className='size-8' src="/public/image/diamond.png" alt="" />
                                    </span>
                            </div>
                            <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                                <div className='flex items-center justify-between p-1'>
                                    <p className='lg:text-sm'>Weekly Pass
                                        <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                    </p>
                                    <p className='lg:text-sm'>1</p>
                                    {/* === Increment and Decrement Button === */}
                                    <div className='flex items-center justify-between gap-1'>
                                        <p className='bg-red-500 w-8 text-center'>-</p>
                                        <p className='bg-green-700 w-8 text-center'>+</p>
                                    </div>
                                </div>
                                <hr className='text-gray-500' />
                                <div className='items-center justify-between p-1'>
                                    <p className='text-sm'>Total: 150 Tk</p>
                                    <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                        <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                            <button className=''>Reset</button>
                                        </div>
                                        <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                            <button className=''>Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative pt-1">
                            <div className="diamond-first-box relative">
                                <div className="diamond-second-box">
                                    <div className="diamond-third-box lg:text-md outline-none">
                                        Evo Access 3D
                                        <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 65 TK</p>
                                    </div>
                                </div>
                                    <span className="search-icon absolute right-5 cursor-pointer">
                                        <img className='size-8' src="/src/assets/image/evo.png" alt="" />
                                    </span>
                            </div>
                            <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                                <div className='flex items-center justify-between p-1'>
                                    <p className='lg:text-sm'>Weekly Pass
                                        <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                    </p>
                                    <p className='lg:text-sm'>1</p>
                                    {/* === Increment and Decrement Button === */}
                                    <div className='flex items-center justify-between gap-1'>
                                        <p className='bg-red-500 w-8 text-center'>-</p>
                                        <p className='bg-green-700 w-8 text-center'>+</p>
                                    </div>
                                </div>
                                <hr className='text-gray-500' />
                                <div className='items-center justify-between p-1'>
                                    <p className='text-sm'>Total: 150 Tk</p>
                                    <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                        <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                            <button className=''>Reset</button>
                                        </div>
                                        <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                            <button className=''>Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative pt-1">
                            <div className="diamond-first-box relative">
                                <div className="diamond-second-box">
                                    <div className="diamond-third-box lg:text-md outline-none">
                                        Evo Access 7D
                                        <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 100 TK</p>
                                    </div>
                                </div>
                                    <span className="search-icon absolute right-5 cursor-pointer">
                                        <img className='size-8' src="/src/assets/image/evo.png" alt="" />
                                    </span>
                            </div><div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                                <div className='flex items-center justify-between p-1'>
                                    <p className='lg:text-sm'>Weekly Pass
                                        <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                    </p>
                                    <p className='lg:text-sm'>1</p>
                                    {/* === Increment and Decrement Button === */}
                                    <div className='flex items-center justify-between gap-1'>
                                        <p className='bg-red-500 w-8 text-center'>-</p>
                                        <p className='bg-green-700 w-8 text-center'>+</p>
                                    </div>
                                </div>
                                <hr className='text-gray-500' />
                                <div className='items-center justify-between p-1'>
                                    <p className='text-sm'>Total: 150 Tk</p>
                                    <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                        <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                            <button className=''>Reset</button>
                                        </div>
                                        <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                            <button className=''>Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative pt-1">
                            <div className="diamond-first-box relative">
                                <div className="diamond-second-box">
                                    <div className="diamond-third-box lg:text-md outline-none">
                                        Evo Access 30D
                                        <p> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 300 TK</p>
                                    </div>
                                </div>
                                    <span className="search-icon absolute right-5 cursor-pointer">
                                        <img className='size-8' src="/src/assets/image/evo.png" alt="" />
                                    </span>
                            </div>
                            <div className='absolute w-full z-10 hidden bg-pcbg border border-gray-600 text-white/80 p-2'>
                                <div className='flex items-center justify-between p-1'>
                                    <p className='lg:text-sm'>Weekly Pass
                                        <p className='lg:text-sm'><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 150 TK</p>
                                    </p>
                                    <p className='lg:text-sm'>1</p>
                                    {/* === Increment and Decrement Button === */}
                                    <div className='flex items-center justify-between gap-1'>
                                        <p className='bg-red-500 w-8 text-center'>-</p>
                                        <p className='bg-green-700 w-8 text-center'>+</p>
                                    </div>
                                </div>
                                <hr className='text-gray-500' />
                                <div className='items-center justify-between p-1'>
                                    <p className='text-sm'>Total: 150 Tk</p>
                                    <div className='lg:flex lg:items-center justify-center mt-2 lg:gap-2'>
                                        <div class="text-center rounded-sm px-2 py-1 bg-[#FF4654]">
                                            <button className=''>Reset</button>
                                        </div>
                                        <div class="text-center rounded-sm px-2 py-1 bg-green-600">
                                            <button className=''>Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ==== User ID Confirmation Section === */}
                <div className='lg:w-full lg:grid lg:grid-cols-2 lg:gap-5 mt-8 mb-8 '>
                    {/* === Details Section === */}
                    <div className='userSection lg:min-h-[500px] lg:max-h-[500px] lg:w-full lg:flex lg:flex-col border border-gray-700 flex items-center justify-between py-2 px-2'>
                        {/* === Rules And Conditions === */}
                        <div className='rulesBtn border border-gray-400'>
                            <button className='detailsBtn px-4 py-2 w-[150px]'>Rules</button>
                            <button className='detailsBtn px-4 py-2 w-[150px]'>TopUp</button>
                            <button className='detailsBtn px-4 py-2 w-[150px]'>GameID</button>
                            <button className='detailsBtn px-4 py-2 w-[150px]'>Payments</button>
                            <button className='detailsBtn px-4 py-2 w-[150px]'>Discription</button>
                            <button className='detailsBtn px-4 py-2 w-[150px]'>Reviews</button>
                            <button className='detailsBtn px-4 py-2 w-[150px]'>FQAS</button>
                        </div>
                        <div className='mt-4 lg:min-h-[380px] overflow-y-auto w-[600px] bg-primarybg'>
                            {/* === Payments Methode Details === */}
                          <h1 className='px-2 mt-4'>Rules: (Step One)</h1>
                          <div className='font-HindSiligri text-white/70 lg:text-md p-2'>
                            <p>১<span>*</span> শুধুমাত্র Bangladesh সার্ভারে Top Up হবে।</p>
                            <p>২<span>*</span> অর্ডার করার পূর্বে নিয়মগুলো একবার পড়ার জন্য বিশেষ ভাবে অনুগ্রহ করা হচ্ছে।</p>
                            <p>৩<span>*</span> Step by step  নিয়মগুলা পড়ে নিবেন।</p>
                            <p>৪<span>*</span> অর্ডার করার সাথে সাথে ডেলিভারি দেওয়া হবে, ব্যতিক্রম বসত নির্ধারিত সময়ের মধ্যে ডেলিভারি না পেলে অনুগ্রহ করে আমাদের সাপোর্ট সেন্টারে যোগাযোগ করবেন।</p>
                            <p>৫<span>*</span> User ID ভুল দিয়ে (নিজস্ব ভুলের কারনে) Diamond না পেলে কর্তৃপক্ষ দায় ভার নিবে না।</p>
                            <p>৬<span>*</span> অর্ডার কমপ্লিট হওয়ার পরেও ID তে Diamond যায়নি এ রকম কিছু দাবি করলে কর্তৃপক্ষ আপনার  ID Check করতে বাধ্য থাকিবে। (সত্যতা যাচাই করার জন্য, আপনাকে প্রথমে Game Lobby বা Diamond Section এর স্ক্রিনশট দিতে বাধ্য থাকিতে হবে, দ্বিতীয়ত Game Profile এর  স্ক্রিনশট , তৃতীয়ত আপনার  Game ID Pass (বাধ্যতামূলক)। আপনি ভুল প্রমাণিত হলে কর্তৃপক্ষ আপনার Aginsg এ যেকোনো ধরনের Statement নিতে পারবে।
                            </p>
                            <div className='flex w-full items-center justify-between gap-3 mt-2 mb-2'>
                                <img className='border border-gray-500 size-40 ' src="/src/assets/image/diamond.png" alt="" />
                                <img className='border border-gray-500 size-40 ' src="/src/assets/image/diamond.png" alt="" />
                                <img className='border border-gray-500 size-40 ' src="/src/assets/image/diamond.png" alt="" />
                            </div>
                            <p>৭<span>*</span> সাধারণত ১০ মিনিটের ভিতরে Order Complete করা হয়। সর্বোচ্চ ১ ঘন্টা সময় লাগতে পারে।</p>
                            <p>৮<span>*</span> ১ ঘন্টার বেশি সময় অতিক্রম হলে Support Team এর সাথে যোগাযোগ করবেন।</p>
                          </div>
                          <h1 className='p-3'>Top-Up: (Step Two)</h1>
                          <h1 className='p-3'>Diamond কিভাবে Top-Up করবো?</h1>
                          <div className='font-HindSiligri text-white/70 lg:text-md p-2'>
                            <p>১<span>*</span> আপনার পছন্দের প্যাকেজ টি Select করুন।</p>
                            <p>২<span>*</span> Select করলেই নিচে একটা Option পাবেন যেখানে আপনি চাইলেই আপনার পছন্দকৃত প্যাকেজ টি একের অধিক নিতে পারবেন।</p>
                          </div>
                          <h1 className='px-2 mt-2'>Game ID: (Step Three)</h1>
                          <h1 className='px-2 mt-2'>Game User ID কিভাবে পাবো?</h1>
                          <div className='font-HindSiligri text-white/70 lg:text-md p-2'>
                            <p>১<span>*</span> আপনার ডিভাইসে থাকা Free Fire Game টি ওপেন করুন।</p>
                            <p>২<span>*</span> Profile এ ক্লিক করুন (ঠিক ছবিতে যেভাবে দেওয়া আছে)।</p>
                            <img src="" alt="" />
                            <p>৩<span>*</span> আপনার User ID Copy করুন। (ঠিক ছবিতে যেভাবে দেওয়া আছে)।</p>
                            <img src="" alt="" />
                          </div>
                          <h1 className='px-2 mt-2'>User ID Confirmation</h1>
                          <div className='font-HindSiligri text-white/70 lg:text-md p-2'>
                            <p>১<span>*</span> আপনার User ID Paste করুন।</p>
                            <p>২<span>*</span> আপনার User ID Match করলে আপনার Game এর নামটি দেখাবে।</p>
                            <p>৩<span>*</span> Confirm বাঁটন এ ক্লিক করুন।</p>
                          </div>
                          <h1 className='px-2 mt-2'>Payment: (Step Four)</h1>
                          <h1 className='px-2 mt-2'>বিকাশ Auto Payment</h1>
                          <div className='font-HindSiligri text-white/70 lg:text-md p-2'>
                            <p>১<span>*</span> বিকাশ চিহ্নিত করুন</p>
                            <p>২<span>*</span> বিকাশ নাম্বারটি দিন।</p>
                            <p>৩<span>*</span> আপনার ফোনে একটি OTP ম্যাসেজ যাবে তা Allow  করে দিন।</p>
                            <p>৪<span>*</span> আপনার পিন টি দিন।</p>
                          </div>
                          <h1 className='px-2 mt-2'>Payment Second Step:</h1>
                          <h1 className='px-2 mt-2'>Bkash, Nagad, Rocket Personal</h1>
                          <div className='font-HindSiligri text-white/70 lg:text-md p-2'>
                            <p>১<span>*</span> আপনার পরিশোধ পদ্ধতিটি চিহ্নিত করুন (বিকাশ, নগদ, রকেট)।</p>
                            <p>২<span>*</span> বিকাশ, নগদ, রকেট নিচে দেওয়া আমাদের নাম্বারটি Copy করুন।</p>
                            <p>৩<span>*</span> কপি করা নাম্বারে টাকা সেন্ডমানি করুন।</p>
                            <p>৪<span>*</span> ট্রান্সজেকশন আইডি টি কপি করে নিন।</p>
                            <p>৫<span>*</span> আপনি কোন নাম্বার দিয়ে টাকা পাঠিয়েছেন সেটি লিখুন।</p>
                            <p>৬<span>*</span> কপি করা ট্রান্সজেকশন আইডিটি পেস্ট করে দিন।</p>
                            <p>৭<span>*</span> Verify Now এ ক্লিক করুন।</p>
                          </div>
                          <h1 className='px-2 mt-2'>ওয়ালেট</h1>
                          <div className='font-HindSiligri text-white/70 lg:text-md p-2'>
                            <p>১<span>*</span>  Profile এ যান , Select করুন Deposit Money.</p>
                            <p>২<span>*</span> বিকাশ, নগদ, রকেট চিহ্নিত করুন।</p>
                            <p>৩<span>*</span> বিকাশ, নগদ, রকেট আমাদের নাম্বারটি Copy করুন।</p>
                            <p>৪<span>*</span> কপি করা নাম্বারে টা্রুন।সেন্ডমানি করুন।</p>
                            <p>৫<span>*</span> ট্রান্সজেকশন আইডি টি কপি করে নিন।</p>
                            <p>৬<span>*</span> আপনি কোন নাম্বার দিয়ে টাকা পাঠিয়েছেন সেটি লিখুন।</p>
                            <p>৭<span>*</span> কপি করা ট্রান্সজেকশন আইডিটি পেস্ট করে দিন।</p>
                            <p>৮<span>*</span> Verify Now এ ক্লিক করুন।</p>
                            <p>৯<span>*</span> ওয়ালেটে টাকা জমা হলে, আপনার প্যাকেজ টি নির্বাচন করুন।</p>
                            <p>১০<span>*</span> পেমেন্ট এ Wallet Payment Select করুন।</p>
                          </div>
                        </div>
                    </div>
                    {/* === Play User ID Section === */}
                    <div className='userSection lg:w-full lg:flex lg:flex-col border border-gray-700 flex items-center justify-between py-2 px-2'>
                        <h1 className='lg:w-full lg:text-2xl lg:font-semibold text-center text-white/75'>Enter Your User ID</h1>
                        <div className='w-full lg:grid lg:grid-cols-2 gap-2 mt-4'>
                            {/* === Input User ID === */}
                            <div className='userInpt w-full bg-primarybg text-white/70 hover:inset-shadow-sm hover:inset-shadow-gray-100/40 transition-all duration-300 delay-75 ease-in-out'>
                                <input className='w-full outline-none p-2' type="text"placeholder='Enter Your Game User ID' />
                            </div>
                            {/* === Checking User ID === */}
                            <div className='userInpt w-full bg-primarybg text-white/70 hover:inset-shadow-sm hover:inset-shadow-green-100/40 transition-all duration-300 delay-75 ease-in-out'>
                                {/* === After entering the user ID, the text Searching for your game ID will appear. If the game ID is found, it will show that name, and a tick mark will appear. (or not Matched your user id) === */}
                                <p className='w-full outline-none text-green-600 p-2' >Subas Hebrom </p>
                            </div>
                        </div>
                        <div className='w-full text-end mt-4 mb-4'>
                            <button className='buyBtn bg-primarybg px-4 py-1 lg:text-lg text-white/70' type='submit'>Confirm</button>
                        </div>
                        {/* === Order Details Section === */}
                        <div className='w-full border border-gray-600 p-1 mb-4'>
                            <h1 className='text-center text-white/70 text-2xl font-semibold mb-2 mt-2'>Order Billing Details</h1>
                            <div className='orderCard w-full bg-primarybg p-4'>
                                <div className='lg:flex lg:items-start lg:justify-between text-white/70 items-center'>
                                    <div className='lg:flex items-center'>
                                        <p>5,000 Diamonds</p>
                                    </div>
                                    <p>Bangladesh Server</p>
                                    <div>
                                        <p>2189788657</p>
                                        <p>Subas Hebrom</p>
                                    </div>
                                </div>
                                <hr  className='mt-2 text-gray-500'/>
                                <div className='lg:flex lg:items-center lg:justify-between text-white/70 mt-2'>
                                    <p className='lg:text-md'> <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>3,100 tk</p>
                                    <div className='relative flex lg:gap-2'>
                                        <p className='bg-red-500 w-8 text-center text-xl'>-</p>
                                        <p>2X</p>
                                        <p className='bg-green-700 w-8 text-center text-xl'>+</p>
                                        <div className='absolute bg-pcbg p-1 right-0 -bottom-10'>
                                            <p className='flex gap-1.5'>10,000 <img className='size-5' src="/public/image/diamond.png" alt="" /></p>
                                        </div>
                                    </div>
                                    <p> <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/> 6,200 TK</p>
                                </div>
                                <hr  className='mt-2 text-gray-500'/>
                                <div className='text-end text-white/70 mt-2'>
                                    <h2>Total: <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/> 6,200 TK </h2>
                                </div>
                            </div>
                            <div className='w-full flex items-end justify-end text-end mt-4 mb-4'>
                                <NavLink to='/check-out' className='buyBtn bg-primarybg lg:text-lg text-white/70 flex items-center justify-center w-30' type='submit'><span className='py-1.5'>Buy Now</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FreeFireDiamond;