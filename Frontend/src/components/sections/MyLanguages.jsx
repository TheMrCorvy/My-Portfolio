import React from "react"

import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap"

const MyLanguages = () => {
	return (
		<>
			<Container style={{ marginBottom: "10vw" }}>
				<Row>
					<Col lg="12">
						<h2 className="text-center text-neutral py-5 my-5">Languages I Speak</h2>
					</Col>
				</Row>
				<Row className="px-3 justify-content-around">
					<Col lg="6">
						<Card className="bg-info">
							<CardBody>
								<CardHeader>
									<CardTitle className="text-center">
										<h3>English</h3>
									</CardTitle>
								</CardHeader>
								<CardText style={{ marginBottom: "1.5em" }}>
									<p>
										I have been studying the language continuously since
										elementary school, although it was in 2018 when I began to
										study seriously at the CUI (the University Center for
										Languages of the Buenos Aires University in Argentina).{" "}
									</p>
									<br />
									<span>
										Since then I have been able to take the TOEFL IBT test, and
										achieving a total score of{" "}
										<strong className="font-weight-bold title h4">95</strong>,
										out of 120.
									</span>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6">
						<Card className="bg-danger">
							<CardBody>
								<CardHeader>
									<CardTitle className="text-center">
										<h3>Japanese</h3>
									</CardTitle>
								</CardHeader>
								<CardText>
									<p>
										At the beginning of 2019 I began to study the language and,
										although I'm skilled at an intermediate level (enough to
										maintain conversations), I always keep studying and
										practicing it at CUI (the University Center for Languages of
										the Buenos Aires University in Argentina).
									</p>
									<br />
									<p>
										Thanks to that, I've managed to take and pass the
										international certification exam Noryoku Shiken{" "}
										<strong className="font-weight-bold title h4">N4</strong>.
									</p>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6">
						<Card className="bg-warning">
							<CardBody>
								<CardHeader>
									<CardTitle className="text-center">
										<h3>Spanish</h3>
									</CardTitle>
								</CardHeader>
								<CardText>
									<p>
										Being from Argentina, this is my mother tongue, and the one
										I master the best.
									</p>
									<br />
									<p>
										Despite speaking in the Argentine dialect, I am well versed
										in Neutral Spanish, commonly used in dubbing and
										translations aimed at Latin America in general.
									</p>
								</CardText>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default MyLanguages
