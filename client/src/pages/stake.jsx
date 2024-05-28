import React from 'react'
import {useAuth} from "../components/auth.jsx";
import Navbar from "../components/nav.jsx";
import Farmer from "../components/Farmer.jsx";
import farmers from "../assets/farmers.jsx";
function Stake() {

    const auth = useAuth();
console.log(farmers[0]);
  return (<>
    <Navbar/>
    <div className="Farmers">
			{farmers.map((p) => (
				<Farmer key={p._id} asset={p} />
			))}
		</div>
    </>
  )
}

export default Stake;


