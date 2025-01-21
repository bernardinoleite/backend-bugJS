import { Request, Response } from "express";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";


export class UpdateUserAvatarController {


    constructor(private updateUserAvatarUseCase: UpdateUserAvatarUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.user
        const avatarPath = request.file.filename
        await this.updateUserAvatarUseCase.execute({ id, avatar: avatarPath })
        return response.status(200).json({ status: 200, message: "Avatar updated with sucess" })
    }
}