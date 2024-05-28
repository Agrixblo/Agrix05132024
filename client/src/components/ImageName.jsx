import React from 'react';

const ImageName = ({ decription, address }) => {

	const {farmerName, imageUrl, product, practices} = decription;
	return (
		<div className="imagename">
			<img src={imageUrl} className="char" alt="char"/>
			<h2 className="name">{farmerName}</h2>
			<h2>{product}</h2>
			<h2>Practices</h2>
			{practices.map((p) => (
				<p>{p}</p>
			))}
		</div>
	);
};

export default ImageName
