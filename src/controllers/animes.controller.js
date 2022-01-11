import Anime from "../models/Anime"

export const create = async (req, res) => {
	const { name, disk, description, date, hasEnd } = req.body

	const lastAnime = await Anime.find().sort({ _id: -1 }).limit(1)

	const newAnime = new Anime({
		name,
		position: lastAnime[0].position + 1,
		disk,
		description,
		date,
		hasEnd,
	})

	const animeCreated = await newAnime.save()

	return res.status(201).json({ animeCreated, status: 201 })
}

export const update = async (req, res) => {
	const updatedAnime = await Anime.findByIdAndUpdate(req.params.animeId, req.body, {
		new: true,
	})

	return res.status(200).json(updatedAnime)
}
