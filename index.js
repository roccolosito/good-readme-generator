const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMd = require("./utils/generateMarkdown.js");

const questions = [
            {
                type: "input",
                name: "username",
                message: "Please enter your GitHub username."
            },
            {
                type: "input",
                name: "title",
                message: "What is the name of the project?",
                default: "No project title given."
            },
            {
                type: "input",
                name: "description",
                message: "Please describe the project.",
                default: "No project description given."
            },
            {
                type: "input",
                name: "installation",
                message: "What are the installation instructions?",
                default: "No installation instructions given."
            },
            {
                type: "input",
                name: "usage",
                message: "How is this project used?",
                default: "No usage examples given."
            },
            {
                type: "list",
                name: "license",
                message: "Which license do you want to use for this project?",
                choices: ["Apache", "MIT"],
                default: "Apache"
            },
            {
                type: "input",
                name: "contributing",
                message: "What guidelines would like to give to contributors?",
                default: "No notes for contributions given."
            },
            {
                type: "input",
                name: "tests",
                message: "How do you run tests?",
                default: "No testing instructions given."
            },
            {
                type: "input",
                name: "email",
                message: "Please provide your GitHub email address",
                default: "Blank."
            },
            
        ];
        
function writeToFile(fileName, data) {
}

function init() {

}

init();
