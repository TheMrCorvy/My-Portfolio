import { Schema, model } from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new Schema(
	{
		email: String,
		password: String,
	},
	{
		timestamps: true,
		versionKey: false,
	}
)

userSchema.statics.encryptPassword = async (pass) => {
	const salt = await bcrypt.genSalt(10)

	return await bcrypt.hash(pass, salt)
}

userSchema.statics.comparePassword = async (encryptedPass, decryptedPass) => {
	return await bcrypt.compare(encryptedPass, decryptedPass)
}

export default model("User", userSchema)
