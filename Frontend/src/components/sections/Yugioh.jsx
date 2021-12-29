import React from "react"

import { Col } from "reactstrap"

const Yugioh = () => {
	return (
		<>
			<Col xs="12" className="text-center mt-5 pt-5">
				<h2>Yu-Gi-Oh!</h2>
			</Col>
			<Col xs="12" sm="6" md="4">
				<h4>What is Yu-Gi-Oh! ?</h4>
				<p>
					Yu-Gi-Oh! is a Japanese manga and anime series about trading card gaming,
					written and illustrated by Kazuki Takahashi.
				</p>
				<br />
				<p>
					In the real world, Yu-Gi-Oh! is a trading card game based on the manga and anime
					series, which you can actually play.
				</p>
				<br />
				<p>
					It is one of the most popular trading card games of the world, played by
					hundreds of thousands of people on multiple countries.
				</p>
			</Col>
			<Col xs="12" sm="6" md="4" className="my-3">
				<img
					alt="an image of my cat"
					className="img-raised"
					src="/images/about-me/leonard.jpg"
				/>
			</Col>
			<Col xs="12" sm="6" md="4">
				<p>
					Since I was very little, I fell in love with the anime and since then I became a
					Yu-Gi-Oh! card collector.
				</p>
				<br />
				<p>
					Officially speaking, I have been playing the game since 2017 in small
					tournaments, and with my firends.
				</p>
				<br />
				<p>
					I{"'"}ve never played on any big tournaments, but thats one thing that someday I
					{"'"}d really like to try.
				</p>
			</Col>
		</>
	)
}

export default Yugioh
