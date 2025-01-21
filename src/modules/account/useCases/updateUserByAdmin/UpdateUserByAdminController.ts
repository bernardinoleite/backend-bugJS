

import { Request, Response } from "express";
import { UpdateUserByAdminUseCase } from "./UpdateUserByAdminUseCase";


export class UpdateUserByAdminController {


    constructor(private updateUserByAdminUseCase: UpdateUserByAdminUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const { username, email, password, avatar } = request.body

        const updatedUser = await this.updateUserByAdminUseCase.execute({ id, username, email, password, avatar })

        return response.status(201).json({
            status: 200,
            message: "User updated with sucess",
            updatedUser
        })
    }
}