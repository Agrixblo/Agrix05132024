import React from 'react'
import {useAuth} from "../components/auth.jsx";
import Navbar from "../components/nav.jsx";
import Farmers from "../components/Farmers.jsx";
import { getFarmers } from "../services";


function Stake() {

  let farmers =[];
async function getTheFarmers() {
  let result = await getFarmers();
  for (let c = 0; c < result.length;c++) {
    farmers.push(result[c]);
  }
  

}

getTheFarmers();

 
console.log(farmers);
  return (<>
    <Navbar/>
    <div className="Farmers">
			<Farmers farmers= {farmers}/>
		</div>
    Farmers
    </>
  )
}

export default Stake;


