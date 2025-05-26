import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContentImageRight = ({ imageUrl, imageAlt, title, text, buttonText, buttonLink }) => {
	return (
		<section className="content-image-section py-5">
			<Container>
				<Row className="align-items-center">
					<Col md={8} className="order-md-1 mb-4 mb-md-0">
						{title && <h2 className="content-section-title mb-3">{title}</h2>}
						<p className="content-section-text">{text}</p>
						{buttonText && buttonLink && (
							<Button as={Link} to={buttonLink} variant="dark" className="mt-3 content-section-button">
								{buttonText}
							</Button>
						)}
					</Col>
					<Col md={4} className="order-md-2">
						<Image
							src={imageUrl}
							alt={imageAlt}
							fluid
							className="content-section-image content-section-image-smaller"
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ContentImageRight;
