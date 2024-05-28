import React from "react";
import { useParams } from "react-router-dom";
import DetailImageName from "./DetailImageName";
// import UploadedBy from "./UploadedBy";
// import Video from "../Movies/videoPlayer/Video";
// import StarredIn from "./StarredIn";

let activeFarmer;
const FarmerDetails = ( {farmers }) => {
    
	const  {id}  = useParams();
	console.log(`id: `, id, farmers);
const allFarmers = farmers;
console.log(allFarmers);

	activeFarmer = allFarmers.filter((item) => id === item._id);
	console.log(`active Farmer: `, activeFarmer[0]);
	const { address, description } =activeFarmer[0];
     

	return (
		<>
			<div className="detailMovie">
				<div className="detailimagetitle">
					<DetailImageName
						imageUrl={description.imageUrl}
						farmerName={description.farmerName}
						_id = {description._id}
                        address = {address}
						product={description.product}
                        practices= {description.practices}
                         
					/>

					{/* <p>{description}</p>
					<StarredIn starredIn={starredIn} movies={movies} /> */}
				</div>
				{/* <UploadedBy uploadedBy={uploadedBy} /> */}
			</div>
		</>
	);
};

export default FarmerDetails;