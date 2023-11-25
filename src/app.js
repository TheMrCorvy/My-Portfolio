import express from "express"
import morgan from "morgan"
import bodyParser from "body-parser"
import cors from "cors"

import projectRoutes from "./routes/projects.routes"
import authRoutes from "./routes/auth.routes"
import certificatesRoutes from "./routes/certificates.routes"
import animesRoutes from "./routes/animes.routes"
import worldsRoutes from "./routes/worlds.routes"

import { setUpDb } from "./seeder/initialSetup"

const whitelist = [
	"http://localhost:3000",
	"http://corvalangonzalo.xyz",
	"https://corvalangonzalo.xyz",
	"https://www.corvalangonzalo.xyz",
	"http://www.corvalangonzalo.xyz",
	"https://my-porfolio-frontend.vercel.app/",
]

const corsOptions = {
	origin: (origin, callback) => {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true)
		} else {
			callback(new Error("Not allowed by CORS"))
		}
	},
}

const app = express()

// app.use(cors(corsOptions))

setUpDb()

// create application/json parser
const jsonParser = bodyParser.json()
// https://stackoverflow.com/questions/9177049/express-js-req-body-undefined

app.use(morgan("dev"))

app.use("/projects", jsonParser, projectRoutes)

app.use("/auth", jsonParser, authRoutes)

app.use("/certificates", jsonParser, certificatesRoutes)

app.use("/animes", jsonParser, animesRoutes)

app.use("/worlds", jsonParser, worldsRoutes)

export default app
