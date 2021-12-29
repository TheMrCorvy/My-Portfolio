import React from "react"

import { Row, Col, Container } from "reactstrap"

import BreadCrumbs from "../components/utils/BreadCrumbs.jsx"
import MyDescrption from "../components/sections/about-me/MyDescription"
import Yugioh from "../components/sections/about-me/Yugioh"

const AboutMe = () => {
	return (
		<div>
			<BreadCrumbs title="About Me" steps={{}} />

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
		</div>
	)
}

export default AboutMe
