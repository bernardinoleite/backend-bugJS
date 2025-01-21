import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {


    constructor(private deleteUserUseCase: DeleteUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params
        await this.deleteUserUseCase.execute(id)

        return response.status(200).json({
            status: 200,
            message: "User deleted with sucess"
        })
    }
}