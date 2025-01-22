// import MarkdownIt from "markdown-it";

// const m = MarkdownIt()


// const r = m.render("# a")

// console.log(r);

const { watchFile, watch } = require("fs")

// const result = watchFile("./README.md", (curr, prev) => {

//     console.log(curr, prev);
// })

// const res = watch("./README.md", (curr, prev) => {

//     console.log(curr, prev);
// })


const fs = require("fs")
const ch = require("child_process")

function nodemon_like(pathFile) {
    const processoRodando = ch.spawn("node", [pathFile], { stdio: "inherit" })

    fs.watch(pathFile, (evento, nomeDoFile) => {
        if (evento === "change") {

            processoRodando.kill()
            ch.fork(pathFile)
        }
    })

}


nodemon_like("index.js")