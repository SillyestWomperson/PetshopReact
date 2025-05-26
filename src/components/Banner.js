import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import bannerImg1 from "../imagens/banner.jpg";
import bannerImg2 from "../imagens/banner01.jpg";
import bannerImg3 from "../imagens/banhoETosa.png";

const bannerData = [
	{
		id: 1,
		image: bannerImg1,
		alt: "Promoção Pet Shop",
	},
	{
		id: 2,
		image: bannerImg2,
		alt: "Serviços Completos para Pets",
	},
	{
		id: 3,
		image: bannerImg3,
		alt: "Cuidados Especiais Banho e Tosa",
	},
];

const Banner = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel">
			{bannerData.map((slide) => (
				<Carousel.Item key={slide.id}>
					<img src={slide.image} className="d-block w-100" alt={slide.alt} />
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Banner;
