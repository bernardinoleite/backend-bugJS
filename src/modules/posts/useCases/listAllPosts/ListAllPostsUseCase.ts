import { Post } from "../../entities/Post";
import { PostRepository } from "../../repositories/implementations/PostRepository";
import markdown from "markdown-it"
import { resolve } from "path"
import { readFileSync } from "fs"
import { IPostRepository } from "../../repositories/IPostRepository";
const mark = markdown()

export class ListAllPostsUseCase {

    constructor(private postRepository: IPostRepository) {

    }

    markdownToHtml(file: string): string {
        const path = resolve(__dirname, "..", "..", "..", "..", "static/readmes", file)
        const textMarkdown = readFileSync(path, "utf8") // futuramente consumir o markdown sob demanda com node stream
        const markdownToHtml = mark.render(textMarkdown)
        return markdownToHtml
    }

    async execute(): Promise<Post[]> {
        const posts = await this.postRepository.listAllPosts()
        const postsWithoutPasswordUser = posts.map(post => {
            delete post.user.password
            const { file } = post

            post.file = this.markdownToHtml(file)
            return post
        })
        return postsWithoutPasswordUser
    }
}



