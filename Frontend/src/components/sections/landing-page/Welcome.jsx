import React, { Fragment, useEffect, useState } from "react"

import { Container } from "reactstrap"

import Lottie from "react-lottie"
import animationData from "../../../assets/lottie-confetti"

import CountUp from "react-countup"

const Welcome = () => {
	const [animateOptions, setAnimateOptions] = useState({
		loop: false,
		autoplay: false,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	})
	const [finalNumbers, setFinalNumbers] = useState("")
	const [componentIsLoaded, setComponentIsLoaded] = useState(false)

	useEffect(() => {
		let finalNumber = []

		;[...Array(6)].forEach((number, index) => {
			let rand = Math.random() * (9 - 0) + 0

			switch (index) {
				case 0:
					rand = Math.random() * (1 - 0) + 0

					finalNumber.push(Math.round(rand).toString() + ".")
					break

				case 1:
					finalNumber.push("0")
					break
				default:
					finalNumber.push(Math.round(rand).toString())
					break
			}
		})

		finalNumber = finalNumber.join("")

		setFinalNumbers(finalNumber)

		console.error('("Hello there!" from the lnading section), Res: General Kenobi...')
		console.log(
			'If you are here because of the number in the landing section, you should consider watching "Steins;Gate"'
		)
	}, [])

	useEffect(() => {
		if (finalNumbers) {
			setComponentIsLoaded(true)

			if (finalNumbers === "1.048596") {
				const timer = setTimeout(() => {
					setAnimateOptions({
						...animateOptions,
						autoplay: true,
					})
				}, 2000)

				return () => {
					clearTimeout(timer)
				}
			}
		}
	}, [finalNumbers])

	return (
		<>
			<Lottie
				options={animateOptions}
				height={400}
				width={400}
				isStopped={!animateOptions.autoplay}
				style={{ position: "absolute", top: 0, left: 0, height: "98vh", width: "98vw" }}
			/>

			{componentIsLoaded && (
				<div
					style={{
						height: "3rem",
						background: "#1d8cf8",
						boxShadow: "13px 13px 77px -24px #1d8cf8",
						position: "absolute",
						borderTopRightRadius: 50,
						borderBottomRightRadius: 50,
						bottom: "10vh",
						left: 0,
						display: "flex",
						alignItems: "center",
						textAlign: "center",
						justifyContent: "center",
						paddingLeft: 15,
						paddingRight: 15,
					}}
				>
					<h3 style={{ marginBottom: 0, fontWeight: "bold", color: "#fff" }}>
						{[...finalNumbers].map((number, index) => {
							if (index === 1) {
								return <Fragment key={index}>{"."}</Fragment>
							}

							return <CountUp key={index} end={Number(number)} duration={1.5} />
						})}
					</h3>
				</div>
			)}

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
							React JS, TypeScript, and Material UI.
						</h4>
					</div>
				</Container>
			</div>
		</>
	)
}

export default Welcome
