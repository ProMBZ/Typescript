import inquirer from 'inquirer';
import { faker } from '@faker-js/faker';
const createUser = () => {
    let users = [];
    for (let i = 0; i < 5; i++) { //give him order for 5000 or anything it will make 5000 user
        let user = {
            id: i,
            pin: 1000 + i,
            name: faker.person.fullName(),
            accountNumber: Math.floor(100000000 * Math.random() * 900000000),
            balance: 1000000 * i
        };
        users.push(user);
    }
    return users;
};
// atm machnine
const atmMachine = async (users) => {
    const res = await inquirer.prompt({
        type: "number",
        message: "Write Pin Code",
        name: "Pin"
    });
    const user = users.find(val => val.pin == res.Pin);
    if (user) {
        console.log(`Welcome ${user.name}`);
        atmFunc(user);
        return;
    }
    console.log("Invalid User Pin");
};
// atm function
const atmFunc = async (user) => {
    const ans = await inquirer.prompt({
        type: "list",
        name: "Select",
        message: "What Do You Want To Do..",
        choices: ["Withdraw", "Balance", "Deposite", "Exit"]
    });
    if (ans.Select == "Withdraw") {
        const amount = await inquirer.prompt({
            type: "number",
            message: "Enter Your amount.",
            name: "Rupee"
        });
        if (amount.Rupee > user.balance) {
            return console.log("Current balance is not enough..");
        }
        if (amount.Rupee > 25000) {
            return console.log("You Can Not Withdraw More Than 25000.");
        }
        console.log(`Withdraw Amount: ${amount.Rupee}`);
        console.log(`Balance: ${user.balance - amount.Rupee}`);
    }
    if (ans.Select == "Balance") {
        console.log(`Balance: ${user.balance}`);
        return;
    }
    if (ans.Select == "Deposite") {
        const deposite = await inquirer.prompt({
            type: "number",
            message: "Enter Your Deposite Amount..",
            name: "rupee"
        });
        console.log(`Deposite Amount: ${deposite.rupee}`);
        console.log(`Total Balance: ${user.balance + deposite.rupee}`);
    }
    if (ans.Select == "Exit") {
        console.log("Thanks For Using Our ATM Made By MBZ ..");
    }
};
const users = createUser();
atmMachine(users);
