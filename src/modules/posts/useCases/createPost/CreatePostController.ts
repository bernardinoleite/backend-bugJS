import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";



export class CreatePostController {

    constructor(private createPostUseCase: CreatePostUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {

        const { id: id_user } = request.user
        const { error, code_error, description, file, solution } = request.body
        const post = await this.createPostUseCase.execute({ id_user, error, code_error, description, file, solution })
        return response.status(200).json(post)
    }
}