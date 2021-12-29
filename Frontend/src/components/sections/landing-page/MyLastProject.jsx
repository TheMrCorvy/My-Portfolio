import React, { useEffect, useState } from "react"

import { Container, Row, Col, UncontrolledTooltip, Alert } from "reactstrap"

import { Link } from "react-router-dom"

import projects from "../../../temp/projects"

const MyLastProject = (props) => {
	const [lastProject, setLastProject] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setLastProject(projects.projects[0])
			setLoading(false)
		}, 3000)
	})

	if (loading) {
		return (
			<Container>
				<Row className="justify-content-center">
					<Col xs="12" md="6" lg="4">
						<Alert color="danger">Now loading... Please wait...</Alert>
					</Col>
				</Row>
			</Container>
		)
	}

	return (
		<section>
			<Container>
				<Row className="row-grid justify-content-between">
					<Col className="mt-lg-5" md="5" id="projectImage">
						<a
							href={lastProject.links.mainLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								alt={lastProject.name}
								className="img-raised"
								src={lastProject.image}
							/>
						</a>
					</Col>

					<Col md="6" className="mt-4">
						<div className="pl-md-5">
							<h1>My Last Project</h1>
							<p dangerouslySetInnerHTML={{ __html: lastProject.description }}></p>
							<br />

							<Row>
								<Col md="12" lg="6" xl="4" className="mb-3">
									<Link
										className="font-weight-bold text-info mt-5 ml-3"
										to={lastProject.links.github}
										target="_blank"
										rel="noopener noreferrer"
									>
										See it on GitHub
										<i className="tim-icons icon-minimal-right text-info" />
									</Link>
								</Col>
								<Col md="12" lg="6" xl="4" className="mb-3">
									<Link
										className="font-weight-bold text-info mt-5 ml-3"
										to={lastProject.links.mainLink}
										target="_blank"
										rel="noopener noreferrer"
									>
										See it Live
										<i className="tim-icons icon-minimal-right text-info" />
									</Link>
								</Col>
								{lastProject.links.playStore && (
									<Col md="12" lg="6" xl="4" className="mb-3">
										<Link
											className="font-weight-bold text-info mt-5 ml-3"
											to={lastProject.links.playStore}
											target="_blank"
											rel="noopener noreferrer"
										>
											See it on the Play Store
											<i className="tim-icons icon-minimal-right text-info" />
										</Link>
									</Col>
								)}
								{lastProject.links.appStore && (
									<Col md="12" lg="6" xl="4" className="mb-3">
										<Link
											className="font-weight-bold text-info mt-5 ml-3"
											to={lastProject.links.appStore}
											target="_blank"
											rel="noopener noreferrer"
										>
											See it on the App Store
											<i className="tim-icons icon-minimal-right text-info" />
										</Link>
									</Col>
								)}
								{!props.alt && (
									<Col md="12" lg="6" xl="4" className="mb-3">
										<Link
											className="font-weight-bold text-info mt-5 ml-3"
											to="my-cv"
											onClick={() =>
												window.scrollTo({
													top: 0,
													left: 0,
												})
											}
										>
											Visit My CV
											<i className="tim-icons icon-minimal-right text-info" />
										</Link>
									</Col>
								)}
							</Row>

							{props.alt && (
								<>
									<br />
									<br />
									<p>
										Here you can also check out the rest of the projects I
										worked on, as well as my studies up to date, and also my
										personal projects.
									</p>
								</>
							)}
						</div>
					</Col>
				</Row>
			</Container>

			<UncontrolledTooltip placement="top" target="projectImage" delay={0}>
				{"Click to visit " + lastProject.name}
			</UncontrolledTooltip>
		</section>
	)
}

export default MyLastProject
