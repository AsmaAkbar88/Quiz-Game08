#! /usr/bin/env node 

import chalk from "chalk";
import inquirer from "inquirer";



const quiz: {
    question_1: string,
    question_2: string,
    question_3: string,
    question_4: string,
    question_5: string
   
 } = await inquirer.prompt(
    [
        {
            name: "question_1",
            type: "list",
            message: chalk.greenBright("\n Q1: What is the correct way to check if two values are not equal in TypeScript?"),
                   choices: ["a == b ", "a === b", "a =b ", "a!==b"]
        },
        
        {
            name: "question_2",
            type: "list",
            message: chalk.greenBright("\n Q2: Which of the following characters is commonly allowed in varible name in TypeScript?"),
                   choices: ["$", "@", "#", "&"]
        },
        
        {
            name: "question_3",
            type: "list",
            message:chalk.greenBright( "\n Q3: Which Operater is commonly use for string concatenation in TypeScript?"),
                   choices: ["+", "-", "*", "/"]
        },
        
        {
            name: "question_4",
            type: "list",
            message: chalk.greenBright(" \n Q4: In TypeScript, Which symbol is commonly used to teminate a statement"),
                   choices: [".", ":", ";", ","]
        },
        
        {
            name: "question_5",
            type: "list",
            message:chalk.greenBright ("Q5: Which mehtod of inquirer.js is ussed to start the prompt interface and receive user input?"),
                   choices: ["start()", "prompt()", "init()", "run()"]
        }
    ]
 );
 let score: number = 0;

 switch(quiz.question_1){
    case "a!==b" :
        console.log(chalk.blueBright("1. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("1. Incorrect!"));
            
        
 }

 switch(quiz.question_2){
    case "$" :
        console.log(chalk.blueBright("2. Correct!"));
        ++score;
        break;
        default:
            console.log("2. Incorrect!");
            
        
 }
 switch(quiz.question_3){
    case "+" :
        console.log(chalk.blueBright("3. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("3. Incorrect!"));
            
        
 }
 switch(quiz.question_4){
    case ";" :
        console.log(chalk.blueBright("4. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("4. Incorrect!"));
            
        
 }
 switch(quiz.question_5){
    case "prompt()" :
        console.log(chalk.blueBright("5. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("5. Incorrect!"));
            
        
 }
console.log(` \n \n Score: ${score}`);
console.log("_".repeat(60));

