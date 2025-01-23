import { Request, Response } from "express";
import { CountAllPostsUseCase } from "./CountAllPostsUseCase";



export class CountAllPostsController {
    constructor(private countAllPostUseCase: CountAllPostsUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {

        const postsCounted = await this.countAllPostUseCase.execute()

        return response.status(200).json({
            status: 200,
            totalPosts: postsCounted
        })

    }
}