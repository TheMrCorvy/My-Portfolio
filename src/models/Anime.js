import { Schema, model } from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

const animeSchema = new Schema(
	{
		position: Number,
		name: String,
		date: String,
		description: String,
		disk: Number,
		hasEnd: Boolean,
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

animeSchema.plugin(mongoosePaginate)

export default model("Anime", animeSchema)
