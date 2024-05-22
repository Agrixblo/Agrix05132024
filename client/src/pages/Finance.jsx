 
import Navbar from '../components/nav.jsx';
import Footer from '../components/footer.jsx';
import React, { useState, useContext } from "react";
import {useAuth} from "../components/auth.jsx";

const  Finance = () => {
    const auth = useAuth();
    return (
        <>
          <Navbar />
            <div className="pt-[120px] flex justify-center items-center flex-col">
                <h1 className='font-semibold text-[35px] text-center sm:text-[25px] md:text-[35px]'>Harnessing  Data For Change</h1>
                <p className='font-sm w-[40%] text-center mt-[20px] sm:w-[70%] lg:w-[40%]'>Discover how Agrix leverages blockchain technology to collect analyse and share crucial data on biodiversity to drive positive evironmental impact</p>
            </div>
            <div className='grid grid-cols-4 gap-4 mx-[50px] mt-20 mb-[20px] sm:grid-cols-2 lg:grid-cols-4' data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                <img className='w-full' src="/Images/img1.png" alt="" />
                <img className='w-full' src="/Images/img2.png" alt="" />
                <img className='w-full' src="/Images/img 3.png" alt="" />
                <img className='w-full' src="/Images/img 4.png" alt="" />
            </div>
            <div className="pt-[60px] ml-[50px] mr-[30px] mb-[30px]" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <h1 className='text-[35px] mb-[20px] text-center font-semibold sm:text-[30px]'>Solutions</h1>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="">
                        <img className='' src="/Images/img5.png" alt="" />
                        <h2 className='mt-[20px] text-[22px] font-medium sm:text-[20px] lg:text-[22px]'>For Farmers</h2>
                        <p className='w-[97%] mt-[10px] sm:text-[14px] sm:w-[100%] lg:w-[97%] lg:text-[16px]'>Empower farmers with valuable insight derived from shared data </p>
                    </div>
                    <div className="">
                        <img className='' src="/Images/img6.png" alt="" />
                        <h2 className='mt-[20px] text-[22px] font-medium sm:text-[20px] lg:text-[22px]'>For Researchers</h2>
                        <p className='w-[97%] mt-[10px] sm:text-[14px] sm:w-[100%] lg:w-[97%] lg:text-[16px]'>Researchers benefits from comprehensive data repository facilitating studies in biodiversity </p>
                    </div>
                    <div className="">
                        <img className='' src="/Images/img7.png" alt="" />
                        <h2 className='mt-[20px] text-[22px] font-medium sm:text-[20px] lg:text-[22px]'>Data Sharing </h2>
                        <p className='w-[97%] mt-[10px] sm:text-[14px] sm:w-[100%] lg:w-[97%] lg:text-[16px]'>Facilitates  seamless data sharing of biodiversity and agricultural datas to enhance regenerative food security and practices.</p>
                    </div>
                    <div className="">
                        <img className='w-full' src="/Images/img8.png" alt="" />
                        <h2 className='mt-[20px] text-[22px] font-medium sm:text-[20px] lg:text-[22px]'>Data Collection </h2>
                        <p className='w-[97%] mt-[10px] sm:text-[14px] sm:w-[100%] lg:w-[97%] lg:text-[16px]'>Facilitates  seamless data sharing of biodiversity and agricultural datas to enhance regenerative food security and practices. </p>
                    </div>
                </div>
            </div>
            <div className="mt-[50px] px-[50px] mb-[30px]">
                <h1 className='w-[55%] font-semibold text-[25px] mb-[20px] sm:w-[90%] sm:text-[18px] lg:w-[55%] lg:text-[25px]'>Agrix  provides tools and resources to implementand monitor substainable farming and biodiversity practices fostering ecosystem health and resilience</h1>
                <img src="/Images/green.png" alt="" />
            </div>
            <Footer/>
          
        </>
    )
}

export default Finance
