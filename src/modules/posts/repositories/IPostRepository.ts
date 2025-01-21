import { ICreatePostDTO } from "../dtos/ICreatePostDTO";
import { Post } from "../entities/Post";


export interface IPostRepository {

    create({ id_user, error, code_error, description, solution, file }: ICreatePostDTO): Promise<Post>
}