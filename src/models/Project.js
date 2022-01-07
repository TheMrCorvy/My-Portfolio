import { Schema, model } from "mongoose"

const projectSchema = new Schema(
	{
		name: String,
		imageUrl: String,
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

export default model("Project", projectSchema)
