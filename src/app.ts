import express from "express"
import { router } from "./routes/index.routes"
const app = express()

app.use(express.json())

app.use(router)


app.listen(2908, () => {
    console.log("server is running on port 2908")
})