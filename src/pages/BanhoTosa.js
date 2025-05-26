import React from "react";
import PageLabel from "../components/PageLabel";
import ContentImageLeft from "../components/ContentImageLeft";
import ContentImageRight from "../components/ContentImageRight";
import CallToAction from "../components/CallToAction";

import banhoTosaImg1 from "../imagens/pagina-home/banho-tosa.jpg";
import petCareImg1 from "../imagens/pagina-home/vacina-cachorro.jpg";

const BanhoTosa = () => {
	/* const loremIpsumMedium =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore obcaecati provident quasi minus. Hic consequatur aliquam quidem assumenda, adipisci non aspernatur voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quae eligendi sapiente perspiciatis ratione? Eaque saepe animi voluptas aspernatur illum reprehenderit perferendis praesentium tempore fugit nihil optio."; */
	const silly = "Não clique no botão saiba mais hehehehe";

	return (
		<div>
			<PageLabel title="BANHO E TOSA" />
			<ContentImageLeft
				imageUrl={banhoTosaImg1}
				imageAlt="Profissional dando banho em um cão"
				text={silly}
				buttonText="Saiba mais"
				buttonLink="https://tools.tanese.com/" // SillyestWomperson está linkando ao próprio site hehehehe
			/>
			<CallToAction message="🐾 PET CARE 🐾" />
			<ContentImageRight
				imageUrl={petCareImg1}
				imageAlt="Veterinário cuidando de um filhote"
				text={silly}
				buttonText="Saiba mais"
				buttonLink="https://tools.tanese.com/"
			/>
		</div>
	);
};

export default BanhoTosa;
