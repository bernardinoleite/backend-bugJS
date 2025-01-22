import { Request, Response } from "express";
import { FindPostByErrorUseCase } from "./FindPostByErrorUseCase";



export class FindPostByErrorController {


    constructor(private findPostByErrorUseCase: FindPostByErrorUseCase) {


    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { error, code_error } = request.query

        const posts = await this.findPostByErrorUseCase.execute({ error: String(error), code_error: String(code_error) })

        return response.status(200).json(posts)
    }
}