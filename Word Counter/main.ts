#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//Welcome design
console.log(chalk.bold.yellowBright("======================================================================"));
console.log(chalk.bold.greenBright("\n                  WELCOME TO WORD AND LETTER COUNTER GAME                    "));
console.log(chalk.bold.yellowBright("\n======================================================================"));


// Loop apply
let projectContinue = true;
while (projectContinue === true) {

    //Select Options
    const select = await inquirer.prompt([
        {
            name: "one",
            type: "list",
            message: "Select One Option",
            choices: ["Letter Count", "Word Count", "Quit"]
        }
    ])

    //Option 1 :Letter Select
    if (select.one === "Letter Count") {
        let answer = await inquirer.prompt([
            {
                name: "sentence",
                type: "input",
                message: "Enter your sentence to count letters?"
            }
        ])
        let cutSpace = answer.sentence.trim().split(" ").join("");
        let countLetters = cutSpace.length;
        console.log(chalk.bold.blueBright("In this sentence the letters is " + countLetters));


        //Option 2 :Word Select
    } else if (select.one === "Word Count") {
        let answer = await inquirer.prompt([
            {
                name: "sentence",
                type: "input",
                message: "Enter your sentence to count words?"
            }
        ])
        let sentenceSpaceWithout = answer.sentence.trim().split(" ")
        let countWords = sentenceSpaceWithout.length;
        console.log(chalk.bold.magentaBright("In this sentence the words is " + countWords));



        //Option 3 :Quit
    } else {
        let select = await inquirer.prompt([
            {
                type: "confirm",
                name: "quit",
                message: "Do you want to quit",
            }
        ])
        if (select.quit === true) {
            break;
        }
    }
}

console.log(chalk.bold.yellowBright("\n================================") + (chalk.bold.greenBright(" Thanks to use my application ")) + (chalk.bold.yellowBright("==============================")));








