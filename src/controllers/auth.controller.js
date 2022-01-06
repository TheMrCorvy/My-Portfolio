import User from "../models/User"
import jwt from "jsonwebtoken"
import config from "../config"

export const register = async (req, res) => {
	const { email, password } = req.body

	const newUser = new User({
		email,
		password: await User.encryptPassword(password),
	})

	const userCreated = await newUser.save()

	const token = jwt.sign(
		{
			id: userCreated._id,
		},
		config.SECRET,
		{
			expiresIn: config.tokenExpiresIn,
		}
	)

	return res.status(200).json({ token })
}

export const login = async (req, res) => {
	const userFound = await User.findOne({ email: req.body.email })

	if (!userFound) {
		return res.status(401).json({
			message: "credentials do not match",
		})
	}

	const passIsCorrect = await User.comparePassword(req.body.password, userFound.password)

	if (!passIsCorrect) {
		return res.status(401).json({
			message: "credentials do not match",
		})
	}

	const token = jwt.sign(
		{
			id: userFound._id,
		},
		config.SECRET,
		{
			expiresIn: config.tokenExpiresIn,
		}
	)

	return res.status(200).json({ token })
}

export const logout = async (req, res) => {}
