import { Request, Response } from "express";
import { CountAllUserUseCase } from "./CountAllUserUseCase";



export class CountAllUserController {


    constructor(private countAllUserUseCase: CountAllUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const usersCounted = await this.countAllUserUseCase.execute()

        return response.status(200).json({
            status: 200,
            totalUsers: usersCounted
        })
    }
}