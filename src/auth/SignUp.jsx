import React from 'react';
import "../css/Login.css";
import { NavLink } from 'react-router';

const SignUp = () => {
    return (
        <div className='lg:w-full bg-mainbg lg:h-screen lg:mt-12 font-Ubuntu'>
            <section className='log-bgbox lg:w-[1296px] lg:h-screen mx-auto border-r border-r-gray-700 border-l border-l-gray-700 justify-items-center'>
                <div className='min-w-[1200px]'>
                    <h1 className='lg:text-3xl text-gray-300 font-black text-center pt-12 pb-1'>WelCome</h1>
                    <p className='lg:text-gray-300 text-center lg:text-lg lg:mb-8'>Please Enter Your Details</p>
                    <div className='sign-up-box w-[50%] mt-28 mx-auto'>
                        <div className='relative loginCard lg:w-[100%] lg:h-[55%] bg-primarybg mx-auto flex flex-col gap-6 items-center justify-center p-2'>
                            <h1 className='lg:text-2xl font-bold text-gray-300'>Sign Up</h1>
                            <div className='log-first-box w-full'>
                                <div className='log-snd-box w-full lg:m-1'>
                                    <input className='log-inpt w-full text-white px-4 lg:text-lg lg:py-1 outline-none m-1' type="text" placeholder='Enter Your User Name' />
                                </div>
                            </div>
                            <div className='log-first-box w-full'>
                                <div className='log-snd-box w-full lg:m-1'>
                                    <input className='log-inpt w-full text-white px-4 lg:text-lg lg:py-1 outline-none m-1' type="email" placeholder='Enter Your Email Address' />
                                </div>
                            </div>
                            <div className='log-first-box w-full'>
                                <div className='log-snd-box w-full lg:m-1'>
                                    <input className='log-inpt w-full text-white px-4 lg:text-lg lg:py-1 outline-none m-1' type="password" placeholder='Enter Your Password' />
                                </div>
                            </div>
                            <div className='log-first-box w-70'>
                                <div className='log-snd-box w-70 lg:m-1'>
                                    <button className='log-inpt w-full text-white px-4 lg:text-lg lg:py-1 outline-none m-1' type='submit'>Sign Up</button>
                                </div>
                            </div>
                            <NavLink to='/login' className='flex lg:text-lg text-gray-300'><span>Allready have an Account?</span> <p className='underline'>Log In</p></NavLink>
                            <div className='absolute top-1.5 -z-1 opacity-40'>
                                <img className='' src="/src/assets/image/log-card-image.png" alt="" />
                            </div>
                        </div>
                        <div className="logt-triangle"></div>
                        <div className="logb-triangle"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;