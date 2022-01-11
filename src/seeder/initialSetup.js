import User from "../models/User"
import Certificate from "../models/Certificate"
import Anime from "../models/Anime"
import Project from "../models/Project"
import World from "../models/World"

import animes from "./animes.json"
import certificates from "./certificates.json"
import worlds from "./worlds.json"
import projects from "./projects.json"
import userJson from "./users.json"

export const createUsers = async () => {
	const userCount = await User.estimatedDocumentCount()

	if (userCount > 0) return

	await Anime.deleteMany({})

	console.log("- - - - - - - - - - - - - - -")
	console.log("Deleted all of the animes.")
	console.log("- - - - - - - - - - - - - - -")

	await Certificate.deleteMany({})

	console.log("Deleted all of the certificates.")
	console.log("- - - - - - - - - - - - - - -")

	await Project.deleteMany({})

	console.log("Deleted all of the projects.")
	console.log("- - - - - - - - - - - - - - -")

	await World.deleteMany({})

	console.log("Deleted all of the worlds.")
	console.log("- - - - - - - - - - - - - - -")

	await new User({
		email: userJson.user.email,
		password: await User.encryptPassword(userJson.user.password),
	}).save()

	console.log("Inserted user.")
	console.log("- - - - - - - - - - - - - - -")

	await Anime.insertMany(animes.data)

	console.log("Inserted animes.")
	console.log("- - - - - - - - - - - - - - -")

	await Certificate.insertMany(certificates.data)

	console.log("Inserted certificates.")
	console.log("- - - - - - - - - - - - - - -")

	await World.insertMany(worlds.data)

	console.log("Inserted worlds.")
	console.log("- - - - - - - - - - - - - - -")

	await Project.insertMany(projects.data)

	console.log("Inserted projects.")
	console.log("- - - - - - - - - - - - - - -")

	console.log("Database seded successfully.")
}
