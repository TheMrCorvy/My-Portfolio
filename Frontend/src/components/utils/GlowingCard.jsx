import React from "react"

import {
	Row,
	Col,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	ListGroup,
	ListGroupItem,
	Button,
} from "reactstrap"

import { Link } from "react-router-dom"

const GlowingCard = () => {
	return (
		<>
			<Card className="card-coin card-plain glowing-card">
				<CardHeader>
					<img
						alt="..."
						className="img-center img-fluid"
						src={require("../../assets/img/bitcoin.png")}
					/>
				</CardHeader>
				<CardBody>
					<Row>
						<Col className="text-center" md="12">
							<h4 className="text-uppercase">Combo Grande</h4>
							<span className="text-primary">Plan E-comerce</span>
							<hr className="line-primary" />
						</Col>
					</Row>
					<Row>
						<ListGroup>
							<ListGroupItem>Web App de formato SPA</ListGroupItem>
							<ListGroupItem>Dominio .com.ar o personalizado</ListGroupItem>
							<ListGroupItem>Servicio de emails</ListGroupItem>
							<ListGroupItem>Autoadministrable</ListGroupItem>
							<ListGroupItem>Sistema de Login/Registro</ListGroupItem>
						</ListGroup>
					</Row>
				</CardBody>
				<CardFooter className="text-center">
					<Link
						className="font-weight-bold text-primary mt-5"
						to="/pricing/combo-grande"
						onClick={() => {
							window.scrollTo({
								top: 0,
								left: 0,
							})
						}}
					>
						<Button className="btn-simple" color="white" id="masinfo3">
							Más info
						</Button>
					</Link>
				</CardFooter>
			</Card>
		</>
	)
}

export default GlowingCard
