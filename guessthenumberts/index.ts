import inquirer from 'inquirer';

type ansType = {
    userGuess: number
}

const systemGeneratedNo = Math.floor(Math.random() * 10);

const answers : ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write Your Guess Number 1 To 10:"    
    }
])

const {userGuess} = answers;

if(userGuess === systemGeneratedNo) {
    console.log(userGuess, "userGuess", systemGeneratedNo, 'Sys')
   console.log("Yes Your Answer Is Correct  You Win!")
} else{
    console.log("Please Try Again Better Luck Next Time!")
}
