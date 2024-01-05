import chalk from "chalk";
import inquirer from "inquirer";

// CURRENCY CONVERTER API LINK
let apiLink = 
"https://v6.exchangerate-api.com/v6/5a9da9c0aed30e1d5b467d8b/latest/PKR";

// FECTHING Data
let fetchData = async (data:any) => {
    let fetchData = await fetch(data);
    let res = await fetchData.json();
    return res.conversion_rates;
};

let data = await fetchData(apiLink);
// OBJECT TO ARRAY
let countries = Object.keys(data);

// USER INPUT FIRST COUNTRY
let firstCountry = await inquirer.prompt({
    type:"list",
    name:"name",
    message:"Converting From:",
    choices: countries,
});
console.log(`Converting From ${chalk.greenBright.bold(firstCountry.name)}`);

// FIRST COUNTRY MONEY
let userMoney = await inquirer.prompt({
    type:"number",
    name:"rupee",
    message:`Please Enter The Amount In ${chalk.greenBright.bold(firstCountry.name)} :`
});
// CONVERT COUNTRY
let secondCountry = await inquirer.prompt({
    type:"list",
    name:"name",
    message:"Converting To:",
    choices: countries,
});
// conversitiion rates
let cnv = 
`https://v6.exchangerate-api.com/v6/5a9da9c0aed30e1d5b467d8b/pair/${firstCountry.name}/${secondCountry.name}`;

// fetching Data for conversion rate
let cnvData = async (data:any) => {
    let cnvData = await fetch(data);
    let res = await cnvData.json();
    return res.conversion_rate;
};

let conversionRate = await cnvData(cnv);

let convertedRate = userMoney.rupee * conversionRate

console.log(`Your ${chalk.bold.greenBright(firstCountry.name)} ${chalk.bold.greenBright(userMoney.rupee)} In ${chalk.bold.greenBright(secondCountry.name)} Is ${chalk.bold.greenBright(convertedRate)}`);