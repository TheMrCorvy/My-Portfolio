import React from "react"
import { Link } from "react-router-dom"

import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap"

import SocialButtons from "../utils/SocialButtons"

const Footer = () => {
	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
		})
	}
	return (
		<footer className="footer">
			<Container>
				<Row>
					<Col md="3">
						<h2 className="title">Thanks for Visiting</h2>
					</Col>
					<Col md="3"></Col>
					<Col md="3">
						<Nav>
							<NavItem>
								<NavLink to="/" tag={Link} onClick={scrollTop}>
									Home
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="/my-cv" tag={Link} onClick={scrollTop}>
									My Resume
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="/about-me" tag={Link} onClick={scrollTop}>
									About Me
								</NavLink>
							</NavItem>
						</Nav>
					</Col>
					<Col md="3"></Col>
				</Row>
				<SocialButtons tooltipPosition="top" />
			</Container>
		</footer>
	)
}

export default Footer
