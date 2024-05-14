function SignIn () {
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
                    <input  className='mb-4 rounded-md p-[12px] w-[40%] outline-none border sm:w-[90%] lg:w-[40%]' type="email" name="Email" id="" placeholder="Email" required/>
                    <input  className='mb-4 rounded-md p-[12px] w-[40%] outline-none border sm:w-[90%] lg:w-[40%]' type="password" name="Password" id="" placeholder="Password" required/>
                    <a className="mt-3 text-[#1BB518] font-medium text-[15px]" href="/signUp">Signup if you dont have an account</a>
                    <button className="mt-7 bg-[#1BB518] p-[10px] text-white rounded-md w-[30%] sm:w-[80%] lg:w-[30%]" type="submit">LOGIN</button>
                </form>
            </div>
        </>
    )
}
export default SignIn