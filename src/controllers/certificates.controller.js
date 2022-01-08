import Certificate from "../models/Certificate"

export const create = async (req, res) => {}

export const getLast = async (req, res) => {
	const certificates = await Certificate.find().sort({ createdAt: -1 }).limit(1)

	return res.status(200).json(certificates[0])
}
