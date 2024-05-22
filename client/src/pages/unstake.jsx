import React from 'react'
import {useAuth} from "../components/auth.jsx";
import Navbar from "../components/nav.jsx";

function Unstake() {

    const auth = useAuth();
  return (<>
    <Navbar/>
    <div>
      UnStake
    </div>
    </>
  )
}

export default Unstake
