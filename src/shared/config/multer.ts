
import multer from "multer"
import { randomUUID } from "crypto"
import { resolve } from "path"

export = {
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                filename(request, file, callback) {
                    const newName = `${randomUUID()}-${file.originalname}`
                    callback(null, newName)
                },
                destination(request, file, callback) {

                    callback(null, resolve(__dirname, "..", "..", folder))
                }
            })
        }
    }
}