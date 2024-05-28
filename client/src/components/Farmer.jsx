import React from "react";
import { Link } from "react-router-dom";
import ImageName from "./ImageName.jsx";
//import DescriptionBlock from "./DescriptionBlock";

const Farmer = ({farmer,farmers}) => {
	console.log(farmer);
	console.log(farmers);
	
;	const { _id,address , description} =	farmer;
	return (
		<>
			<div className="farmer">
				<div className="imagename">
					<div className="farmer-details">
						<Link to={`/farmerDetails/${_id}`}>
							Click for details
							<ImageName description ={description} address={address} farmers = {farmers}/>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Farmer;