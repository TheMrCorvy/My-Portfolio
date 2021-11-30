import React from "react"

import { Container, Row, Col } from "reactstrap"
import GlowingCard from "../utils/GlowingCard"

const CryptoCards = () => {
	return (
		<Container className="mt-5" style={{ marginBottom: "10vw" }}>
			<Row className="mb-5 pb-5">
				<Col xs="12" sm="8" md="6">
					<hr className="line-info" />
					<h1 style={{ lineHeight: "1.2", marginBottom: "-3rem" }}>
						With Strong Experience Investing in{" "}
						<span className="text-info">Crypto</span>
					</h1>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col xs="12" md="6" lg="4">
					<GlowingCard
						color="info"
						imgUrl="/images/crypto-coins/bitcoin.png"
						title="Long Term Trading"
						subtitle="Buy now, see you in a year"
						list={[
							"Buy following the risk metric",
							"Sell following also the risk metric",
							"Follow the market cycles",
						]}
					/>
				</Col>
				<Col xs="12" md="6" lg="4">
					<GlowingCard
						color="info"
						imgUrl="/images/crypto-coins/ethereum.png"
						title="Savings / Stacking"
						subtitle="Buy digital Gold"
						list={[
							"Secure your Purchasing Power",
							"Earn interests in Crypto from your Savings",
							"See your value Grow with Time",
						]}
					/>
				</Col>
				<Col xs="12" md="6" lg="4">
					<GlowingCard
						color="info"
						imgUrl="/images/crypto-coins/ripp.png"
						title="Bots"
						subtitle="Be Awake 24/7 365"
						list={[
							"Auto Trading DCA Bots",
							"Programmatic Stop Loss & Take Profit",
							"Useful in almost all cases",
						]}
					/>
				</Col>
				<Col xs="12" md="6" lg="4">
					<GlowingCard
						color="info"
						imgUrl="/images/crypto-coins/litecoin.png"
						title="Day Trading"
						subtitle="Buy low, sell High"
						list={[
							"Trading in Spot (no leverage)",
							"Trading with Margin (3x leverage)",
							"Trading in Futures (5x leverage)",
						]}
					/>
				</Col>
			</Row>
		</Container>
	)
}

export default CryptoCards
