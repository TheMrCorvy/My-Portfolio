import React from "react"

import { Row, Col, Container } from "reactstrap"

import BreadCrumbs from "../components/utils/BreadCrumbs.jsx"
import MyDescrption from "../components/sections/about-me/MyDescription"
import Yugioh from "../components/sections/about-me/Yugioh"
import Chess from "../components/sections/about-me/Chess.jsx"

const AboutMe = () => {
	return (
		<>
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

			<Chess />

			<section>
				<Container style={{ marginTop: "10vw" }}>
					<Row className="justify-content-around">
						<Col xs="12" className="text-center">
							<h3>
								If you want to know more about me, feel free to get in touch by
								sending me an email using the form bellow.
							</h3>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	)
}

export default AboutMe
