import { Schema, model } from "mongoose"

const worldSchema = new Schema(
	{
		godOnCharge: String,
		description: String,
		jurisdiction: [
			{
				franchise: String,
				position: String,
			},
		],
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

export default model("World", worldSchema)
