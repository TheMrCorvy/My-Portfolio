import React, { useEffect, useState } from "react"

import { Container, Col, Row, Card, CardBody } from "reactstrap"
import ProjectCard from "../../utils/ProjectCard"

import useApi from "../../../hooks/useApi"

const Projects = () => {
	const [loading, setLoading] = useState(true)
	const [projects, setProjects] = useState([])

	const callApi = useApi

	useEffect(() => {
		const req = {
			method: "GET",
			endpoint: "/projects/",
		}

		callApi(req).then((data) => {
			setProjects(data)

			setLoading(false)
		})
	}, [])

	return (
		<Container style={{ paddingTop: "12vh", marginBottom: "15vh" }}>
			<h1 className="mt-5 text-neutral text-left">
				Here is a list of the projects {"I've"} worked on
			</h1>
			<hr className="line-info" />
			<Row className="row-grid justify-content-around" style={{ paddingTop: "5rem" }}>
				{loading ? (
					<Col sm="12" md="6" lg="4" className="mb-4">
						<Card className="bg-danger">
							<CardBody className="text-center">
								<p>Now loading, please wait...</p>
							</CardBody>
						</Card>
					</Col>
				) : (
					projects.map((project, index) => (
						<Col sm="12" md="6" lg="4" className="mb-4" key={index}>
							<ProjectCard project={project} />
						</Col>
					))
				)}
			</Row>
		</Container>
	)
}

export default Projects
