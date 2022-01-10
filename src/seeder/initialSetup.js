import User from "../models/User"
import Certificate from "../models/Certificate"
import Anime from "../models/Anime"
import Project from "../models/Project"
import World from "../models/World"

import animes from "./animes.json"
import userJson from "./users.json"

export const createUsers = async () => {
	const userCount = await User.estimatedDocumentCount()

	if (userCount > 0) return

	await Anime.deleteMany({})

	await Certificate.deleteMany({})

	await Project.deleteMany({})

	await World.deleteMany({})

	await new User({
		email: userJson.user.email,
		password: await User.encryptPassword(userJson.user.password),
	}).save()

	await Anime.insertMany(animes.data)

	console.log("Database seded successfully.")
}
