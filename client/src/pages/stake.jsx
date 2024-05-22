import React from 'react'
import {useAuth} from "../components/auth.jsx";
import Navbar from "../components/nav.jsx";

function Stake() {

    const auth = useAuth();

  return (<>
    <Navbar/>
    <div>
      Stake
    </div>
    </>
  )
}

export default Stake;


