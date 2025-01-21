import { NextFunction, Request, Response } from "express";
import { AppError } from "../shared/errors/AppError";

export function adminMiddleware(request: Request, response: Response, next: NextFunction) {

    const { role } = request.user
    if (role !== true) {
        throw new AppError("unauthorized", 403)
    }
    next()
}