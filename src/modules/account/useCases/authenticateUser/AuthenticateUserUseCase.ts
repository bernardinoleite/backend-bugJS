import { AppError } from "../../../../shared/errors/AppError";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"

interface IResponseToken {
    user: {
        email: string,
        username: string
    },
    token: string

}
export class AuthenticateUserUseCase {

    constructor(private userRepository: UserRepository) {

    }

    async execute({ email, password }: { email: string, password: string }): Promise<IResponseToken> {

        const user = await this.userRepository.findByEmail(email)

        if (!user) {
            throw new AppError("Email or Password Incorrect!")
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new AppError("Email or Password Incorrect!")
        }

        const token = sign({ email: user.email, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1d", subject: user.id })

        const responseToken: IResponseToken = {
            user: {
                email: user.email,
                username: user.username
            },
            token
        }

        return responseToken
    }
}