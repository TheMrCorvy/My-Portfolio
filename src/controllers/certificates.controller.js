import Certificate from "../models/Certificate"

export const create = async (req, res) => {}

export const get = async (req, res) => {
	const certificates = await Certificate.find().sort({ _id: -1 })

	return res.status(200).json(certificates)
}

export const getLast = async (req, res) => {
	const certificates = await Certificate.find().sort({ _id: -1 }).limit(1)

	return res.status(200).json(certificates[0])
}
