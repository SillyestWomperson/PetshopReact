import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import banner from "../imagens/banner.jpg";
import banner01 from "../imagens/banner01.jpg";
import banhoETosa from "../imagens/banhoETosa.png";

function Banner() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel">
			<Carousel.Item>
				<img src={banner} className="d-block w-100" alt="womp"></img>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img src={banner01} className="d-block w-100" alt="womp"></img>
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img src={banhoETosa} className="d-block w-100" alt="womp"></img>
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Banner;
