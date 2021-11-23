import React, { useState, useEffect } from "react"

import {
	Container,
	Col,
	Row,
	Card,
	CardImg,
	CardBody,
	Button,
	UncontrolledTooltip,
} from "reactstrap"
// import CardImage from "components/otros/CardImage.js"
// import InfoArea from "components/otros/InfoArea.js"

import { GetPage } from "../Ajax/AjaxAirport"

function MiExperiencia() {
	const token = null

	const urlFetch = "v2/CorvalanGonzalo/GetPage/GetAllProjects"

	const [projects, setProjects] = useState(false)

	async function fetchProjects() {
		let response = await GetPage(urlFetch, token)
		if (!response) {
			console.log("Hubo un error en el proceso")
		} else {
			setProjects(response)
		}
	}

	useEffect(() => {
		fetchProjects()
	}, [])

	if (projects) {
		return (
			<Container style={{ marginTop: "10vh", marginBottom: "15vh" }}>
				<h1 className="mt-5 text-neutral text-center">
					También he trabajado de forma freelance en las siguientes páginas web:
				</h1>
				<hr className="line-primary" />
				<Row className="row-grid justify-content-around">
					{projects.web_infos.map((site) => (
						<Col lg="4" className="mb-4" key={site.id}>
							<Card style={{ width: "20rem" }} id={site.website_img}>
								<CardImg
									top
									src={require("../../images/" + site.website_img + ".png")}
									alt="..."
								/>
								<CardBody className="text-center">
									<a href={site.website_git_url} target="_blank">
										<Button color="success">Ver en GitHub</Button>
									</a>
									<a href={"http://" + site.website_url} target="_blank">
										<Button color="info">Visitar Sitio</Button>
									</a>
								</CardBody>
							</Card>
							<UncontrolledTooltip
								placement="top"
								target={site.website_img}
								delay={0}
							>
								{site.website_name}
							</UncontrolledTooltip>
						</Col>
					))}
				</Row>
			</Container>
		)
	} else {
		return (
			<Container style={{ marginTop: "10vh", marginBottom: "15vh" }}>
				<h1 className="mt-5 text-neutral text-center">
					También he trabajado de forma freelance en las siguientes páginas web:
				</h1>
				<hr className="line-primary" />
				<Row className="row-grid justify-content-around">
					<Col lg="4" className="mb-4">
						<Card style={{ width: "20rem" }}>
							<CardImg
								top
								src={require("../../images/saludyderechos.png")}
								alt="..."
							/>
							<CardBody className="text-center">
								<p>Estamos obteniendo los datos, por favor espere...</p>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default MiExperiencia
