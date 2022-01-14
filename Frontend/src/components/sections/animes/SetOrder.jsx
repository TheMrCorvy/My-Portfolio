import React from "react"

import { Container, Row, Col, Button } from "reactstrap"

const SetOrder = ({ order, updateOrder }) => {
	return (
		<Container>
			<Row style={{ height: "35vh" }}>
				<Col lg="8" style={{ margin: "auto" }} className="text-center">
					<h1 className="text-center text-neutral" style={{ lineHeight: "1.2" }}>
						Toggle Order
					</h1>
					<Button color="info" onClick={() => updateOrder(order)}>
						{order}
					</Button>
				</Col>
			</Row>
		</Container>
	)
}

export default SetOrder
