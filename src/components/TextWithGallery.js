import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Photo from "./Photo";

const TextWithGallery = ({ text, photos }) => {
	return (
		<section className="text-with-gallery-section py-5">
			<Container>
				<Row>
					<Col md={12}>
						<p className="text-with-gallery-text mb-4">{text}</p>
					</Col>
				</Row>
				<Row className="justify-content-center">
					{photos &&
						photos.map((photo, index) => (
							<Col key={index} xs={6} sm={4} md={2} className="mb-3 d-flex justify-content-center">
								<Photo src={photo.src} alt={photo.alt} />
							</Col>
						))}
				</Row>
			</Container>
		</section>
	);
};

export default TextWithGallery;
