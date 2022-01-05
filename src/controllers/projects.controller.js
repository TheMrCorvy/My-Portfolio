import Project from "../models/Project"

export const create = async (req, res) => {
	const { name, imageUrl } = req.body

	const newProject = new Project({ name, imageUrl })

	const projectCreated = await newProject.save()

	return res.status(201).json(projectCreated)
}

export const get = async (req, res) => {
	const projects = await Project.find()

	return res.json(projects)
}

export const getLast = (req, res) => {
	return res.json("last project")
}

export const update = (req, res) => {}

export const deleteProject = (req, res) => {}
