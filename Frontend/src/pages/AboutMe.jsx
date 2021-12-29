import React from "react"

import { Row, Col, Container } from "reactstrap"

import MyDescrption from "../components/sections/about-me/MyDescription"
import Yugioh from "../components/sections/about-me/Yugioh"

const AboutMe = () => {
	return (
		<>
			<MyDescrption />

			<section>
				<Container style={{ marginTop: "10vw" }}>
					<Row className="justify-content-around">
						<Col xs="12">
							<h1 className="ttle">My Hobbies</h1>
							<hr className="line-info" />
						</Col>

						<Yugioh />
					</Row>
				</Container>
			</section>
		</>
	)
}

export default AboutMe
