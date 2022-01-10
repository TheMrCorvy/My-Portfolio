import { Schema, model } from "mongoose"

const worldSchema = new Schema(
	{
		godInCharge: String,
		description: String,
		status: Boolean,
		jurisdiction: [
			{
				universe: Number,
				bubble: [
					{
						franchise: String,
						position: Number,
						description: String,
						positionInTimeline: Number,
						original: Boolean,
					},
				],
			},
		],
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

export default model("World", worldSchema)
