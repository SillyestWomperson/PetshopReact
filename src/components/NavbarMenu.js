import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import petShopLogo from "../imagens/petShopLogo.png";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
	return (
		<Navbar bg="light" data-bs-theme="light" expand="lg" className="py-2 main-navbar">
			<Container>
				<Navbar.Brand className="logo">
					<Link to="/">
						<img src={petShopLogo} alt="Logo Pet Shop" />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={Link} to="/" className="menu">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/banho-e-tosa" className="menu">
							Banho e Tosa
						</Nav.Link>
						<Nav.Link as={Link} to="/hotel-resort" className="menu">
							Hotel Resort
						</Nav.Link>
						<Nav.Link as={Link} to="/adestramento" className="menu">
							Adestramento
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarMenu;
