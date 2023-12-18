import inquirer from 'inquirer';

let user = await inquirer.prompt({
    type:"input",
    name:"userName",
    message:"What Is Your Name?"
})

console.log(user.userName)