import { Schema, model } from "mongoose"

const animeSchema = new Schema(
	{
		name: String,
		date: String,
		description: String,
		disk: String,
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

export default model("Anime", animeSchema)
