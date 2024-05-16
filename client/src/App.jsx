import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/Agrixlanding';
import Marketplace from './pages/Marketplace'
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import Dashboard from './pages/dashboard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext ,createContext} from 'react';
import AuthContext from "./AuthContext";
AOS.init();
function App() {
 
  const [isAuth, setIsAuth] = useState();

 
  
  

  return (
    <>
<AuthContext.Provider value={{ isAuth: isAuth, setIsAuth }}>
    <BrowserRouter>
      <Routes>
      
          <Route index element={<LandingPage />}/>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/signUp" element={<SignUp isAuth = {isAuth}/>} />
        <Route path="/signIn" element={<SignIn isAuth1 = {isAuth}/>} />
        <Route path="/login" element={<SignIn isAuth1 = {isAuth}/>} /> 
        <Route path="/dashboard" element={<Dashboard isAuth = {isAuth}/>}/> 
        <Route path="/marketplace" element={<Marketplace/>} />

        </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
      
    </>
  )
}

export default App
