import React from 'react'

function DetailImageName({imageUrl,farmerName,_id, address, product,practices}) {
    return (
		<div className="textali">
			<img   className="imgdetailpage iltextali"src={imageUrl} />
			<h1 className='textali textcent p-[8px] w-[40%] rounded-md text-white bg-[#1BB518] mb-[30px]'>{farmerName}</h1>
            <h1 className="textali textcent detailtitle">{product}</h1>
            {practices.map((p) => (<p className="textali textcent detailtitle">{p}</p> ))}
           <h1 className="textali textcent"> Current Value: </h1>
           <div className="textali textcent">
           <button className='p-[8px] w-[40%] rounded-md text-white bg-[#1BB518] mb-[30px]'>Stake Your AgrixxSNFTR with {farmerName}</button>
            </div>
		</div>
	);
}

export default DetailImageName
