import React from "react";
import { Container } from "react-bootstrap";

const CallToAction = ({ message }) => {
	return (
		<section className="call-to-action-header text-center">
			<Container>
				<h2>{message}</h2>
			</Container>
		</section>
	);
};

export default CallToAction;
