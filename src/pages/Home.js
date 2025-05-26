import React from "react";
import Banner from "../components/Banner";
import Servico from "../components/Servico";
import CallToAction from "../components/CallToAction";
import Cliente from "../components/Cliente";
import Delivery from "../components/Delivery";
import Contato from "../components/Contato";
import Mapa from "../components/Mapa";
import Footer from "../components/Footer";

import rottweilerClienteImage from "../imagens/rottweiller.jpg";
import pugCatDeliveryImage from "../imagens/banner.jpg";

const Home = () => {
	return (
		<div>
			<Banner />
			<Servico />

			<CallToAction message="SEJA BEM-VINDO AO PETSHOP!" />

			<Cliente
				title="Relação com o Cliente"
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum porro, deleniti asperiores, ipsa error quod, fugiat voluptate earum aut voluptatibus illum repellat. Fugiat delectus quis quasi dolorem, aspernatur molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, totam? Odit corrupti eligendi a voluptas illum et necessitatibus, quasi deserunt culpa rem esse amet fugit suscipit, eos recusandae maiores id illo."
				imageUrl={rottweilerClienteImage}
				imageAlt="Cachorro Rottweiler"
			/>

			<Delivery
				imageSrc={pugCatDeliveryImage}
				imageAlt="Cachorro Pug e Gato dormindo juntos"
				title="Atendimento Delivery"
				phoneNumber="0800 555 3232"
			/>

			<Contato />

			<Mapa />

			<Footer />
		</div>
	);
};

export default Home;
