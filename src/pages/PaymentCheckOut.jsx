import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../css/FreeFireDiamond.css";
import { NavLink } from 'react-router';

const PaymentCheckOut = () => {
    return (
        <div className='lg:w-full bg-mainbg lg:h-auto lg:mt-12 font-Ubuntu'>
            <section className='lg:w-[1296px] lg:h-auto bg-primarybg border-r border-r-gray-700 border-l border-l-gray-700 mx-auto justify-items-center lg:pt-8 text-white p-2'>
                <h1 className='text-2xl text-gray-500 font-semibold'>Billing Details</h1>
                {/* ==== User ID Confirmation Section === */}
                <div className='lg:w-full flex items-center justify-between lg:gap-5 mt-8 mb-8 '>
                    {/* === Details Section === */}
                    <div className='userSection lg:flex lg:flex-col border border-gray-700 mx-auto py-2 px-2'>
                        <h2 className='lg:w-full lg:text-xl lg:font-semibold text-center text-white/75'>Payment Methods</h2>
                        {/* === Order Details Section === */}
                        <div className='w-full border border-gray-600 p-1 mb-4 mt-2'>
                            <div className='orderCardDetails w-full bg-primarybg p-4'>
                                <div className='text-white/70'>
                                    <div className='w-36 h-16 bg-white/70 flex items-center justify-center mx-auto rounded-md mt-2'>
                                        <img className='object-cover' src="/src/assets/image/bkash.png" alt="" />
                                    </div>
                                    <div className='space-y-1'>
                                        <h1>Transaction ID</h1>
                                        <input className='focus:border-sky-500 bg-pcbg outline-none p-2 rounded border border-[#E2136E]' type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex items-end justify-end text-end mt-4 mb-4'>
                                <NavLink to='/payment-check-out' className='buyBtn bg-primarybg lg:text-lg text-white/70 flex items-center justify-center w-30' type='submit'><span className='py-1.5'>Confirm</span></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PaymentCheckOut;