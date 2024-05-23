import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Agrixlanding';
import Marketplace from './pages/Marketplace';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import SignOut from './pages/signout';
import Finance from "./pages/Finance";
import Stake from "./pages/stake";
import Unstake from "./pages/unstake";
import Dashboard from './pages/dashboard';
import {AuthProvider,useAuth}  from "./components/auth";
import AOS from 'aos';
import Navbar from "./components/nav.jsx";
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext ,createContext} from 'react';
 import {ethers} from "ethers";

AOS.init();
function App() {
   const auth = useAuth();


  return (
   
    <AuthProvider >
    <BrowserRouter>
    
      <Routes>
      
        <Route index element={<LandingPage/>}/>
        <Route path="/home" element={<LandingPage/>} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signout" element={<SignOut  />}/> 
        <Route path="/login" element={<SignIn  />} /> 
        <Route path="/finance" element={<Finance  />} /> 
        <Route path="/dashboard" element={<Dashboard  />}/> 
        <Route path="/marketplace" element={<Marketplace  />} />
        <Route path="/stake" element={<Stake  />} /> 
        <Route path="/unstake" element={<Unstake />} /> 

        </Routes>
    </BrowserRouter>
     
      
    </AuthProvider>
   
  )
}

export default App
