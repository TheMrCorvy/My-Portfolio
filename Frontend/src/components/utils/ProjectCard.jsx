import React from "react"
import { UncontrolledTooltip } from "reactstrap"

const ProjectCard = ({ project }) => {
	return (
		<>
			<div className="card card-blog bg-default" style={{ borderRadius: 10 }}>
				<div className="card-image">
					<a href={project.links.mainLink} target="_blank" rel="noopener noreferrer">
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
							id={project.id}
						/>
					</a>
				</div>
				<div className="card-body text-center">
					<h6 className="category text-danger">
						<i className="tim-icons icon-sound-wave"></i> {project.date}{" "}
						<i className="tim-icons icon-sound-wave"></i>
					</h6>
					<h5 className="card-title">{project.name}</h5>
					<p
						className="card-description"
						dangerouslySetInnerHTML={{ __html: project.description }}
					></p>
					<div className="card-footer">
						<a
							href={project.links.github}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-success"
						>
							See the Code on GitHub
						</a>
					</div>
				</div>
			</div>
			<UncontrolledTooltip placement="top" target={project.id} delay={0}>
				{"Click to visit " + project.name}
			</UncontrolledTooltip>
		</>
	)
}

export default ProjectCard
