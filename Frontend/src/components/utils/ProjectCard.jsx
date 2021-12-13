import React from "react"
import { UncontrolledTooltip } from "reactstrap"

const ProjectCard = ({ project }) => {
	return (
		<div className="card card-blog bg-default" style={{ borderRadius: 10 }}>
			<div className="card-image">
				<img
					className="img"
					src={project.image}
					alt={project.name}
					style={{
						borderTopRightRadius: 10,
						borderTopLeftRadius: 10,
						borderBottomLeftRadius: "0.25rem",
						borderBottomRightRadius: "0.25rem",
					}}
				/>
			</div>
			<div className="card-body text-center">
				<h6 className="category text-danger">
					<i className="tim-icons icon-sound-wave"></i> {project.date}
				</h6>
				<h5 className="card-title">{project.name}</h5>
				<p className="card-description">{project.description}</p>
				<div className="card-footer">
					<a href="#" className="btn btn-success">
						Read Article
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
