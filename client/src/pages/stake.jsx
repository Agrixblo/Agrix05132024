import React from 'react';
import {useAuth} from "../components/auth.jsx";
import Navbar from "../components/nav.jsx";
import Farmers from "../components/Farmers.jsx";
import { getFarmers } from "../services";


function Stake({farmers}) {

 



 return (<>
 <Navbar/>
  <div>
  <Farmers farmers= {farmers} />
  </div>
  </>
)
}
 



export default Stake;


