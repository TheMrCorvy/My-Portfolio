import React, { useEffect, useState } from "react"

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import { CardImg, Container } from "reactstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import useApi from "../hooks/useApi"
import BreadCrumbs from "../components/utils/BreadCrumbs"

const MyStudies = () => {
	const [certificates, setCertificates] = useState([])

	const callApi = useApi

	useEffect(() => {
		const req = {
			method: "GET",
			endpoint: "/certificates/",
		}

		callApi(req).then((data) => {
			setCertificates(data)
		})
	}, [])
	return (
		<>
			<BreadCrumbs
				title="My Studies"
				steps={{
					"My CV": "my-cv",
				}}
			/>
			<Container className="text-center mb-4">
				<h2 className="title pb-0 mb-2">My Studies</h2>
				<p>
					This is the complete timeline listing all of my studies, be it with or without a
					certification.
				</p>
			</Container>
			<Container
				className="bg-default"
				style={{
					borderRadius: 15,
					maxWidth: "90%",
					overflowX: "hidden",
				}}
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
							<h4 className="vertical-timeline-element-subtitle title mt-3">
								{certificate.institute}
							</h4>
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
		</>
	)
}

export default MyStudies
