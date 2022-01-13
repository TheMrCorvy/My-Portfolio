import React, { useEffect, useState } from "react"

import {
	Col,
	Container,
	Row,
	Card,
	CardHeader,
	CardTitle,
	CardBody,
	UncontrolledTooltip,
} from "reactstrap"

import BreadCrumbs from "../components/utils/BreadCrumbs"

import useApi from "../hooks/useApi"

const Worlds = () => {
	const [worldsList, setWorldsList] = useState([])
	const callApi = useApi

	useEffect(() => {
		const req = {
			method: "GET",
			apiUri: "https://api.jsonbin.io",
			endpoint: "/b/61e06191dbe5d13083251116",
		}

		callApi(req).then((data) => {
			setWorldsList(data.data)
		})
	}, [])

	useEffect(() => console.log(worldsList), [worldsList])

	const rand = () => {
		return Math.floor(Math.random() * 10000) + 10
	}

	const selectCard = (bubble) => {
		if (bubble.original) {
			return (
				<Col sm={bubble.franchise.length > 40 ? "12" : "auto"} key={bubble.franchise}>
					<Card
						className={"card-plain text-white bg-danger"}
						style={{
							borderRadius: "1rem",
						}}
					>
						<CardBody>
							<span className="mr-3" style={{ fontWeight: "bold" }}>
								{bubble.positionInTimeline}){" "}
							</span>
							{bubble.franchise} ({bubble.position})
						</CardBody>
					</Card>
				</Col>
			)
		}

		if (bubble.description) {
			return (
				<Col sm={bubble.franchise.length > 40 ? "12" : "auto"} key={bubble.franchise}>
					<Card
						className={"card-plain text-white bg-default"}
						style={{
							borderRadius: "1rem",
						}}
					>
						<CardBody>
							<span className="mr-3" style={{ fontWeight: "bold" }}>
								{bubble.positionInTimeline}){" "}
							</span>
							{bubble.franchise} ({bubble.position})
							<br />
							<br />
							<p>{bubble.description}</p>
						</CardBody>
					</Card>
				</Col>
			)
		}

		return (
			<Col sm={bubble.franchise.length > 40 ? "12" : "auto"} key={bubble.franchise}>
				<Card
					className={"card-plain text-white bg-warning"}
					style={{
						borderRadius: "1rem",
					}}
				>
					<CardBody>
						<span className="mr-3" style={{ fontWeight: "bold" }}>
							{bubble.positionInTimeline}){" "}
						</span>
						{bubble.franchise} ({bubble.position})
					</CardBody>
				</Card>
			</Col>
		)
	}

	if (!localStorage.getItem("token")) {
		return null
	}

	return (
		<>
			<BreadCrumbs title="Mundos" steps={{ Animes: "animes", Admin: "admin" }} />

			<Container>
				<Row className="justify-content-around">
					{worldsList.length > 0 &&
						worldsList.map((world) => (
							<Col sm="12" key={world.godInCharge} className="mt-5 pt-5">
								<Card className="card-plain ">
									<CardHeader>
										<CardTitle>
											<h1 className="h1 text-capitalize text-neutral mb-0">
												{world.godInCharge}
											</h1>
										</CardTitle>
										<h5 className="mt-2">
											<span style={{ fontWeight: "bold" }}>
												Estado Actual:
											</span>{" "}
											{world.status ? "Activo." : "Borrado."}
										</h5>
										{world.description && (
											<h5 className="mt-2">
												<span style={{ fontWeight: "bold" }}>
													Descripción:
												</span>{" "}
												{world.description}
											</h5>
										)}
									</CardHeader>
									<CardBody>
										<Row className="justify-content-around">
											{world.jurisdiction.map((universe, index) => (
												<Col
													sm={world.jurisdiction.length < 2 ? "12" : "6"}
													key={index + universe.bubble.length + rand()}
												>
													<Card className="card-plain bg-info">
														<CardHeader>
															<CardTitle>
																<h3 className="h1 text-capitalize text-neutral mb-0">
																	Universo{" Nº: "}
																	{universe.universe}
																</h3>
															</CardTitle>
														</CardHeader>
														<CardBody>
															<Row className="justify-content-around">
																{universe.bubble.map((bubble) =>
																	selectCard(bubble)
																)}
															</Row>
														</CardBody>
													</Card>
												</Col>
											))}
										</Row>
									</CardBody>
								</Card>
							</Col>
						))}
				</Row>
			</Container>
		</>
	)
}

export default Worlds
