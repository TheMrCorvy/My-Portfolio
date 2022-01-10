import { Schema, model } from "mongoose"

const animeSchema = new Schema(
	{
		position: Number,
		name: String,
		date: String,
		description: String,
		disk: String,
		hasEnd: Boolean,
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

export default model("Anime", animeSchema)
