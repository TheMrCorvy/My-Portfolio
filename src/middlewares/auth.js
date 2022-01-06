import jwt from "jsonwebtoken"
import config from "../config"
import User from "../models/User"

export const verifyToken = (async = (req, res, next) => {
	const token = req.headres["x-access-token"]

	if (!token) {
		return res.status(403).json({ message: "Unauthenticated" })
	}

	const tokenDecoded = jwt.verify(token, config.SECRET)

	const user = User.findById(tokenDecoded.id)

	if (!user) {
		return res.status(403).json({ message: "Unauthenticated" })
	}

	next()
})
