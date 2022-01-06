import jwt from "jsonwebtoken"
import config from "../config"
import User from "../models/User"

export const verifyToken = async (req, res, next) => {
	const token = req.headers["x-access-token"]

	if (!token) {
		return res.status(403).json({ message: "Unauthenticated" })
	}

	// LOS HIJOS DE MIL PUTA QUE HICIERON JWT HICIERON QUE TIRE UN ERROR CUANDO EL TOKEN ES INVALIDO...
	try {
		const tokenDecoded = jwt.verify(token, config.SECRET)

		const user = await User.findById(tokenDecoded.id, { password: 0 })

		if (!user) {
			return res.status(403).json({ message: "Unauthenticated" })
		}

		next()
	} catch (error) {
		return res.status(401).json({ message: "Token is invalid!" })
	}
}
