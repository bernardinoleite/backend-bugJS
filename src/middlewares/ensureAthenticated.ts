import { NextFunction, Request, Response } from "express";

import { verify } from "jsonwebtoken";
import { AppError } from "../shared/errors/AppError";
import { UserRepository } from "../modules/account/repositories/implementations/UserRepository";

export async function ensureAthenticated(err: Error, request: Request, response: Response, next: NextFunction) {
    console.log("entrei");


    const authHeader = request.headers.authorization
    if (!authHeader) {
        throw new AppError("Token missing", 401)
    }

    const [, token] = authHeader.split(" ")

    try {

        const { sub: user_id } = verify(token, process.env.JWT_SECRET)
        console.log(user_id);

        const userRepository = new UserRepository()
        const user = await userRepository.findById(user_id)
        if (!user) {
            throw new AppError("User does not exists")
        }
        console.log(user);

        request.user = { id: user.id }
        next()

    } catch (error) {
        throw new AppError("Token Invalid", 401)
    }

}

