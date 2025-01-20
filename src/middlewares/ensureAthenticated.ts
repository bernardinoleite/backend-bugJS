import { NextFunction, Request, Response } from "express";

import { verify } from "jsonwebtoken";
import { AppError } from "../shared/errors/AppError";
import { UserRepository } from "../modules/account/repositories/implementations/UserRepository";

export async function ensureAthenticated(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization

    if (!authHeader) {
        throw new AppError("Token missing")
    }
    const [, token] = authHeader.split(" ")

    try {
        const { sub: user_id } = verify(token, process.env.JWT_SECRET)
        const userRepository = new UserRepository()
        const userAlreadyExists = await userRepository.findById(String(user_id))
        if (!userAlreadyExists) {
            throw new AppError("User does not exists")
        }
        request.user = {
            id: String(user_id)
        }
        next()
    } catch (error) {
        throw new AppError("Token Invalid", 401)
    }

}

