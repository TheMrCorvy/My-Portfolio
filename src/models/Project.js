import { Schema, model } from "mongoose"

const projectSchema = new Schema(
	{
		name: String,
		image: String,
		date: String,
		slug: String,
		description: String,
		links: {
			github: {
				type: String,
			},
			mainLink: {
				type: String,
			},
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

export default model("Project", projectSchema)
