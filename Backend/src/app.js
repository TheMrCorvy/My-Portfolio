import express from "express"
import morgan from "morgan"

const app = express()

app.use(morgan("dev"))

app.get("/", (req, res) => {
	res.json("bienvenido")
})

app.get("/api", (req, res) => {
	res.json("bienvenido a la api")
})

export default app
