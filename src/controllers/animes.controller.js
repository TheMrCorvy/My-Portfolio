import Anime from "../models/Anime"

export const create = async (req, res) => {
	const newAnime = new Anime(req.body)

	const animeCreated = await newAnime.save()

	return res.status(201).json(animeCreated)
}

export const update = async (req, res) => {}
