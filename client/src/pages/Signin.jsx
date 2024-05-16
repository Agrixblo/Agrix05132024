import React from "react";
import { useState, useContext ,createContext} from "react";

import { login } from "../services";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";

import useInput from "../hooks/useInput";



function SignIn () {
   
    const { setIsAuth, isAuth } = useContext(AuthContext);
   
	const navigate = useNavigate();

	// Changed from 'username' to 'loginIdentifier'

	const {
		value: username,
		hasError: usernameInvalid,
		valid: usernameValid,
		changeHandler: usernameChangeHandler,
		blurHandler: usernameBlurHandler,
		reset: usernameReset,
	} = useInput((username) => username.trim().length > 5);

	const {
		value: password,
		hasError: passwordInvalid,
		valid: passwordValid,
		changeHandler: passwordChangeHandler,
		blurHandler: passwordBlurHandler,
		reset: passwordReset,
	} = useInput((password) => password.trim().length > 5);
	const handleLogin = async (e) => {

		e.preventDefault();
        
		console.log(username, password);
		login(username, password, setIsAuth);
		
	
        
       	navigate("/dashboard");
	};


	const handleRegister = () => {
		console.log("Navigate to registration page or show registration form.");
	};


    return (
        <>
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
									id="username"
									className="mb-4 rounded-md p-[12px] w-[40%] outline-none border sm:w-[90%] lg:w-[40%]"
									onChange={usernameChangeHandler}
									onBlur={usernameBlurHandler}
									value={username}
								/>
                                {usernameInvalid && (
									<p>please enter valid username</p>
								)}

<br />
<input
									type="password"
									id="password"
									className="mb-4 rounded-md p-[12px] w-[40%] outline-none border sm:w-[90%] lg:w-[40%]"
									onChange={passwordChangeHandler}
									onBlur={passwordBlurHandler}
									value={password}
								/>

								{passwordInvalid && (
									<p>please enter valid username</p>
								)}
				
					<br /><a className="mt-3 text-[#1BB518] font-medium text-[15px]" href="/signUp">Signup if you dont have an account</a>
                    <button className="mt-7 bg-[#1BB518] p-[10px] text-white rounded-md w-[30%] sm:w-[80%] lg:w-[30%]" type="submit" onClick={handleLogin}>LOGIN</button>
                </form>
            </div>
        </>
    )
}
export default SignIn