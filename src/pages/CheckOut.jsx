import { faBangladeshiTakaSign, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../css/FreeFireDiamond.css";
import { NavLink } from 'react-router';

const CheckOut = () => {
    return (
        <div className='lg:w-full bg-mainbg lg:h-auto lg:mt-12 font-Ubuntu'>
            <section className='lg:w-[1296px] lg:h-auto bg-primarybg border-r border-r-gray-700 border-l border-l-gray-700 mx-auto justify-items-center lg:pt-8 text-white p-2'>
                <h1 className='text-2xl text-gray-500 font-semibold'>Billing Details</h1>
                {/* ==== User ID Confirmation Section === */}
                <div className='lg:w-full lg:grid lg:grid-cols-2 lg:gap-5 mt-8 mb-8 '>
                    {/* === Details Section === */}
                    <div className='userSection lg:w-full lg:flex lg:flex-col border border-gray-700 flex items-center justify-between py-2 px-2'>
                        <h2 className='lg:w-full lg:text-xl lg:font-semibold text-center text-white/75'>Your Order Details</h2>
                        {/* === Order Details Section === */}
                        <div className='w-full border border-gray-600 p-1 mb-4 mt-2'>
                            <div className='orderCardDetails w-full bg-primarybg p-4'>
                                <div className='text-white/70'>
                                    <h1 className='text-md font-semibold'>We Sent You, Your Billing Details WhatsApp Number or Your Email Address</h1>
                                    <div className='lg:flex lg:flex-col gap-5 mt-3'>
                                        <div className='lg:flex lg:flex-col lg:gap-2'>
                                            <p>WhatsApp Number</p>
                                            <input className='outline-none border border-gray-700 rounded-lg p-2 text-white/70' type="text" placeholder='Enter Your WhatsApp Number' />
                                        </div>
                                        <div className='lg:flex lg:flex-col lg:gap-2'>
                                            <p>Email Address</p>
                                            <input className='outline-none border border-gray-700 rounded-lg p-2 ' type="email" placeholder='subashembrom@gmail.com' />
                                        </div>
                                    </div>
                                </div>
                                <hr className='text-gray-700 mt-4' />
                                <div className='lg:flex lg:items-start lg:justify-between text-white/70 items-center mt-4'>
                                    <div className='lg:flex items-center'>
                                        <p>5,000 Diamonds</p>
                                    </div>
                                    <p>Bangladesh Server</p>
                                    <div>
                                        <p>2189788657</p>
                                        <p>Subas Hebrom</p>
                                    </div>
                                </div>
                                <hr  className='mt-2 text-gray-700'/>
                                <div className='lg:flex lg:items-center lg:justify-between text-white/70 mt-2'>
                                    <p className='lg:text-md'> <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>3,100 tk</p>
                                    <div className='relative flex lg:gap-2'>
                                        <p>2X</p>
                                        <div className='absolute bg-pcbg p-1 right-0 -bottom-10 px-4'>
                                            <p className='flex items-center justify-center gap-1.5'>10,000 <img className='size-5' src="/public/image/diamond.png" alt="" /></p>
                                        </div>
                                    </div>
                                    <p> <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/> 6,200 TK</p>
                                </div>
                                <hr  className='mt-2 text-gray-700'/>
                                <div className='text-end text-white/70 mt-2'>
                                    <h2>Total: <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/> 6,200 TK </h2>
                                </div>
                            </div>
                            <div className='w-full flex items-end justify-end text-end mt-4 mb-4'>
                                <NavLink to='/check-out' className='buyBtn bg-primarybg lg:text-lg text-white/70 flex items-center justify-center w-30' type='submit'><span className='py-1.5'>Confirm</span></NavLink>
                            </div>
                        </div>
                    </div>
                    {/* === Play User ID Section === */}
                    <div className='userSection lg:w-full lg:flex lg:flex-col border border-gray-700 flex items-center justify-between py-2 px-2'>
                        <h1 className='lg:w-full lg:text-xl lg:font-semibold text-center text-white/75'>Your Order</h1>
                        {/* === Order Details Section === */}
                        <div className='w-full border border-gray-600 p-1 mb-4'>
                            <div className='orderCard w-full bg-primarybg p-4'>
                                
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

export default CheckOut;