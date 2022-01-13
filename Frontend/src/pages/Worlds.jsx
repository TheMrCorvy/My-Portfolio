import React from "react"

import { Col, Container, Row } from "reactstrap"

import BreadCrumbs from "../components/utils/BreadCrumbs"

const Worlds = () => {
	if (!localStorage.getItem("token")) {
		return null
	}

	return (
		<>
			<BreadCrumbs title="Mundos" steps={{ Animes: "animes", Admin: "admin" }} />

			<Container>
				<Row>
					<Col sm="12"></Col>
				</Row>
			</Container>
		</>
	)
}

export default Worlds
