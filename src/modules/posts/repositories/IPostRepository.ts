import { ICreatePostDTO } from "../dtos/ICreatePostDTO";
import { IFindPostByErrorDTO } from "../dtos/IFindPostByErrorDTO";
import { Post } from "../entities/Post";


export interface IPostRepository {

    create({ id_user, error, code_error, description, solution, file }: ICreatePostDTO): Promise<Post>
    listAllPosts(): Promise<Post[]>
    findPostByError({ error, code_error }: IFindPostByErrorDTO): Promise<Post[]>
    countPosts(): Promise<Number>
    delete(id: string): Promise<void>
}