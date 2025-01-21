import { Request, Response } from "express";
import { DeleteUserByAdminUseCase } from "./DeleteUserByAdminUseCase";

export class DeleteUserByAdminController {


    constructor(private deleteUserByAdminUseCase: DeleteUserByAdminUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params
        await this.deleteUserByAdminUseCase.execute(id)

        return response.status(200).json({
            status: 200,
            message: "User deleted with sucess"
        })
    }
}