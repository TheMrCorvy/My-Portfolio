import { Schema, model } from "mongoose"

const certificateSchema = new Schema(
	{
		name: String,
		image: String,
		date: String,
		description: String,
		institute: String,
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

export default model("Certificate", certificateSchema)
