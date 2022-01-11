import Project from "../models/Project"

export const create = async (req, res) => {
	const newProject = new Project(req.body)

	const projectCreated = await newProject.save()

	return res.status(201).json(projectCreated)
}

export const get = async (req, res) => {
	const projects = await Project.find().sort({ createdAt: -1 })

	return res.status(200).json(projects)
}

export const getLast = async (req, res) => {
	const projects = await Project.find().sort({ createdAt: -1 }).limit(1)

	return res.status(200).json(projects[0])
}

export const update = async (req, res) => {
	const updatedProject = await Project.findByIdAndUpdate(req.params.projectId, req.body, {
		new: true,
	})

	return res.status(200).json(updatedProject)
}

export const deleteProject = async (req, res) => {
	await Project.findByIdAndDelete(req.params.projectId)

	return res.status(204).json()
}
