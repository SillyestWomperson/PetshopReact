import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
	return (
		<footer className="site-footer text-center py-4">
			<Container>
				<p className="mb-0">© {new Date().getFullYear()} Pet Shop. Todos os direitos reservados.</p>
			</Container>
		</footer>
	);
};

export default Footer;
