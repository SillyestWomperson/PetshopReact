import React from "react";
import { Image } from "react-bootstrap";

const Photo = ({ src, alt }) => {
	return (
		<div className="gallery-photo-wrapper">
			<Image src={src} alt={alt} fluid className="gallery-photo" />
		</div>
	);
};

export default Photo;
