import React from "react"

import { Container, Row, Col } from "reactstrap"
import GlowingCard from "../utils/GlowingCard"

const CryptoCards = () => {
	return (
		<Container className="mt-5" style={{ marginBottom: "10vw" }}>
			<Row className="mb-5 pb-5">
				<Col xs="12" sm="8" md="6">
					<hr className="line-info" />
					<h1 style={{ lineHeight: "1.2" }}>
						With Strong Experience{" "}
						<span className="text-info">Investing in Crypto</span>
					</h1>
				</Col>
			</Row>
			<Row>
				<Col md="4">
					<GlowingCard />
				</Col>
				<Col md="4">
					<GlowingCard />
				</Col>
				<Col md="4">
					<GlowingCard />
				</Col>
			</Row>
		</Container>
	)
}

export default CryptoCards
