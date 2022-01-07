import User from "../models/User"

export const createUsers = async () => {
	const userCount = await User.estimatedDocumentCount()

	if (userCount > 0) return

	await Promise.all([
		new User({
			email: "mr.corvy@gmail.com",
			password: await User.encryptPassword("password"),
		}).save(),
	])

	console.log("Created user.")
}
