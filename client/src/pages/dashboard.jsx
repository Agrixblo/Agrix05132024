import Navbar from '../components/nav.jsx';
import React, { useState, useContext } from "react";
import AuthContext from "../AuthContext";
function Dashboard () {
    const { setIsAuth, isAuth } = useContext(AuthContext);
 
 


    

    return (
        
        <>
        
        <Navbar isAuth={isAuth}/>
         <div className="fixed w-full mt-[80px] pl-[30px] -z-50 shadow-lg h-[150%] sm:w-[37%] sm:pl-[20px] md:w-[37%] lg:w-[25%]" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
            <img className='w-[45%] sm:w-[65%]' src="/Images/Component 2.png" alt="" />
            <div className='flex justify-center items-center flex-col w-[60%] mb-[20px]'>
                <img className='w-[25%] mb-[10px] sm:w-[45%]' src="/Images/Ellipse 1.png" alt="" srcSet="" />
                <h2 className='text-center font-medium text-[16px] w-[50%] sm:text-[12px] sm:w-full'>Julius Garba Researcher</h2>
            </div>
            <div className='flex justify-start items-center w-[70%]'>
                <img className='w-[15%] mr-[20px]' src="/Images/ic_baseline-dashboard.png" alt="" />
                <h2 className='text-center font-medium text-[16px] sm:text-[12px]'>Dashboard</h2>
            </div>
            <div className='flex justify-start items-center w-[70%] mt-[10px]'>
                <img className='w-[15%] mr-[20px]' src="/Images/ri_plant-fill.png" alt="" />
                <h2 className='text-center font-medium text-[16px] sm:text-[12px]'>Crop management</h2>
            </div>
            <div className='flex justify-start items-center w-[70%] mt-[10px]'>
                <img className='w-[15%] mr-[20px]' src="/Images/streamline_collaborations-idea-solid.png" alt="" />
                <h2 className='text-center font-medium text-[16px] sm:text-[12px]'>Collaboration</h2>
            </div>
            <div className='flex justify-start items-center w-[70%] mt-[10px]'>
                <img className='w-[15%] mr-[20px]'  src="/Images/icon-park-solid_stock-market.png" alt="" />
                <h2 className='text-center font-medium text-[16px] sm:text-[12px]'>Datas</h2>
            </div>
            <div className='flex justify-start items-center w-[70%] mt-[10px] pb-[180px]'>
                <img className='w-[15%] mr-[20px]' src="/Images/healthicons_market-stall.png" alt="" />
                <h2 className='text-center font-medium text-[16px] sm:text-[12px]'>Marketplace</h2>
            </div>
        </div>
        <div className='relative pt-[100px] left-[28%] w-[70%] sm:left-[40%] sm:w-[57%] md:left-[40%] lg:left-[28%]'>
            <h2 className='font-medium text-[20px] sm:text-[17px]'>Dashboard</h2>
            <div className='pl-[50px] border border-[#f5f5f5] pt-[20px] pb-[50px] mt-[30px] rounded-sm sm:pl-[20px] md:pl-[20px]'>
                <h2 className='text-left font-medium text-[16px] sm:text-[14px]'>Weather Report</h2> 
                <div className='flex justify-start items-center self-center mt-[20px]'>
                    <img className='w-[3%] sm:w-[10%] md:w-[4%] lg:w-[3%]' src="/Images/flag.png" alt="" />
                    <select className='outline-none px-[40px] w-[20%] py-[5px] ml-[10px] cursor-pointer pl-[5px] border rounded-md sm:text-[14px] sm:w-[60%] md:w-[30%] lg:w-[20%]' name="Change Country" id="">
                        <option className='font-medium'>Nigeria</option>
                        <option className='font-medium'>Usa</option>
                        <option className='font-medium'>Dubai</option>
                        <option className='font-medium'>Russia</option>
                    </select>
                </div>
                <div className='flex mt-[20px]'>
                    <img className='w-[5.5%]' src="/Images/fluent_weather-hail-day-48-filled.png" alt="" />
                    <span className='px-[10px] font-medium text-[17px] self-center'>-14</span>
                    <h2 className='font-medium text-[17px] self-center'>Raining/sunny</h2>
                </div>
                <div className='grid grid-cols-7 gap-4 pt-[20px] text-center w-full md:grid-cols-3 md:gap-2 md:w-[60%] lg:w-full lg:grid-cols-7'>
                    <div className='flex justify-center items-center flex-col'>
                        <img className='w-[40%] md:w-[30%]' src="/Images/arcticons_weather-forecast.png" alt="" />
                        <h2 className='font-medium text-[17px] self-center'>Monday</h2>
                        <h3 className='font-medium text-[15px] self-center mt-[5px]'>-10</h3>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <img className='w-[40%] md:w-[30%]' src="/Images/fluent_weather-haze-24-filled.png" alt="" />
                        <h2 className='font-medium text-[17px] self-center'>Tuesday</h2>
                        <h3 className='font-medium text-[15px] self-center mt-[5px]'>-11</h3>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <img className='w-[40%]' src="/Images/mdi_weather-rainy.png" alt="" />
                        <h2 className='font-medium text-[17px] self-center'>Wednesday</h2>
                        <h3 className='font-medium text-[15px] self-center mt-[5px]'>-12</h3>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <img className='w-[40%]' src="/Images/fluent_weather-hail-night-24-filled.png" alt="" />
                        <h2 className='font-medium text-[17px] self-center'>Thursday</h2>
                        <h3 className='font-medium text-[15px] self-center mt-[5px]'>-9</h3>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <img className='w-[40%]' src="/Images/fluent_weather-thunderstorm-48-filled.png" alt="" />
                        <h2 className='font-medium text-[17px] self-center'>Friday</h2>
                        <h3 className='font-medium text-[15px] self-center mt-[5px]'>-8</h3>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <img className='w-[40%]' src="/Images/fluent_weather-hail-day-48-filled.png" alt="" />
                        <h2 className='font-medium text-[17px] self-center'>Saturday</h2>
                        <h3 className='font-medium text-[15px] self-center mt-[5px]'>-14</h3>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <img className='w-[40%]' src="/Images/fluent_weather-sunny-24-filled.png" alt="" />
                        <h2 className='font-medium text-[17px] self-center'>Sunday</h2>
                        <h3 className='font-medium text-[15px] self-center mt-[5px]'>-10</h3>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-[20px]'>
                <div>
                    <div className='flex justify-center'>
                        <h2 className='mr-[40px] mb-[30px] font-medium'>current consumption</h2>
                        <h3 className='font-medium'>17,000,000</h3>
                    </div>
                    <img className="w-[95%]" src="/Images/Untitled.png" alt="" />
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <h2 className='font-medium text-center mb-[40px]'>substainability</h2>
                    <img className="w-[45%]" src="/Images/g1.png" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className='mb-[50px]'>
                    <h2 className='font-medium'>Current Status</h2>
                    <div className='flex justify-between space-x-5 mt-[10px] pb-[20px] border px-[20px] py-[10px]'>
                        <h2 className='font-medium'>Irrigation systems</h2>
                        <h2 className='font-medium text-center'>1300</h2>
                        <h3 className='text-[#85E790] font-medium'>A+</h3>
                    </div>
                    <div className='flex justify-between space-x-5 border pb-[20px] px-[20px] py-[10px]'>
                        <h2 className='font-medium'>Light efficiency</h2>
                        <h2 className='font-medium text-center'>1700</h2>
                        <h3 className='text-[#85E790] font-medium'>A+</h3>
                    </div>
                    <div className='flex justify-between space-x-5 border pb-[20px] px-[20px] py-[10px]'>
                        <h2 className='font-medium'>Machinery</h2>
                        <h2 className='font-medium'>1300</h2>
                        <h3 className='text-[#85E790] font-medium'>A+</h3>
                    </div>
                </div>
                <div className='mt-[20px]'>
                    <div className='flex self-center border pb-[20px] px-[20px] py-[10px]'>
                        <div>
                            <h2 className='font-medium mr-[20px]'>Air temperature</h2>
                            <h2 className='font-medium mt-[7px]'>38 C</h2>
                        </div>
                        <div>
                            <h3 className='font-medium mt-[10px] p-[5px] hi'>High</h3>
                        </div>
                    </div>
                    <div className='flex self-center border pb-[20px] px-[20px] py-[10px]'>
                        <div>
                            <h2 className='font-medium mr-[20px]'>Water content</h2>
                            <h2 className='font-medium mt-[7px]'>32 %</h2>
                        </div>
                        <div>
                            <h3 className='font-medium mt-[10px] p-[5px] hi'>Good</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Dashboard