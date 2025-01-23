import express, { Request, Response, NextFunction } from "express"
import { AppError } from "./shared/errors/AppError"
import { router } from "./routes/index.routes"
import "express-async-errors"
const app = express()

app.use(express.json())

app.use(router)

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        res.status(err.statusCode).json({ error: err.message });
        next()
    } else {
        res.status(500).json({ status: "Error", message: 'Internal Server Error', details: err.message });
    }
});



app.listen(2908, () => {
    console.log("server is running on port 2908")
})

