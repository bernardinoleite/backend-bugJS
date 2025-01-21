import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";



export class ListUserController {
    constructor(private listUserUseCase: ListUserUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.user
        const user = await this.listUserUseCase.execute(id)
        return response.status(200).json(user)
    }
}