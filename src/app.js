import express from "express"
import morgan from "morgan"
import bodyParser from "body-parser"

import projectRoutes from "./routes/projects.routes"
import authRoutes from "./routes/auth.routes"
import certificatesRoutes from "./routes/certificates.routes"
import animesRoutes from "./routes/auth.routes"
import worldsRoutes from "./routes/worlds.routes"

import { createUsers } from "./libs/initialSetup"

const app = express()
createUsers()

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
