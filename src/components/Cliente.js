import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Cliente = ({ title, text, imageUrl, imageAlt }) => {
	return (
		<section className="cliente-section py-5">
			<Container>
				<Row className="align-items-center">
					<Col md={7}>
						<h2 className="mb-4">{title}</h2>
						<p>{text}</p>
					</Col>
					<Col md={5}>
						<Image src={imageUrl} alt={imageAlt} fluid className="cliente-image" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Cliente;
