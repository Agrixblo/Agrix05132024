import { useState ,createContext, useContext}  from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {useAuth} from "../components/auth";
import { logout } from "../services";
import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";


function NavBar () {
    const navigate = useNavigate();
   
    const auth= localStorage.getItem("auth");


    const [nav, setNav] = useState(false);
    const [signedIn,setSignedIn] = useState(false);
    const showNav = ()  => {
        
       setNav(!nav);
       
    };
   
   

    const signOut = async () => {
		
		await logout();
        auth.logout();
        navigate("/home");
	

        
	};

   
   

  
    let navigationContent = (<><li className="text-md"><a className='font-medium' onClick={showNav} href="/home">Home</a></li>
    <li className="text-md"><a className='font-medium' onClick={showNav} href="/marketplace">Marketplace</a></li>
    <li className="text-md"><a className='font-medium' onClick={showNav} href="/dashboard">Dashboard</a></li>
    <li className="text-md"><a className='font-medium' onClick={showNav} href="/finance">Finance</a></li>
    <button className="text-center text-md bg-white border text-[16px] text-black py-[6px] px-[22px] rounded-xl mr-[20px]"><a className='' href="/">Support</a></button> </>);



       


    return (
        <>
            <div className="fixed w-full z-[1000] p-[5px] py-2 bg-white shadow-md shadow-gray-400">
                <nav className="flex justify-between items-center my-[10px] mr-20 ml-[2rem] h-10 pb-13 sm:mx-5 lg:mr-20 lg:ml-[2rem]">
                    <div className="flex justify-between items-center w-[100%] sm:w-[100%] md:w-[100%] lg:w-[20%]">
                        <div className="">
                            <a href="/"><img className="w-36" src="/Images/Component 2.png" alt=""/></a>
                        </div>
                        <div className="w-0 sm:w-7 md:w-8 lg:w-0" onClick={showNav}>
                           {!nav ? <img className="cursor-pointer" src="/Images/menu.png" alt=""/> : <img className="cursor-pointer" src="/Images/close.png" alt=""/>}
                        </div>
                    </div>
                    <ul className="flex justify-center items-center text-[16.5px] space-x-5 text-black sm:hidden md:hidden lg:flex">
             
                       
                    {navigationContent}
                 
                           
                       
                    </ul>
                    {/* <div className={!nav ? 'fixed left-[-100%]' : 'fixed z-[1000] left-0 top-0 w-[40%] text-black mt-[76px] h-full bg-white shadow-md ease-in-out duration-500 sm:w-[80%] md:w-[40%] lg:hidden'}>
                        <ul className="w-full p-12 space-y-6">
                       
                            

                        </ul> */}
                    {/* </div>   */}
                </nav>
            </div>
        </>
    )
}
export default NavBar