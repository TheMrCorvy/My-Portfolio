import React from "react"

import BreadCrumbs from "../components/utils/BreadCrumbs.jsx"
import MyLastProject from "../components/sections/landing-page/MyLastProject.jsx"
import MyKnowledge from "../components/sections/my-resume/MyKnowledge.jsx"
import TechnologiesIcons from "../components/utils/TechnologiesIcons.jsx"
import Office from "../components/sections/my-resume/Office.jsx"
import MyLanguages from "../components/sections/my-resume/MyLanguages.jsx"
import Projects from "../components/sections/my-resume/Projects.jsx"
import DownloadCV from "../components/sections/my-resume/DownloadCV.jsx"
import MyLastCertificate from "../components/sections/my-resume/MyLastCertificate.jsx"

const MyCv = () => {
	return (
		<>
			<BreadCrumbs title="My CV" steps={{}} />

			<img alt="..." className="path" src={require("../assets/img/path1.png")} />

			<DownloadCV />

			<section className="section-lg section mb-5">
				<MyLastProject alt={true} />
			</section>

			<img alt="..." className="path" src={require("../assets/img/path3.png")} />

			<Projects />

			<MyLastCertificate />

			<MyLanguages />

			<img
				alt="..."
				className="path"
				style={{ zIndex: "-1", marginTop: "-50vw" }}
				src={require("../assets/img/path2.png")}
			/>

			<MyKnowledge alt />

			<img alt="..." className="path" src={require("../assets/img/path4.png")} />

			<TechnologiesIcons />

			<Office />
		</>
	)
}

export default MyCv
