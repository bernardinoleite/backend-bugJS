import { Request, Response } from "express";
import { UpdatePostUseCase } from "./UpdatePostUseCase";



export class UpdatePostController {
    constructor(private updatePostUseCase: UpdatePostUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const id_user = request.user.id
        const { id, error, code_error, description, file, solution } = request.body

        const postUpdated = await this.updatePostUseCase.execute({ id, id_user, error, code_error, description, file, solution })
        return response.status(200).json({
            status: 200,
            message: "Post updated with sucess",
            postUpdated
        })
    }
}