import React from 'react';
import Farmer from "./Farmer";

function Farmers({farmers}) {
    console.log(farmers);
  return (
    <div>
      	{farmers.map((f) => (
				<Farmer key={f._id} farmer={f} />
			))}
    </div>
  )
}

export default Farmers
