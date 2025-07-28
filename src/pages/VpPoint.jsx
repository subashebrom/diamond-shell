import { faBangladeshiTakaSign, faChevronLeft, faDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../css/FreeFireDiamond.css";
import { NavLink } from 'react-router';

const VpPoint = () => {
    return (
        <div className='lg:w-full bg-mainbg lg:h-auto lg:mt-12 font-Ubuntu'>
            <section className='lg:w-[1296px] lg:h-auto bg-primarybg border-r border-r-gray-700 border-l border-l-gray-700 mx-auto justify-items-center lg:pt-8 text-white p-2'>
                <NavLink to='/valorant'>
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
                </div>
                </NavLink>
                <h1 className='userInpt bg-pcbg px-4 py-2 text-2xl text-white/70 mb-4'>VALORANT POINTS TOP-UP BANGLADESH</h1>
                <div className='lg:w-full lg:grid lg:grid-cols-4 p-2 lg:gap-5 border border-gray-700'>
                    <div className="relative pt-1">
                        <div className="diamond-first-box relative">
                            <div className="diamond-second-box">
                                <div className="diamond-third-box lg:text-md outline-none">
                                    475 VP
                                    <p> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
                                </div>
                            </div>
                                <span className="search-icon absolute right-5 cursor-pointer">
                                    <img className='size-8' src="/src/assets/image/vp-icon.svg" alt="" />
                                </span>
                        </div>
                        <div className='absolute w-full hidden z-10  bg-pcbg border border-gray-600 text-white/80 p-2'>
                            <div className='flex items-center justify-between p-1'>
                                <p className='lg:text-sm'>475 VP
                                    <p className='mt-1'> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
                                </p>
                                <p className='lg:text-sm'>1</p>
                                {/* === Increment and Decrement Button === */}
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='bg-[#FF4654] w-8 text-center'>-</p>
                                    <p className='bg-green-600 w-8 text-center'>+</p>
                                </div>
                            </div>
                            <hr className='text-gray-500 mb-2 mt-2' />
                            <p className='text-sm'> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
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
                    <div className="relative pt-1">
                        <div className="diamond-first-box relative">
                            <div className="diamond-second-box">
                                <div className="diamond-third-box lg:text-md outline-none">
                                    475 VP
                                    <p> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
                                </div>
                            </div>
                                <span className="search-icon absolute right-5 cursor-pointer">
                                    <img className='size-8' src="/src/assets/image/vp-icon.svg" alt="" />
                                </span>
                        </div>
                        <div className='absolute w-full hidden z-10  bg-pcbg border border-gray-600 text-white/80 p-2'>
                            <div className='flex items-center justify-between p-1'>
                                <p className='lg:text-sm'>475 VP
                                    <p className='mt-1'> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
                                </p>
                                <p className='lg:text-sm'>1</p>
                                {/* === Increment and Decrement Button === */}
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='bg-[#FF4654] w-8 text-center'>-</p>
                                    <p className='bg-green-600 w-8 text-center'>+</p>
                                </div>
                            </div>
                            <hr className='text-gray-500 mb-2 mt-2' />
                            <p className='text-sm'> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
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
                    <div className="relative pt-1">
                        <div className="diamond-first-box relative">
                            <div className="diamond-second-box">
                                <div className="diamond-third-box lg:text-md outline-none">
                                    475 VP
                                    <p> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
                                </div>
                            </div>
                                <span className="search-icon absolute right-5 cursor-pointer">
                                    <img className='size-8' src="/src/assets/image/vp-icon.svg" alt="" />
                                </span>
                        </div>
                        <div className='absolute w-full hidden z-10  bg-pcbg border border-gray-600 text-white/80 p-2'>
                            <div className='flex items-center justify-between p-1'>
                                <p className='lg:text-sm'>475 VP
                                    <p className='mt-1'> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
                                </p>
                                <p className='lg:text-sm'>1</p>
                                {/* === Increment and Decrement Button === */}
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='bg-[#FF4654] w-8 text-center'>-</p>
                                    <p className='bg-green-600 w-8 text-center'>+</p>
                                </div>
                            </div>
                            <hr className='text-gray-500 mb-2 mt-2' />
                            <p className='text-sm'> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
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
                    <div className="relative pt-1">
                        <div className="diamond-first-box relative">
                            <div className="diamond-second-box">
                                <div className="diamond-third-box lg:text-md outline-none">
                                    475 VP
                                    <p> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
                                </div>
                            </div>
                                <span className="search-icon absolute right-5 cursor-pointer">
                                    <img className='size-8' src="/src/assets/image/vp-icon.svg" alt="" />
                                </span>
                        </div>
                        <div className='absolute w-full hidden z-10  bg-pcbg border border-gray-600 text-white/80 p-2'>
                            <div className='flex items-center justify-between p-1'>
                                <p className='lg:text-sm'>475 VP
                                    <p className='mt-1'> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
                                </p>
                                <p className='lg:text-sm'>1</p>
                                {/* === Increment and Decrement Button === */}
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='bg-[#FF4654] w-8 text-center'>-</p>
                                    <p className='bg-green-600 w-8 text-center'>+</p>
                                </div>
                            </div>
                            <hr className='text-gray-500 mb-2 mt-2' />
                            <p className='text-sm'> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
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
                    <div className="relative pt-1">
                        <div className="diamond-first-box relative">
                            <div className="diamond-second-box">
                                <div className="diamond-third-box lg:text-md outline-none">
                                    475 VP
                                    <p> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
                                </div>
                            </div>
                                <span className="search-icon absolute right-5 cursor-pointer">
                                    <img className='size-8' src="/src/assets/image/vp-icon.svg" alt="" />
                                </span>
                        </div>
                        <div className='absolute w-full hidden z-10  bg-pcbg border border-gray-600 text-white/80 p-2'>
                            <div className='flex items-center justify-between p-1'>
                                <p className='lg:text-sm'>475 VP
                                    <p className='mt-1'> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
                                </p>
                                <p className='lg:text-sm'>1</p>
                                {/* === Increment and Decrement Button === */}
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='bg-[#FF4654] w-8 text-center'>-</p>
                                    <p className='bg-green-600 w-8 text-center'>+</p>
                                </div>
                            </div>
                            <hr className='text-gray-500 mb-2 mt-2' />
                            <p className='text-sm'> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
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
                    <div className="relative pt-1">
                        <div className="diamond-first-box relative">
                            <div className="diamond-second-box">
                                <div className="diamond-third-box lg:text-md outline-none">
                                    475 VP
                                    <p> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
                                </div>
                            </div>
                                <span className="search-icon absolute right-5 cursor-pointer">
                                    <img className='size-8' src="/src/assets/image/vp-icon.svg" alt="" />
                                </span>
                        </div>
                        <div className='absolute w-full hidden z-10  bg-pcbg border border-gray-600 text-white/80 p-2'>
                            <div className='flex items-center justify-between p-1'>
                                <p className='lg:text-sm'>475 VP
                                    <p className='mt-1'> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
                                </p>
                                <p className='lg:text-sm'>1</p>
                                {/* === Increment and Decrement Button === */}
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='bg-[#FF4654] w-8 text-center'>-</p>
                                    <p className='bg-green-600 w-8 text-center'>+</p>
                                </div>
                            </div>
                            <hr className='text-gray-500 mb-2 mt-2' />
                            <p className='text-sm'> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
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
                    <div className="relative pt-1">
                        <div className="diamond-first-box relative">
                            <div className="diamond-second-box">
                                <div className="diamond-third-box lg:text-md outline-none">
                                    475 VP
                                    <p> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
                                </div>
                            </div>
                                <span className="search-icon absolute right-5 cursor-pointer">
                                    <img className='size-8' src="/src/assets/image/vp-icon.svg" alt="" />
                                </span>
                        </div>
                        <div className='absolute w-full hidden z-10  bg-pcbg border border-gray-600 text-white/80 p-2'>
                            <div className='flex items-center justify-between p-1'>
                                <p className='lg:text-sm'>475 VP
                                    <p className='mt-1'> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
                                </p>
                                <p className='lg:text-sm'>1</p>
                                {/* === Increment and Decrement Button === */}
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='bg-[#FF4654] w-8 text-center'>-</p>
                                    <p className='bg-green-600 w-8 text-center'>+</p>
                                </div>
                            </div>
                            <hr className='text-gray-500 mb-2 mt-2' />
                            <p className='text-sm'> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
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
                    <div className="relative pt-1">
                        <div className="diamond-first-box relative">
                            <div className="diamond-second-box">
                                <div className="diamond-third-box lg:text-md outline-none">
                                    475 VP
                                    <p> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
                                </div>
                            </div>
                                <span className="search-icon absolute right-5 cursor-pointer">
                                    <img className='size-8' src="/src/assets/image/vp-icon.svg" alt="" />
                                </span>
                        </div>
                        <div className='absolute w-full hidden z-10  bg-pcbg border border-gray-600 text-white/80 p-2'>
                            <div className='flex items-center justify-between p-1'>
                                <p className='lg:text-sm'>475 VP
                                    <p className='mt-1'> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
                                </p>
                                <p className='lg:text-sm'>1</p>
                                {/* === Increment and Decrement Button === */}
                                <div className='flex items-center justify-between gap-1'>
                                    <p className='bg-[#FF4654] w-8 text-center'>-</p>
                                    <p className='bg-green-600 w-8 text-center'>+</p>
                                </div>
                            </div>
                            <hr className='text-gray-500 mb-2 mt-2' />
                            <p className='text-sm'> <FontAwesomeIcon icon={faDollar}/> 5 = <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 650 TK</p>
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
                {/* ==== User ID Confirmation Section === */}
                <div className='lg:w-full lg:grid lg:grid-cols-2 lg:gap-5 mt-8 mb-8 '>
                    {/* === Details Section === */}
                    <div className='userSection lg:min-h-[500px] lg:max-h-[500px] lg:w-full lg:flex lg:flex-col border border-gray-700 flex items-center justify-between py-2 px-2'>
                        {/* === Rules And Conditions === */}
                        <div className='rulesBtn border border-gray-400 mt-2'>
                            <button className='detailsBtn px-4 py-2 w-[150px]'>Payments</button>
                            <button className='detailsBtn px-4 py-2 w-[150px]'>Payments</button>
                            <button className='detailsBtn px-4 py-2 w-[150px]'>Rules</button>
                            <button className='detailsBtn px-4 py-2 w-[150px]'>Discription</button>
                            <button className='detailsBtn px-4 py-2 w-[150px]'>TopUp</button>
                            <button className='detailsBtn px-4 py-2 w-[150px]'>Reviews</button>
                            <button className='detailsBtn px-4 py-2 w-[150px]'>FQAS</button>
                        </div>
                        <div className='mt-4 lg:min-h-[380px] overflow-y-auto w-[600px] bg-primarybg'>
                            {/* === Payments Methode Details === */}
                          <h1>Payment Methode (Step 1)</h1>
                          <div className='font-HindSiligri text-white/70 lg:text-md p-2'>
                            <p>১<span>*</span> শুধুমাত্র Bangladesh সার্ভারে Top Up হবে।</p>
                            <p>২<span>*</span> অর্ডার করার সাথে সাথে ডেলিভারি দেয়া হবে। ব্যতিক্রম বসত নির্ধারিত সম্যের মধ্যে ডেলিভারি না পেলে অনুগ্রহ করে আমাদের Support Center Massage দিবেন।</p>
                            <p>৩<span>*</span> User ID ভুল দিয়ে (নিজেস্ব ভুলের কারণে) Diamond না পেলে কর্তৃপক্ষ দায় ভার নিবে না।</p>
                            <p>৪<span>*</span> Order কমপ্লিট হওয়ার পরেও আইডিতে Daimond যায়নি, এ রকম কিছু দাবি করলে, কর্তৃপক্ষ চেক করতে বাধ্য থাকিবে (সত্যতা যাচাই করার জন্য,আপনাকে প্রথমে Game Lobby  বা Diamond Section এর স্ক্রিনশট দিতে বাধ্য থাকিতে হবে, দ্বিতীয়ত Game Profile এর স্ক্রিনশট তৃতীয়ত আপনার Game ID Pass(বাধ্যতামূলক)। আপনি ভুল প্রমানিত হলে কর্তৃপক্ষ আপনার Aginst এ যেকোনো ধরনের Statement নিতে পারে।)</p>
                            <div className='flex w-full items-center justify-between gap-3 mt-2 mb-2'>
                                <img className='border border-gray-500 size-40 ' src="/src/assets/image/diamond.png" alt="" />
                                <img className='border border-gray-500 size-40 ' src="/src/assets/image/diamond.png" alt="" />
                                <img className='border border-gray-500 size-40 ' src="/src/assets/image/diamond.png" alt="" />
                            </div>
                            <p>৫<span>*</span> সাধারণত ১০ মিনিটের ভিতরে Order Complete করা হয়। সর্বোচ্চ ১ ঘন্টা সময় লাগতে পারে।</p>
                            <p>৬<span>*</span> ১ ঘন্টার বেশি সময় অতিক্রম হলে Support Team সাথে যোগাযোগ করবেন।</p>
                          </div>
                          <h1>Rules (Step 8)</h1>
                          <div className='font-HindSiligri text-white/70 lg:text-md p-2'>
                            <p>১<span>*</span> Buy Now Click করুন ।</p>
                            <p>২<span>*</span> আপনার Payment Methode টি সিলেক্ট করুন। (বিকাশ, নগদ, রকেট)।</p>
                            <p>৩<span>*</span> বিকাশ , নগদ অথবা রকেট (এর নাম্বার দিন)।</p>
                            <p>৪<span>*</span> আপনার পিন কোড টি দিন।</p>
                            <p>৫<span>*</span> আপনার নাম্বারে OTP Code যাবে তা বসিয়ে দিন বা (Allow করে দিন) ।</p>
                          </div>
                        </div>
                    </div>
                    {/* === Play User ID Section === */}
                    <div className='userSection lg:w-full lg:flex lg:flex-col border border-gray-700 flex items-center justify-between py-2 px-2'>
                        <h1 className='lg:w-full lg:text-2xl lg:font-semibold text-center text-white/75'>Please Enter Your Riot ID</h1>
                        <div className='w-full lg:grid lg:grid-cols-2 gap-2 mt-4'>
                            {/* === Input User ID === */}
                            <div className='userInpt w-full bg-primarybg text-white/70 hover:inset-shadow-sm hover:inset-shadow-gray-100/40 transition-all duration-300 delay-75 ease-in-out'>
                                <input className='w-full outline-none p-2' type="text"placeholder='Riot ID : #1130' />
                            </div>
                            {/* === Checking User ID === */}
                            <div className='userInpt w-full bg-primarybg text-white/70 hover:inset-shadow-sm hover:inset-shadow-green-100/40 transition-all duration-300 delay-75 ease-in-out'>
                                {/* === After entering the user ID, the text Searching for your game ID will appear. If the game ID is found, it will show that name, and a tick mark will appear. (or not Matched your user id) === */}
                                <p className='w-full outline-none text-green-600 p-2' >Subas_   Hebrom </p>
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
                                    <div className='lg:flex items-center '>
                                        <p className='flex items-center'>475 VP 
                                            <img className='size-5 ml-2' src="/src/assets/image/vp-white.svg" alt="" />
                                        </p>
                                    </div>
                                    <p>Bangladesh Region</p>
                                    <div className='text-end'>
                                        <p>#1130</p>
                                        <p>Subas_Hebrom</p>
                                    </div>
                                </div>
                                <hr  className='mt-2 text-gray-500'/>
                                <div className='lg:flex lg:items-center lg:justify-between text-white/70 mt-2'>
                                    <p className='lg:text-md text-start'>
                                        <p><FontAwesomeIcon icon={faDollar}/> 5 USD</p>
                                        <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>650 tk 
                                    </p>
                                    <div className='relative flex lg:gap-2'>
                                        <p className='bg-red-500 w-8 text-center text-xl'>-</p>
                                        <p>2X</p>
                                        <p className='bg-green-700 w-8 text-center text-xl'>+</p>
                                        <div className='absolute bg-pcbg p-1 right-0 -bottom-10'>
                                            <p className='flex gap-1.5'>950<img className='size-5' src="/src/assets/image/vp-icon.svg" alt="" /></p>
                                        </div>
                                    </div>
                                    <p className='lg:text-md text-end'>
                                        <p><FontAwesomeIcon icon={faDollar}/> 10 USD</p>
                                        <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>1,300 tk 
                                    </p>
                                </div>
                                <hr  className='mt-2 text-gray-500'/>
                                <div className='text-white/70 mt-2 text-end'>
                                    <p><FontAwesomeIcon icon={faDollar}/> 10 USD</p>
                                    <h2>Total: <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/> 1,300 TK </h2>
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

export default VpPoint;