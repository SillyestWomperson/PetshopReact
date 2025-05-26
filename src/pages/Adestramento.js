import React from "react";
import HeroImage from "../components/HeroImage";
import TextWithGallery from "../components/TextWithGallery";
import FaqAccordion from "../components/FaqAccordion";

import adestramentoBanner from "../imagens/adestramento/banner-adestramento.jpg";
import galleryImg1 from "../imagens/adestramento/adestramento1.jpg";
import galleryImg2 from "../imagens/adestramento/adestramento2.jpg";
import galleryImg3 from "../imagens/adestramento/adestramento3.jpg";
import galleryImg4 from "../imagens/adestramento/adestramento4.jpg";
import galleryImg5 from "../imagens/adestramento/adestramento5.jpg";

const Adestramento = () => {
	const loremTextLong =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit, inventore ea mollitia cupiditate quod quo reiciendis alias doloribus aliquid laboriosam tenetur expedita, vero a obcaecati velit explicabo laudantium beatae impedit est! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi excepturi sunt, dolorum ipsam, deserunt nulla necessitatibus provident consequatur perspiciatis numquam, minima aliquam reiciendis voluptatibus eligendi blanditiis velit tempore repellendus harum.";

	const photosData = [
		{ src: galleryImg1, alt: "Cão sendo treinado 1" },
		{ src: galleryImg2, alt: "Cão sendo treinado 2" },
		{ src: galleryImg3, alt: "Cão sendo treinado 3" },
		{ src: galleryImg4, alt: "Cão sendo treinado 4" },
		{ src: galleryImg5, alt: "Cão sendo treinado 5" },
	];

	const faqData = [
		{
			question: "Qual a melhor idade para adestramento?",
			answer: "Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.",
		},
		{
			question: "Toda raça pode ser adestrada?",
			answer: "Sim, todas as raças podem ser adestradas, embora algumas possam aprender mais rapidamente ou ter aptidões naturais para certos tipos de treinamento. A consistência e o método são fundamentais.",
		},
		{
			question: "Quanto tempo leva para o cachorro estar preparado?",
			answer: "O tempo varia conforme o cão, a frequência do treinamento e os objetivos. Comandos básicos podem ser aprendidos em algumas semanas, mas comportamentos mais complexos ou a solução de problemas comportamentais podem levar meses.",
		},
	];

	return (
		<div>
			<HeroImage imageUrl={adestramentoBanner} />
			<TextWithGallery text={loremTextLong} photos={photosData} />
			<FaqAccordion title="Perguntas Frequentes" items={faqData} />
		</div>
	);
};

export default Adestramento;
