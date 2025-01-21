import { Router } from "express";
import { usersRouter } from "./users.routes";
import { postRouter } from "./posts.routes";

const router = Router()

router.use("/users", usersRouter)
router.use("/posts", postRouter)


export {
    router
}
