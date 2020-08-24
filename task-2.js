const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var fs = require('fs')
var project = {
    filename: 'Readme',
    title: ''
}



rl.question('Project Title ? ', function (answer) {
    project.title = answer
    var stream = fs.createWriteStream(project.filename + ".md");
    stream.write(`${project.title}\n================\n\n`);

    rl.question('What are the instructions to run the project ? ', function (instruction) {
        stream.write(`Getting Started \n============\n ${instruction}\n\n`)

        rl.question('Project description ? ', function (description) {
            stream.write(`Description \n============\n ${description}\n\n`)

            rl.question('Project deployment ? ', function (deployment) {
                stream.write(`Deployment \n============\n ${deployment}\n\n`)

                rl.question('How to contribute ? ', function (contribute) {
                    stream.write(`Contributing \n============\n ${contribute}\n\n`)

                    rl.question('Authors ? ', function (authors) {
                        stream.write(`Authors \n============\n ${authors}\n\n`)

                        rl.question('Acknowledgments ? ', function (acknowledgments) {
                            stream.write(`Acknowledgments \n============\n ${acknowledgments}\n\n`)
                        
                            rl.close()
                        })
                    })
                })

            })

        })
    })

})