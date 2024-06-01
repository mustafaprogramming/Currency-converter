#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.blue(`\n\n\t     _-^+-^+‾      ◦◦◦◦◦◦          ◦◦◦ ◎ ◉ ◯ ◉ ◎ ◦◦◦          ◦◦◦◦◦◦     ‾+^-+^-_`));
console.log(chalk.blue(`\t  <==!~~ ☆*: .｡. o(≧ ${chalk.greenBright.bold(` Welcome To Mustafa's  -  Currency Converter `)} ≦)o .｡.:*☆ ~~!==>`));
console.log(chalk.blue(`\t     ‾-∨+-∨+_      ◦◦◦◦◦◦          ◦◦◦ ◎ ◉ ◯ ◉ ◎ ◦◦◦          ◦◦◦◦◦◦     _+∨-+∨-‾\n\n`));
const exchange_rates = {
    "EUR": 0.94,
    "CAD": 1.37,
    "JYP": 153.29,
    "PKR": 278.07,
    "AUD": 1.54,
    "USD": 1,
};
let user_answer = await inquirer.prompt([
    {
        name: 'from_currency',
        type: 'list',
        message: chalk.rgb(255, 140, 0).bold('Select the currency to convert from: '),
        choices: ["EUR", "CAD", "JYP", "PKR", "AUD", "USD",]
    },
    {
        type: "number",
        name: 'amount',
        message: chalk.rgb(255, 140, 0).bold('Enter the amount to Convert: '),
    },
    {
        name: 'to_currency',
        type: 'list',
        message: chalk.rgb(255, 140, 0).bold('Select the currency to convert into: '),
        choices: ["EUR", "CAD", "JYP", "PKR", "AUD", "USD",]
    }
]);
let from_amount = exchange_rates[user_answer.from_currency];
let to_amount = exchange_rates[user_answer.to_currency];
let conversion_rate = to_amount / from_amount;
console.log(chalk.greenBright.bold(`\nConverted Amount: ${chalk.yellowBright.bold((user_answer.amount * conversion_rate).toFixed(2))}`));
