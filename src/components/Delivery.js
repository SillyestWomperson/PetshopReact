import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Delivery = ({ imageSrc, imageAlt, title, phoneNumber }) => {
	return (
		<section className="delivery-section">
			<Container fluid>
				<Row className="g-0">
					<Col md={7} className="delivery-image-col">
						<Image src={imageSrc} alt={imageAlt} fluid className="delivery-image" />
					</Col>
					<Col
						md={5}
						className="delivery-text-col d-flex flex-column justify-content-center align-items-center"
					>
						<h3>{title}</h3>
						<p className="delivery-phone-number">{phoneNumber}</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Delivery;
