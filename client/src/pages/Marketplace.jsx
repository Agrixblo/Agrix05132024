import Navbar from '../components/nav.jsx';
import Footer from '../components/footer.jsx';
import React, { useState, useContext } from "react";
import {useAuth} from "../components/auth.jsx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getWithWallet } from '../services.js';


function Marketplace () {
 const navigate = useNavigate();
    async function connectToWallet() {
		try {
			await connect();
		} catch (error) {
			console.error(error);
		}
	}


    async function connect() {
		if (typeof window.ethereum !== "undefined") {
			try {
				await window.ethereum.request({
					method: "eth_requestAccounts",
				});

				const accounts = await window.ethereum.request({
					method: "eth_accounts",
				});
				console.log(accounts[0]);
				updateConnectButton(accounts[0]);
				localStorage.setItem("walletaddress",accounts[0]);
				
			} catch (error) {
				console.error(error);
			}
		} else {
			updateConnectButton(undefined, "Please install MetaMask");
		}
	}


    async function updateConnectButton(account, errorMessage) {
		const connectButton = document.getElementById("connectButton");

		if (connectButton) {
			if (account === undefined) {
				connectButton.innerHTML =
					errorMessage || "Please connect a wallet";
			} else {
				connectButton.innerHTML = `Connected`;
				
                localStorage.setItem("walletaddress",account);
                let currentUser = await getWithWallet(account);
                console.log(currentUser);
                let {username, email, password, walletaddress, profileAddress,userType} = currentUser;
                const userData1 = {username, email, password, walletaddress, profileAddress,userType};
                console.log(userData1);
                let items =JSON.stringify(userData1);
               localStorage.setItem("userInfo",items);
               console.log(localStorage);

         
             
                navigate("../dashboard");
			}
		}
    }
   
    return (
        <>
            <Navbar/>
            <div className="flex justify-center items-center pt-[150px] flex-col" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className="">
                    <h1 className='text-center text-[30px] font-medium mb-[40px] sm:text-[25px] lg:text-[30px]'>WHAT YOU NEED TO DO?</h1>
                </div>
                <div className="grid grid-cols-2 mb-[50px] w-full py-[30px] px-[50px] sm:grid-cols-1 sm:py-[10px] sm:px-[20px] lg:py-[30px] lg:px-[50px] lg:grid-cols-2">
                    <div className="flex justify-center items-center flex-col shadow-md w-[90%] sm:mb-[20px] sm:w-full lg:mb-0 lg:w-[90%]">
                        <img className='w-[25%]' src="/Images/soyo.png" alt="" />
                        <h2 className='text-[20px] font-medium mt-[10px] mb-[10px]'>Farmer or Researcher</h2>
                        <p className='text-[16px] w-[70%] mb-[20px] text-center sm:w-[90%] sm:text-[15px] lg:w-[70%] lg:text-[16px]'>Gather, store,track and collect biodiversity datas. leverage and egenerate food security and practices</p>
                       <button className='p-[8px] w-[40%] rounded-md text-white bg-[#1BB518] mb-[30px]' type="submit"><a href="/signUp">Sign Up</a></button>
                    </div>
                    <div className="flex justify-center items-center flex-col shadow-md w-[90%] sm:w-full lg:w-[90%]">
                        <img className='w-[25%]' src="/Images/sell.png" alt="" />
                        <h2 className='text-[20px] font-medium mt-[10px] mb-[10px]'>Trader</h2>
                        <p  className='text-[16px] w-[60%] mb-[20px] text-center sm:w-[90%] sm:text-[15px] lg:w-[70%] lg:text-[16px]'>Track, trade,manage and invest in agriculture products</p>
                        <button className='button p-[20px] w-[40%] rounded-md text-white bg-[#1BB518] mb-[30px]' id="connectButton" type="submit" onClick={connectToWallet}>Sign In/Connect Wallet</button>
                        
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-[30px] ml-[50px] sm:grid-cols-1 lg:grid-cols-2">
                <div className="">
                    <h1 className='pad20 text-[35px] font-medium mb-[30px] sm:text-[30px] lg:text-[35px]'>Agrix finance</h1>
                    <p className='w-[70%] text-[35px] sm:w-full lg:w-[70%] '>trade and invest in foods and agriculture!</p>
                    <p className='w-[70%] text-[35px] sm:w-full lg:w-[70%]'>Put your money to work</p>
                    <h1 className='pad20 text-[35px] font-medium mb-[30px] sm:text-[30px] lg:text-[35px]'>YOU’RE IN CONTROL</h1>
                
                <p className='w-[70%] text-[35px] sm:w-full lg:w-[70%]'>Funding agriculture, biodiversity and foods products and businesses with crypto coins and trade on them to earn</p>
           
                </div>
                <img className="w-[65%]" src="/Images/dd.png" alt="" />
            </div>
            <div className="flex justify-center items-center flex-col mt-[80px]" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
             </div>
            <div className="flex justify-center items-center flex-col py-[40px] pl-[40px] pr-[20px] bg-[#F0BD07] sm:pl-[20px] lg:pl-[40px]" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                <h2 className='text-center mb-[40px] text-[20px] font-medium w-[60%] sm:w-full lg:w-[60%]'>Take Advantage of market opportunities and get finance as a biodiversity business or a Investor</h2>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-1 lg:grid-cols-4">
                    <div className="mr-[30px] mb-[30px]">
                        <h1 className='text-[30px] font-medium'>1</h1>
                        <h3 className='text-[20px] font-medium mb-[20px]'>Indicative Quote</h3>
                        <p className='w-[100%]'>Funds your biodiversity business using blockchain and get indicative martket quote</p>
                    </div>
                    <div className="mr-[30px] mb-[30px]">
                        <h1 className='text-[30px] font-medium'>2</h1>
                        <h3 className='text-[20px] font-medium mb-[20px]'>Trade</h3>
                        <p>Let your business be in blockchain market and tokenize your business for investors to fund</p>
                    </div>
                    <div className="mr-[30px] mb-[30px]">
                        <h1 className='text-[30px] font-medium'>3</h1>
                        <h3 className='text-[20px] font-medium mb-[20px]'>Revenues</h3>
                        <p>Get revenues by allowing investors invest in your products using tokens</p>
                    </div>
                    <div className="mr-[30px] mb-[30px]">
                        <h1 className='text-[30px] font-medium'>4</h1>
                        <h3 className='text-[20px] font-medium mb-[20px]'>Market opportunities</h3>
                        <p>Let your biodiversity business be among ther top tier industry,gather data and new research to build and regenerate more.</p>
                    </div>
                </div>
                <div className = "grid grid-cols-2 gap-10 sm:grid-cols-1 lg:grid-cols-2">

                <button className='rounded-xl pad20 text-[35px] w-[100%] bg-[#1BB518] font-medium mb-[30px] sm:text-[30px] lg:text-[35px]' type="submit"><a href="/stake">Stake tokens with a Farmer</a></button>
                    <button className='rounded-xl pad20 text-[35px] w-[100%] bg-[#1BB518] font-medium mb-[30px] sm:text-[30px] lg:text-[35px]' type="submit"><a href="/unstake">Unstake tokens with a Farmer</a></button>
</div>
                {/* <button className='p-[10px] w-[15%] rounded-md text-white bg-[#4FCAFF] sm:w-[90%] lg:w-[15%]'>Get in touch</button> */}
            </div>
            <Footer/>
        </>
    )
}
export default Marketplace