import React from "react"

import Welcome from "../components/sections/Welcome.jsx"
import MyLastProject from "../components/sections/MyLastProject.jsx"
import MyKnowledge from "../components/sections/MyKnowledge.jsx"
import TechnologiesIcons from "../components/sections/TechnologiesIcons.jsx"
import SectionContacto from "../old/components/Sections/SectionContacto.jsx"
import PaquetesBasicos from "../old/components/Sections/PaquetesBasicos.jsx"

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

			<PaquetesBasicos />

			<section className="section section-lg justify-content-center">
				<SectionContacto />
			</section>
		</>
	)
}

export default Home
