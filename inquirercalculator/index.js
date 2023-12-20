import inquirer from "inquirer";
import sub from "./sub.js";
import add from "./add.js";
import divide from "./divide.js";
import mult from "./mul.js";
async function main() {
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: 'n1',
            message: "Please Enter The First Number"
        },
        {
            type: "number",
            name: 'n2',
            message: "Please Enter The Second Number"
        },
        {
            type: "list",
            name: 'operator',
            message: "Please Select The Operation",
            choices: [
                { name: "add", value: add },
                { name: "sub", value: sub },
                { name: "mul", value: mult },
                { name: "divide", value: divide },
            ],
        },
    ]);
    console.log(answer.operator(answer.n1, answer.n2));
}
let confirm;
do {
    await main();
    confirm = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'con',
            message: 'Do You Want To Restart'
        }
    ]);
    console.log(confirm);
} while (confirm.con);