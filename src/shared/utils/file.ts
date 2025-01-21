import fs from "fs"
import { resolve } from "path"
export class File {

    constructor() {

    }

    async delete(pathFile: string) {
        try {
            await fs.promises.stat(resolve(__dirname, "..", "..", pathFile))
        }
        catch (error) {
            return
        }
        await fs.promises.unlink(resolve(__dirname, "..", "..", pathFile))
    }
}