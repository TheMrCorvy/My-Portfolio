import User from "../models/User"
import userJson from "./users.json"

export const createUsers = async () => {
	const userCount = await User.estimatedDocumentCount()

	if (userCount > 0) return

	await Promise.all([
		new User({
			email: userJson.user.email,
			password: await User.encryptPassword(userJson.user.password),
		}).save(),
	])

	console.log("Created user.")
}
