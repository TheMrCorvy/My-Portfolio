import express from "express"
import morgan from "morgan"

import projectRoutes from "./routes/projects.routes.js"

const app = express()

app.use(morgan("dev"))

app.use("/projects", projectRoutes)

export default app
