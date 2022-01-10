import User from "../models/User"
import Certificate from "../models/Certificate"
import Anime from "../models/Anime"
import Project from "../models/Project"
import World from "../models/World"

import animes from "./animes.json"
import certificates from "./certificates.json"
import userJson from "./users.json"

export const createUsers = async () => {
	const userCount = await User.estimatedDocumentCount()

	if (userCount > 0) return

	await Anime.deleteMany({})

	console.log("- - - - - - - - - - - - - - -")
	console.log("Deleted all of the animes.")

	await Certificate.deleteMany({})

	console.log("- - - - - - - - - - - - - - -")
	console.log("Deleted all of the certificates.")

	await Project.deleteMany({})

	console.log("- - - - - - - - - - - - - - -")
	console.log("Deleted all of the projects.")

	await World.deleteMany({})

	console.log("- - - - - - - - - - - - - - -")
	console.log("Deleted all of the worlds.")

	await new User({
		email: userJson.user.email,
		password: await User.encryptPassword(userJson.user.password),
	}).save()

	console.log("- - - - - - - - - - - - - - -")
	console.log("Inserted user.")

	await Anime.insertMany(animes.data)

	console.log("- - - - - - - - - - - - - - -")
	console.log("Inserted animes.")

	await Certificate.insertMany(certificates.data)

	console.log("- - - - - - - - - - - - - - -")
	console.log("Inserted certificates.")

	console.log("Database seded successfully.")
}
