import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServicoCard from "./ServicoCard";

import banhoTosaImg from "../imagens/pagina-home/banho-tosa.jpg";
import vacinaCachorroImg from "../imagens/pagina-home/vacina-cachorro.jpg";
import adestramentoImg from "../imagens/pagina-home/adestramento.jpg";
import hotelCachorrosImg from "../imagens/pagina-home/hotel-para-cachorros.jpg";

const servicesData = [
	{
		id: 1,
		imgUrl: banhoTosaImg,
		imgAlt: "Banho e Tosa",
		title: "Banho e Tosa",
	},
	{
		id: 2,
		imgUrl: vacinaCachorroImg,
		imgAlt: "Pet Care",
		title: "Pet Care",
	},
	{
		id: 3,
		imgUrl: adestramentoImg,
		imgAlt: "Adestramento",
		title: "Adestramento",
	},
	{
		id: 4,
		imgUrl: hotelCachorrosImg,
		imgAlt: "Hotel Resort",
		title: "Hotel Resort",
	},
];

function Servico() {
	return (
		<section id="servicos" className="py-5">
			<Container>
				<h2 className="text-center mb-4">Nossos Serviços</h2>
				<Row>
					{servicesData.map((service) => (
						<Col sm={12} md={6} lg={3} key={service.id} className="mb-4 d-flex">
							<ServicoCard imgUrl={service.imgUrl} imgAlt={service.imgAlt} title={service.title} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
}

export default Servico;
