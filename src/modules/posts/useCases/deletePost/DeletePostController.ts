import { Request, Response } from "express";
import { DeletePostUseCase } from "./DeletePostUseCase";



export class DeletePostController {

    constructor(private deletePostUseCase: DeletePostUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params
        await this.deletePostUseCase.execute(id)
        return response.status(200).json({
            status: 200,
            message: "Post delete with sucess"
        })

    }

}