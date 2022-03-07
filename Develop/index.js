// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "Full Name",
    },
    {
        type: 'input',
        message: 'Title of your project',
        name: 'Project Title',
    },
    {
        type: 'input',
        message: 'Project description:',
        name: 'Project Description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions:',
        name: 'Install Instructions',
    },
    {
        type: "input",
        message: "What is the link to the deployed application?",
        name: "deployment",
    },
    {
        type: 'input',
        message: 'Please provide usage information if applicable:',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'Please provide contributor information:',
        name: 'Contributors',
    },
    {
        type: 'input',
        message: 'Please provide testing information:',
        name: 'Testing',
    },
    {
        type: 'input',
        message: 'Please enter your Github username:',
        name: 'Github Username',
    },
    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'Email',
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "NONE"],
        name: 'license'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => writeToFile("README.md", generateMarkdown(response)));
}

// Function call to initialize app
init();
