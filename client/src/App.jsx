import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Agrixlanding';
import Marketplace from './pages/Marketplace';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import SignOut from './pages/signout';
import Finance from "./pages/Finance";
import Stake from "./pages/stake.jsx";
import Unstake from "./pages/unstake";
import Dashboard from './pages/dashboard';
import FarmerDetails from './components/FarmerDetails.jsx';
import {AuthProvider,useAuth}  from "./components/auth";

import AOS from 'aos';
import Navbar from "./components/nav.jsx";
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext ,createContext, useEffect} from 'react';
import {FarmersContext} from "./context/Farmers.jsx";
import { getFarmers } from "./services.js";
 import {ethers} from "ethers";

AOS.init();
function App() {
   const auth = useAuth();
   const [farmers, setFarmers] = useState([]);

   useEffect(() => {
        getFarmers(setFarmers);
    }, []);

    const updateFarmers = () => {
        getFarmers(setFarmers);
    };


    




  return (
    <BrowserRouter>
     
      <FarmersContext.Provider 
					value={{
						farmers: farmers,
						setFarmers,
						updateFarmers,
					}}
				>
    
    
      <Routes>
      
        <Route index element={<LandingPage farmers = {farmers}/>}/>
        <Route path="/home" element={<LandingPage farmers={farmers}/>} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signout" element={<SignOut  />}/> 
        <Route path="/login" element={<SignIn  />} /> 
        <Route path="/finance" element={<Finance  />} /> 
        <Route path="/dashboard" element={<Dashboard  />}/> 
        <Route path="/marketplace" element={<Marketplace  farmers={farmers}/>} />
        <Route path="/stake" element={<Stake  farmers={farmers}/>} /> 
        <Route path="/unstake" element={<Unstake />} /> 
        <Route path= "/farmerDetails/:id" element ={<FarmerDetails farmers = {farmers}/>}/>

        </Routes>
   
    </FarmersContext.Provider>
     
      
     
    </BrowserRouter>
   
  )
}

export default App
