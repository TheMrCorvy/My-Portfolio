import React from "react"

import { Col, Card, CardBody, CardTitle, CardFooter } from "reactstrap"

const ListAnimes = ({ animes, isAuthorized }) => {
	return animes.map((anime) => (
		<Col md="6" className="mb-4 mg-1" key={anime.position}>
			<Card className="card-stats bg-warning">
				<CardBody style={{ position: "relative" }}>
					<h1 className="h1 float-left">{anime.position}</h1>
					<div className="justify-content-center">
						<div className="numbers position-relative">
							<CardTitle className="text-capitalize">{anime.name}</CardTitle>
							{!anime.hasEnd && (
								<p className="card-category text-white text-capitalize">
									Sin Final
								</p>
							)}
						</div>
					</div>
				</CardBody>
				<CardFooter>
					<CardTitle>
						{isAuthorized && (
							<p className="card-category text-white text-capitalize">
								Descripción: {anime.description}
							</p>
						)}
						{isAuthorized && (
							<p className="card-category text-white text-capitalize">
								Período visto: {anime.date}
							</p>
						)}
					</CardTitle>
				</CardFooter>
			</Card>
		</Col>
	))
}

export default ListAnimes
