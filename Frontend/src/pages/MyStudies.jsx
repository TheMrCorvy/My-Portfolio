import React, { useEffect, useState } from "react"

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import { CardImg, Container } from "reactstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { projects } from "../temp/projects.json"

const MyStudies = () => {
	const [certificates, setCertificates] = useState([])

	useEffect(() => {
		setCertificates(projects)
	}, [])
	return (
		<Container
			className="bg-default"
			style={{ marginTop: "7rem", borderRadius: 15, maxWidth: "90%", overflowX: "hidden" }}
		>
			<VerticalTimeline>
				{certificates.map((certificate, index) => (
					<VerticalTimelineElement
						key={index}
						className="vertical-timeline-element--work"
						contentStyle={{ background: "rgb(33, 150, 243)" }}
						contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
						date={certificate.date}
						dateClassName="text-white"
						iconClassName="timeline-icon"
						iconStyle={{
							background: "rgb(33, 150, 243)",
							color: "#fff",
						}}
						icon={<FontAwesomeIcon icon={["fas", "user-graduate"]} size="2x" />}
					>
						<h3 className="vertical-timeline-element-title">{certificate.name}</h3>
						<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
						<p dangerouslySetInnerHTML={{ __html: certificate.description }}></p>
						<CardImg
							alt="alt..."
							src={certificate.image}
							style={{ marginTop: "2rem", borderRadius: 5 }}
						/>
					</VerticalTimelineElement>
				))}
				<VerticalTimelineElement
					iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
					icon={<FontAwesomeIcon icon={["fas", "flag"]} size="2x" />}
				/>
			</VerticalTimeline>
		</Container>
	)
}

export default MyStudies
