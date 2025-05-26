import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contato = () => {
	return (
		<section className="contato-section py-5">
			<Container>
				<h2 className="text-center mb-5">Fale Conosco</h2>
				<Row>
					<Col md={7}>
						<Form>
							<Form.Group className="mb-3" controlId="formNome">
								<Form.Control type="text" placeholder="Nome" className="contato-form-input" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formEmail">
								<Form.Control type="email" placeholder="E-mail" className="contato-form-input" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formMensagem">
								<Form.Control
									as="textarea"
									rows={5}
									placeholder="Mensagem"
									className="contato-form-input"
								/>
							</Form.Group>
							<Button variant="primary" type="submit" className="contato-form-button">
								ENVIAR
							</Button>
						</Form>
					</Col>
					<Col md={5} className="ps-md-5">
						<div className="contact-info">
							<p className="contact-info-item">
								<span role="img" aria-label="phone" className="contact-icon">
									📞
								</span>
								(48) 3222 0098
							</p>
							<p className="contact-info-item">
								<span role="img" aria-label="whatsapp" className="contact-icon">
									📱
								</span>
								(48) 99383 0928
							</p>
							<p className="contact-info-item">
								<span role="img" aria-label="location" className="contact-icon">
									📍
								</span>
								Rua Marechal Deodoro, 55 - Centro - Florianópolis/SC
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Contato;
