import mongoose from "mongoose"

mongoose
	.connect("mongodb://localhost/my-portfolio", {
		useNewUrlParser: true,
		useUndefinedTopology: true,
	})
	.then(() => console.log("Database is connected"))
	.catch(() => console.log("Connection with database failed"))
