import React from "react";
import { useState, useContext ,createContext} from "react";
import {useAuth} from "../components/auth";
import { login } from "../services";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Navbar from "../components/nav.jsx";

import useInput from "../hooks/useInput";



export const SignIn = ( ) => {
   	const navigate = useNavigate();
	const [user, setUser] = useState('');
	const auth = useAuth();
	const [password, setPassword] = useState('');
	 

	// const {
	// 	value: user,
	// 	hasError: usernameInvalid,
	// 	valid: usernameValid,
	// 	changeHandler: usernameChangeHandler,
	// 	blurHandler: usernameBlurHandler,
	// 	reset: usernameReset,
	// } = useInput((username) => username.trim().length > 5);

	// const {
	// 	value: password,
	// 	hasError: passwordInvalid,
	// 	valid: passwordValid,
	// 	changeHandler: passwordChangeHandler,
	// 	blurHandler: passwordBlurHandler,
	// 	reset: passwordReset,
	// } = useInput((password) => password.trim().length > 5);
	const handleLogin = () => {
	

		console.log("login clicked");
		auth.login(user);
		console.log("auth: ",auth);
		login(user,password,auth.login);
		console.log(user, password);
		localStorage.setItem("auth",auth);
		console.log(localStorage);
		
		navigate("/dashboard");
	};


	const handleRegister = () => {
		console.log("Navigate to registration page or show registration form.");
	};


    return (
        <>
		<Navbar  />
            <div className="mt-[20px] flex justify-center items-center">
                <a href="/"><img className='w-36' src="/Images/Component 2.png" alt=""/></a>
            </div>
            <div className="text-center ml-5 font-medium">
                <h2>Login to your account</h2>
            </div>
            <div className="">
                <form action="" className="flex justify-center items-center flex-col mt-6">
                <input
									type="text"
									id="user"
									className="mb-4 rounded-md p-[12px] w-[40%] outline-none border sm:w-[90%] lg:w-[40%]"
									onChange={(e) => setUser(e.target.value)}	/>
                                {/* {usernameInvalid && (
									<p>please enter valid username</p>
								)} */}

<br />
<input
									type="password"
									id="password"
									className="mb-4 rounded-md p-[12px] w-[40%] outline-none border sm:w-[90%] lg:w-[40%]"
									onChange={(e)=> setPassword(e.target.value)}
							 
								/>

								{/* {passwordInvalid && (
									<p>please enter valid username</p>
								)} */}
				
					<br /><a className="mt-3 text-[#1BB518] font-medium text-[15px]" href="/signUp">Signup if you dont have an account</a>
                    <button className="mt-7 bg-[#1BB518] p-[10px] text-white rounded-md w-[30%] sm:w-[80%] lg:w-[30%]" type="submit" onClick={handleLogin}>LOGIN</button>
                </form>
            </div>
        </>
    )
}
export default SignIn