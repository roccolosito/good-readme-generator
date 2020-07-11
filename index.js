const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

const questions = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "username",
                message: "Please enter your GitHub username."
            },
        ],
        )
}

function writeToFile(fileName, data) {
},

function init() {

},

init()
