import React from "react";
import { Link } from "react-router-dom";
import ImageName from "./ImageName.jsx";
//import DescriptionBlock from "./DescriptionBlock";

const Farmer = ({farmer}) => {
	const { description, address,_id } =	farmer;
	return (
		<>
			<div className="farmer">
				<div className="imagename">
					<div className="farmer-details" key={_id}>
						<Link to={`/farmerDetails/${_id}`}>
							Click for details
							<ImageName decription ={description} address={address}/>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Farmer;