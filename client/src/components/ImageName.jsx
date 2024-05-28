import React from 'react';

const ImageName = ({ description}) => {

	const {farmerName, imageUrl, product, practices} = description;
	return (
		<div className="imagename">
			<img src={imageUrl} className="farm" alt="farm"/>
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
