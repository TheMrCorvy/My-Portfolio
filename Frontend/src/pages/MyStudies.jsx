import React from "react"

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { CardImg, Container } from "reactstrap"

const MyStudies = () => {
	return (
		<Container
			className="bg-default"
			style={{ marginTop: "5rem", borderRadius: 15, maxWidth: "90%" }}
		>
			<VerticalTimeline animate={false}>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: "rgb(33, 150, 243)" }}
					contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
					date="2011 - present"
					dateClassName="text-white"
					iconClassName="timeline-icon"
					icon={<i className="tim-icons icon-bulb-63" />}
				>
					<h3 className="vertical-timeline-element-title">Creative Director</h3>
					<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
					<p>
						Creative Direction, User Experience, Visual Design, Project Management, Team
						Leading
					</p>
					<CardImg
						alt="alt..."
						src="/images/saludyderechos.png"
						style={{ marginTop: "2rem", borderRadius: 5 }}
					/>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					contentStyle={{ background: "rgb(33, 150, 243)" }}
					className="vertical-timeline-element--work"
					date="2010 - 2011"
					dateClassName="text-white"
					iconStyle={{ background: "rgb(33, 150, 243)" }}
				>
					<h3 className="vertical-timeline-element-title">Art Director</h3>
					<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
					<p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					contentStyle={{ background: "rgb(33, 150, 243)" }}
					className="vertical-timeline-element--work"
					date="2008 - 2010"
					dateClassName="text-white"
					iconStyle={{ background: "rgb(33, 150, 243)" }}
				>
					<h3 className="vertical-timeline-element-title">Web Designer</h3>
					<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
					<p>User Experience, Visual Design</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					contentStyle={{ background: "rgb(33, 150, 243)" }}
					className="vertical-timeline-element--work"
					date="2006 - 2008"
					dateClassName="text-white"
					iconStyle={{ background: "rgb(33, 150, 243)" }}
				>
					<h3 className="vertical-timeline-element-title">Web Designer</h3>
					<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
					<p>User Experience, Visual Design</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					contentStyle={{ background: "rgb(33, 150, 243)" }}
					className="vertical-timeline-element--education"
					date="April 2013"
					dateClassName="text-white"
					iconStyle={{ background: "rgb(233, 30, 99)" }}
				>
					<h3 className="vertical-timeline-element-title">
						Content Marketing for Web, Mobile and Social Media
					</h3>
					<h4 className="vertical-timeline-element-subtitle">Online Course</h4>
					<p>Strategy, Social Media</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					contentStyle={{ background: "rgb(33, 150, 243)" }}
					className="vertical-timeline-element--education"
					date="November 2012"
					dateClassName="text-white"
					iconStyle={{ background: "rgb(233, 30, 99)" }}
				>
					<h3 className="vertical-timeline-element-title">
						Agile Development Scrum Master
					</h3>
					<h4 className="vertical-timeline-element-subtitle">Certification</h4>
					<p>Creative Direction, User Experience, Visual Design</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					contentStyle={{ background: "rgb(33, 150, 243)" }}
					className="vertical-timeline-element--education"
					date="2002 - 2006"
					dateClassName="text-white"
					iconStyle={{ background: "rgb(233, 30, 99)" }}
				>
					<h3 className="vertical-timeline-element-title">
						Bachelor of Science in Interactive Digital Media Visual Imaging
					</h3>
					<h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
					<p>Creative Direction, Visual Design</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)" }} />
			</VerticalTimeline>
		</Container>
	)
}

export default MyStudies
