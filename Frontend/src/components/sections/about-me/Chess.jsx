import React from "react"

import { Container, Row, Col } from "reactstrap"

const Chess = () => {
	return (
		<>
			<section>
				<Container style={{ marginTop: "10vw" }}>
					<Row className="justify-content-around">
						<Col xs="12" className="text-center mt-5 pt-5">
							<h2>Chess</h2>
						</Col>
						<Col xs="12" sm="6" md="4">
							<img alt="" className="img-raised" src="/images/about-me/chess.jpeg" />
						</Col>
						<Col xs="12" sm="6" md="4" className="my-3">
							<p>
								I started playing Chess when I was very young, although it wasn't
								until 2021 that I dedicated myself to playing Chess minimally
								competitive.
							</p>
							<br />
							<p>
								At present I have an Intermediate level, I am not a very good, nor a
								very bad. I can barely get over 1,000 points on Chess.com (which
								really isn't much).
							</p>
							<br />
							<p>
								Although I know I don{"'"}t have the required level, I would like
								to, some day, participate in an official Chess tournament. I feel
								like that would be an experience that can teach me a lot of things
								from the more veteran players.
							</p>
							<br />
							<a
								className="font-weight-bold text-info mt-5 ml-3"
								href="https://www.chess.com/member/themrcorvy32"
								target="_blank"
								rel="noopener noreferrer"
							>
								Visit my profile on Chess.com
								<i className="tim-icons icon-minimal-right text-info" />
							</a>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	)
}

export default Chess
