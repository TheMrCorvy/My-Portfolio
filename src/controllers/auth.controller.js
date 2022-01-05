import User from "../models/User"

export const register = async (req, res) => {
	const { email, password } = req.body

	const userCreated = new User({
		email,
		password: User.encryptPassword(password),
	})

	await userCreated.save()

	return res.status(200).json(userCreated)
}

export const login = async (req, res) => {}

export const logout = async (req, res) => {}
