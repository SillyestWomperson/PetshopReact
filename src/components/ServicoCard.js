import React from "react";

function ServicoCard({ imgUrl, imgAlt, title, imgHeight }) {
	return (
		<div className="service-card">
			<img
				src={imgUrl}
				alt={imgAlt}
				className="service-card-image"
				style={{ height: imgHeight }} 
			/>
			<div className="service-card-caption">{title}</div>
		</div>
	);
}

export default ServicoCard;
