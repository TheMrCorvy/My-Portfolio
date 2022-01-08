import mongoose from "mongoose"

import dotenv from "dotenv"

dotenv.config()

mongoose
	.connect(process.env.MONGODB_CONNECTION_STRING)
	.then(() => console.log("Database is connected"))
	.catch(() => console.log("Connection with database failed"))
