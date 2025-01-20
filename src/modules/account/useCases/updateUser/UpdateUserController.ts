import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";


export class UpdateUserController {


    constructor(private updateUserUseCase: UpdateUserUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user

        const { username, email, password, avatar } = request.body

        const updatedUser = await this.updateUserUseCase.execute({ id, username, email, password, avatar })

        return response.status(201).json({
            status: 200,
            message: "User updated with sucess",
            updatedUser
        })
    }
}