import { File } from "../../../../shared/utils/file";
import { IUserRepository } from "../../repositories/IUserRepository";


export interface IRequest {
    id: string,
    avatar: string
}

export class UpdateUserAvatarUseCase {


    constructor(private userRepository: IUserRepository) {

    }

    // preciso receber o id, pego do token

    // preciso receber o path do avatar
    // preciso deletar o avatar antigo
    // preciso salvar o path do novo avatar
    async execute({ id, avatar }: IRequest): Promise<void> {

        const user = await this.userRepository.findById(id)

        if (user.avatar) {
            const file = new File()
            await file.delete(`./static/avatar/${user.avatar}`)
        }

        user.avatar = avatar

        await this.userRepository.update(user)
    }
}