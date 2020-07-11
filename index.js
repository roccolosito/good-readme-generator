const fs = require("fs");
const inquirer = require("inquirer");
const generateMd = require("./utils/generateMarkdown.js");

const questions = [
    {
        message: "Please enter your GitHub username.",
        type: "input",
        name: "username",
    },
    {
        message: "Please enter your project repository name.",
        type: "input",
        name: "project",
    },
    {
        message: "What is the name of the project?",
        type: "input",
        name: "title",
        default: "No project title given."
    },
    {
        message: "Please describe the project.",
        type: "input",
        name: "description",
        default: "No project description given."
    },
    {
        message: "What are the installation instructions?",
        type: "input",
        name: "installation",
        default: "No installation instructions given."
    },
    {
        message: "How is this project used?",
        type: "input",
        name: "usage",
        default: "No usage examples given."
    },
    {
        message: "Which license do you want to use for this project?",
        type: "list",
        name: "license",
        choices: ["Apache", "MIT"],
        default: "Apache"
    },
    {
        message: "What guidelines would like to give to contributors?",
        type: "input",
        name: "contributing",
        default: "No notes for contributions given."
    },
    {
        message: "How do you run tests?",
        type: "input",
        name: "tests",
        default: "No testing instructions given."
    },
    {
        message: "Please provide your GitHub email address",
        type: "input",
        name: "email",
        default: "Blank"
    },

];

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            writeToFile("README.md", generateMd.generateMarkdown(answers));

        });
}

init();
