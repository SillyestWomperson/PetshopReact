import React from "react";
import { Container, Accordion } from "react-bootstrap";

const FaqAccordion = ({ title, items }) => {
	return (
		<section className="faq-accordion-section py-5">
			<Container>
				{title && <h2 className="text-center mb-4 faq-title">{title}</h2>}
				<Accordion defaultActiveKey="0">
					{items &&
						items.map((item, index) => (
							<Accordion.Item eventKey={String(index)} key={index} className="faq-item">
								<Accordion.Header className="faq-question">{item.question}</Accordion.Header>
								<Accordion.Body className="faq-answer">{item.answer}</Accordion.Body>
							</Accordion.Item>
						))}
				</Accordion>
			</Container>
		</section>
	);
};

export default FaqAccordion;
