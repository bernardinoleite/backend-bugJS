import { Request, Response } from "express";
import { ListAllPostsUseCase } from "./ListAllPostsUseCase";



export class ListAllPostController {


    constructor(private listAllPostUseCase: ListAllPostsUseCase) {

    }


    async handle(request: Request, response: Response): Promise<Response> {

        const posts = await this.listAllPostUseCase.execute()
        return response.status(200).json(posts)
    }
}