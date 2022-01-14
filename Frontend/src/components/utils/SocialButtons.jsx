import React from "react"

import { Row, Col, UncontrolledTooltip } from "reactstrap"

const SocialButtons = ({ tooltipPosition }) => {
	return (
		<>
			<Row style={{ justifyContent: "center", marginTop: "3rem" }}>
				<Col xs="4" sm="4" md="4" lg="1" xl="1">
					<a
						href="https://twitter.com/TheMrCorvy"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-icon btn btn-twitter btn-lg"
						id="twitter"
					>
						<i className="fab fa-twitter"></i>
					</a>
				</Col>
				{/* <Col xs="4" sm="4" md="4" lg="1" xl="1">
					<a
						href="#pablo"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-icon ml-1 btn btn-facebook btn-lg"
						id="facebook"
					>
						<i className="fab fa-facebook-square"></i>
					</a>
				</Col> */}
				<Col xs="4" sm="4" md="4" lg="1" xl="1">
					<a
						href="https://www.linkedin.com/in/gonzalo-salvador-corvalan/"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-icon ml-1 btn btn-dribbble btn-lg"
						id="linkedin"
					>
						<i className="fab fa-linkedin"></i>
					</a>
				</Col>
				{/* <Col xs="4" sm="4" md="4" lg="1" xl="1">
					<a
						href="#pablo"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-icon ml-1 btn btn-warning btn-lg"
						id="telegram"
					>
						<i className="fab fa-telegram"></i>
					</a>
				</Col> */}
				<Col xs="4" sm="4" md="4" lg="1" xl="1">
					<a
						href="https://api.whatsapp.com/send?phone=+5401150488031"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-icon ml-1 btn btn-info btn-lg"
						id="whatsapp"
					>
						<i className="fab fa-whatsapp"></i>
					</a>
				</Col>
				<Col xs="4" sm="4" md="4" lg="1" xl="1">
					<a
						href="https://github.com/TheMrCorvy"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-icon ml-1 btn btn-success btn-lg"
						id="github"
					>
						<i className="fab fa-github"></i>
					</a>
				</Col>
			</Row>
			<UncontrolledTooltip placement={tooltipPosition} target="twitter" delay={0}>
				Find me on Twitter
			</UncontrolledTooltip>
			{/* <UncontrolledTooltip placement={tooltipPosition} target="facebook" delay={0}>
				Find me on Facebook
			</UncontrolledTooltip> */}
			<UncontrolledTooltip placement={tooltipPosition} target="linkedin" delay={0}>
				Find me on Linkedin
			</UncontrolledTooltip>
			{/* <UncontrolledTooltip placement={tooltipPosition} target="telegram" delay={0}>
				Find me on Telegram
			</UncontrolledTooltip> */}
			<UncontrolledTooltip placement={tooltipPosition} target="whatsapp" delay={0}>
				Find me on WhatsApp
			</UncontrolledTooltip>
			<UncontrolledTooltip placement={tooltipPosition} target="github" delay={0}>
				Find me on GitHub
			</UncontrolledTooltip>
		</>
	)
}

export default SocialButtons
