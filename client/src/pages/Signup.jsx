import useInput from "../hooks/useInput";
import React, { useState, useContext } from "react";
import { login, register, logout } from "../services";
import { Link, NavLink, useNavigate } from "react-router-dom";



function SignUp () {

    let walletaddress;
    const [registered, setRegistered] = useState("false");
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	//   const [userName, setUserName] = useState(""); // New state for user name
	const [userType, setUserType] = useState("trader"); // Default to "Trader"
	const [passwordMatchError, setPasswordMatchError] = useState(false);

    const handleRegister = (e) => {
		e.preventDefault();
		

		// Check if passwords match
		if (password === confirmPassword) {
			setPasswordMatchError(false);
		} else {
			// Set password match error
			setPasswordMatchError(true);
		}
		localStorage.setItem("registered", true);
		register(username, password, walletaddress);
		setRegistered(true);
			};
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

				updateConnectButton(accounts[0]);
				
			} catch (error) {
				console.error(error);
			}
		} else {
			updateConnectButton(undefined, "Please install MetaMask");
		}
	}


    function updateConnectButton(account, errorMessage) {
		const connectButton = document.getElementById("connectButton");

		if (connectButton) {
			if (account === undefined) {
				connectButton.innerHTML =
					errorMessage || "Please connect a wallet";
			} else {
				connectButton.innerHTML = `Connected`;
                walletaddress = account;
			}
		}
	}


    return (
        <>
            <div className="signUp">
                <div className="mt-[20px] flex justify-center items-center">
                    <a href="/"><img className='w-36' src="/Images/Component 2.png" alt=""/></a>
                </div>
                <div className="text-center ml-5 font-medium">
                    <h2>Sign up to have a account</h2>
                </div>
                <div className="forms">
                    <form action="" className="flex justify-center items-center flex-col mt-6">
                    
						<input
                        className='mb-4 rounded-md p-[12px] w-[40%] outline-none border sm:w-[90%] lg:w-[40%]'
							type="email"
							name="username"
                            placeholder="Email" required
							onChange={(e) => setUserName(e.target.value)}
						/>

<br />
					
						<input
                        className="mb-4 rounded-md p-[12px] w-[40%] outline-none border sm:w-[90%] lg:w-[40%]"
							type="password"
                            name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
						/>
				
					<br />
					
                    
						<input
                        className="mb-4 rounded-md p-[12px] w-[40%] outline-none border sm:w-[90%] lg:w-[40%]"
							type="password"
							value={confirmPassword}
                            name="confirmPassword"
							onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
						/>
				
                
					{passwordMatchError && (
						<p style={{ color: "red" }}>Passwords do not match.</p>
					)}
					
                        {/* <input  className='mb-4 rounded-md p-[12px] w-[40%] outline-none border sm:w-[90%] lg:w-[40%]' type="email" name="username" id="" placeholder="Email" required/> */}
                        {/* <input className="mb-4 rounded-md p-[12px] w-[40%] outline-none border sm:w-[90%] lg:w-[40%]" type="password" name="password" id=""  placeholder="Password"required/> */}
                        <Link
							id="connectButton"
							className="button"
							onClick={connectToWallet}
						>
							Connect to Wallet
						</Link>

                        <a className="mt-3 text-[#1BB518] font-medium text-[15px]" href="/login">Login if you already have an account</a>
                        <button className="mt-7 bg-[#1BB518] p-[10px] text-white rounded-md w-[30%] sm:w-[80%] lg:w-[30%]" type="submit" onClick={handleRegister}>Please connect wallet and SIGN UP</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default SignUp;