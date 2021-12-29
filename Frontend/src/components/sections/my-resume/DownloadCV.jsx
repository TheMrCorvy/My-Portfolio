import React from "react"

import { Card, CardBody, CardFooter, CardHeader, CardImg, Col, Container, Row } from "reactstrap"

const DownloadCV = () => {
	return (
		<Container className="mt-5 pt-5">
			<Row className="justify-content-between">
				<Col xs="12" md="6" lg="4" className="hidden-on-mobile">
					<a href="/downloads/corvalan%20gonzalo%20cv.pdf" download>
						<Card className="text-white bg-transparent" style={{ borderRadius: 15 }}>
							<CardImg src="/downloads/qr-code-for-downloads.png" />
							<CardBody>
								<h4>Feel free to scan with your smartphone to download my CV</h4>
							</CardBody>
						</Card>
					</a>
				</Col>
				<Col xs="12" md="6">
					<Card className="bg-info" style={{ borderRadius: 15 }}>
						<CardHeader>
							<h3 className="mb-1">
								<i className="fas fa-save mr-1"></i>Downloads
							</h3>
						</CardHeader>
						<CardBody className="text-white">
							<p>
								Here you can download my official Curriculim Vitae, with all the
								information about my studies, jobs, and projects.
							</p>
							<br />
							<p>
								Below in this page you will find more information about my
								professional life. Including certificates of my studies, as wel as
								all the projects{" I've "}worked on, and the languages I speak.
							</p>
						</CardBody>
						<CardFooter className="text-center">
							<a
								href="/downloads/corvalan%20gonzalo%20cv.pdf"
								className="btn btn-warning"
								download
							>
								Download CV
							</a>
						</CardFooter>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default DownloadCV
