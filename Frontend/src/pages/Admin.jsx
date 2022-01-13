import React from "react"
import { Col, Container, Row } from "reactstrap"
import AnimesForm from "../components/sections/admin-page/AnimesForm"

import BreadCrumbs from "../components/utils/BreadCrumbs"

const Admin = () => {
	if (!localStorage.getItem("token")) {
		return null
	}
	return (
		<>
			<BreadCrumbs title="Admin" steps={{ Animes: "animes", Mundos: "mundos" }} />

			<Container>
				<Row>
					<Col sm="12">
						<AnimesForm />
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Admin
