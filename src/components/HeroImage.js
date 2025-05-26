import React from "react";

const HeroImage = ({ imageUrl, imageAlt = "Banner da página" }) => {
	return (
		<div
			className="hero-image-component"
			style={{ backgroundImage: `url(${imageUrl})` }}
			role="img"
			aria-label={imageAlt}
		></div>
	);
};

export default HeroImage;
