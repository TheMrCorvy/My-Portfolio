import React, { useEffect, useState } from "react"

import { Container, Row, Col, Alert } from "reactstrap"

import { Link } from "react-router-dom"

import useApi from "../../../hooks/useApi"

const MyLastCertificate = (props) => {
	const [lastCertificate, setLastCertificate] = useState(null)
	const [loading, setLoading] = useState(true)

	const callApi = useApi

	useEffect(() => {
		const req = {
			method: "GET",
			endpoint: "/certificates/last",
		}

		callApi(req).then((data) => {
			setLastCertificate(data)

			setLoading(false)
		})
	}, [])

	if (loading) {
		return (
			<Container>
				<Row className="justify-content-center">
					<Col xs="12" md="6" lg="4">
						<Alert color="info">Now loading... Please wait...</Alert>
					</Col>
				</Row>
			</Container>
		)
	}

	return (
		<section style={{ marginBottom: "10vw", marginTop: "10vw" }}>
			<Container>
				<Row className="row-grid justify-content-between">
					<Col md="6" className="mt-4">
						<div className="pl-md-5">
							<h1>My Last Exam</h1>
							<p
								dangerouslySetInnerHTML={{ __html: lastCertificate.description }}
							></p>
							<h5 className="title">{lastCertificate.institute}</h5>
							<p className="text-success">{lastCertificate.date}</p>
							<br />

							<Link
								className="font-weight-bold text-info mt-5 ml-3"
								to="my-studies"
								onClick={() =>
									window.scrollTo({
										top: 0,
										left: 0,
									})
								}
							>
								See All My Certificates
								<i className="tim-icons icon-minimal-right text-info" />
							</Link>

							{props.alt && (
								<>
									<br />
									<br />
									<p>
										In this page you will find a timeline describing all my
										adventures studying programming.
									</p>
									<p>I hope you will find it useful.</p>
								</>
							)}
						</div>
					</Col>
					<Col className="mt-lg-5" md="5" id="projectImage">
						<img
							alt={lastCertificate.name}
							className="img-raised"
							src={lastCertificate.image}
						/>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default MyLastCertificate
