
// requiring necessary modules
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//var myTutor = require('./utils/generateMarkdown')

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



// function to initialize program
function init() {
    console.log('hello from init!!')
    inquirer  
    // uses inquirer module to prompt user questions when run the node index.js command in terminal
    .prompt(questions)
    // setting up the callback function to get the user input answers
    .then(function(data) {
        console.log(data);

        var fakeReadMe = generateMarkdown(data)

        fs.appendFile("README.md",fakeReadMe,function(error){
            if(error){ // add all user data to README file with a message at the end that says "Success" in console, and console.log any errors
                return console.log(error);
            }
            console.log("Success");
        })
    });
}

// function call to initialize program
init();
