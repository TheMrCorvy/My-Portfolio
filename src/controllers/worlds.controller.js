import World from "../models/World"

export const create = async (req, res) => {
	const newWorld = new World(req.body)

	const worldCreated = await newWorld.save()

	return res.status(201).json(worldCreated)
}

export const update = async (req, res) => {
	const updatedWorld = await World.findByIdAndUpdate(req.params.worldId, req.body, {
		new: true,
	})

	return res.status(200).json(updatedWorld)
}
