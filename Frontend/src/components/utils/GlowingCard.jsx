import React from "react"

import {
	Row,
	Col,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	ListGroup,
	ListGroupItem,
	Button,
} from "reactstrap"

const GlowingCard = ({ color, imgUrl, title, subtitle, list }) => {
	return (
		<Card className={`card-coin card-plain glowing-card glowing-card-${color}`}>
			<CardHeader>
				<img alt="..." className="img-center img-fluid" src={imgUrl} />
			</CardHeader>
			<CardBody>
				<Row>
					<Col className="text-center" md="12">
						<h4 className="text-uppercase">{title}</h4>
						{subtitle && (
							<>
								<span className="text-primary">Plan E-comerce</span>

								<hr className="line-primary" />
							</>
						)}
					</Col>
				</Row>
				<Row>
					<ListGroup>
						{list.map((listItem, index) => (
							<ListGroupItem key={index + listItem}>{listItem}</ListGroupItem>
						))}
					</ListGroup>
				</Row>
			</CardBody>
			<CardFooter className="text-center">
				<Button
					className="btn-simple"
					color="primary"
					style={{ color: "#fff" }}
					onClick={() =>
						document.getElementById("contact-section").scrollIntoView({
							block: "start",
							behavior: "smooth",
						})
					}
				>
					Contact Me
				</Button>
			</CardFooter>
		</Card>
	)
}

export default GlowingCard
