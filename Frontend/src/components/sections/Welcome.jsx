import React, { useEffect, useState } from "react"

import { Container } from "reactstrap"

import Lottie from "react-lottie"
import animationData from "../../assets/lottie-confetti"

const Welcome = () => {
	const [animate, setAnimate] = useState(false)

	const defaultOptions = {
		loop: false,
		autoplay: animate,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	}

	useEffect(() => {
		setTimeout(() => {
			setAnimate(true)
		}, 3000)
	}, [])

	return (
		<>
			<Lottie
				options={defaultOptions}
				height={400}
				width={400}
				style={{ position: "absolute", top: 0, left: 0, height: "99vh", width: "99vw" }}
			/>
			<div className="page-header header-filter">
				<div className="squares square1" />
				<div className="squares square2" />
				<div className="squares square3" />
				<div className="squares square4" />
				<div className="squares square5" />
				<div className="squares square6" />
				<div className="squares square7" />
				<Container>
					<div
						className="content-center brand text-left"
						style={{ maxWidth: "80vw !important", minWidth: "20em !important" }}
					>
						<h1 className="h1-seo text-center">Hello there!</h1>
						<h3>
							My name is <span className="text-warning">Gonzalo</span>.
						</h3>
						<h4>
							I'm a Fullstack Web Developer, specialized in Frontend development with
							React JS and TypeScript.
						</h4>
					</div>
				</Container>
			</div>
		</>
	)
}

export default Welcome
