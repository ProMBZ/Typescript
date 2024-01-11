import inquirer from "inquirer";
import chalk from "chalk";

const apiLink:string = "https://opentdb.com/api.php?amount=8&category=10&difficulty=easy&type=multiple";

let fetchData = async (data:string) => {
    let fetchQuiz:any = await fetch(data)
    let res = await fetchQuiz.json() 
    return res.results;
}
let data = await fetchData(apiLink);

let startQuiz = async () => {
    let score:number = 0
    // for user name
    let name = await inquirer.prompt({
        type:"input",
        name:"fname",
        message:"What Is Your Name?"
     })
     
     for(let i=1 ; i <= 5; i++){
        let answers = [...data[i].incorrect_answers,data[i].correct_answer];

        let ans = await inquirer.prompt({
            type:"list",
            name:"quiz",
            message:data[i].question,
            choices: answers.map((val:any)=>val),
        });

        if(ans.quiz == data[i].correct_answer) {
            ++score;
            console.log(chalk.bold.italic.blue("Correct"))
        } else {
            console.log(`Correct Answer Is ${chalk.bold.italic.red(data[i].correct_answer)}`);
        }
     }

     console.log(`Dear ${chalk.green.bold(name.fname)}, Your Score Is ${chalk.red.bold(score)} Out Of ${chalk.red.bold("6")}`);
};

startQuiz();