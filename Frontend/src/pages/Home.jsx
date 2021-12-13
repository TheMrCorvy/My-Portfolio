import React from "react"

import Welcome from "../components/sections/Welcome.jsx"
import MyLastProject from "../components/sections/MyLastProject.jsx"
import MyKnowledge from "../components/sections/MyKnowledge.jsx"
import TechnologiesIcons from "../components/utils/TechnologiesIcons.jsx"
import CryptoCards from "../components/sections/CryptoCards.jsx"

const Home = () => {
	return (
		<>
			<Welcome />

			<section className="section section-basic wrapper justify-content-between">
				<img alt="..." className="path" src={require("../assets/img/path1.png")} />

				<section className="section section-lg">
					<MyLastProject />
				</section>

				<section className="section section-lg">
					<img
						alt="..."
						className="path"
						style={{ transform: "scale(0.7)", left: "-15em", top: "-7em" }}
						src={require("../assets/img/path2.png")}
					/>
					<MyKnowledge />
					<TechnologiesIcons />
				</section>
			</section>

			<img alt="..." className="path" src={require("../assets/img/path4.png")} />

			<CryptoCards />
		</>
	)
}

export default Home
