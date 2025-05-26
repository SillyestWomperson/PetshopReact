import React from "react";
import { Container } from "react-bootstrap";

const PageLabel = ({ title }) => {
	return (
		<div className="page-label-component py-3">
			<Container>
				<h1>{title}</h1>
			</Container>
		</div>
	);
};

export default PageLabel;
