import User from "../models/User"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

export const register = async (req, res) => {
	dotenv.config()

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
		process.env.SECRET,
		{
			expiresIn: process.env.TOKEN_EXPIRES_IN,
		}
	)

	return res.status(200).json({ token })
}

export const login = async (req, res) => {
	dotenv.config()

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
		process.env.SECRET,
		{
			expiresIn: process.env.TOKEN_EXPIRES_IN,
		}
	)

	console.log(process.env.SECRET)

	return res.status(200).json({ token })
}
