import React from 'react'
import {useAuth} from "../components/auth.jsx";
import Navbar from "../components/nav.jsx";
import Farmer from "../components/Farmer.jsx";
import { getFarmers } from "../services";


function Stake() {
async function getTheFarmers() {
  await getFarmers();
}

const farmers = getTheFarmers();
    const auth = useAuth();
console.log(farmers[0]);
  return (<>
    <Navbar/>
    <div className="Farmers">
			{farmers.map((f) => (
				<Farmer key={f._id} farmer={f} />
			))}
		</div>
    </>
  )
}

export default Stake;


