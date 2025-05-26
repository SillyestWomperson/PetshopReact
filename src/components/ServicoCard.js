import React from "react";

function ServicoCard({ imgUrl, imgAlt, title }) {
	return (
		<div className="service-card">
			<div className="service-card-image-wrapper">
				<img src={imgUrl} alt={imgAlt} className="service-card-image" />
			</div>
			<div className="service-card-caption">{title}</div>
		</div>
	);
}

export default ServicoCard;
