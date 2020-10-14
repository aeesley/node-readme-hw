
// requiring necessary modules
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is a general description for your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "What are the usage instructions?"
    },
    {
        type: "input",
        name: "contribution",
        message: "What are your guidelines for contribution?"
    },
    {
        type: "input",
        name: "license",
        message: "What is the license information?"
    },
    {
        type: "input",
        name: "sources",
        message: "Did you use any sources in your project?"
    },
    {
        type: "input",
        name: "authors",
        message: "Who are the authors?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is the repo link for your project?"
    },


];

inquirer  
    // uses inquirer module to prompt user questions when run the node index.js command in terminal
    .prompt(questions)
    // setting up the callback function to get the user input answers
    .then(function(data) {
        console.log(data);
        fs.appendFile("README.md",JSON.stringify(data)+'\n',function(error){
        if(error){
            return console.log(error);
        }
        console.log("Success");
        })
    // PAUL TA generateMarkdown(data);
    });

// function to initialize program
function init() {
    // PAUL TA ask the inquirer stuff
    // one question about file name...
    // writeToFile(saidFileName, dataFromQuestions)

}

// function call to initialize program
init();
