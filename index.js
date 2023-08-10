// TODO: Include packages needed for this application
// include inquirer
const inquirer = require('inquirer');
// include fs
const fs = require('fs');
// include generateMarkdown
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    // title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    // description
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    // installation
    {
        type: 'input',
        name: 'installation',

    },
    // usage
    {
        type: 'input',
        name: 'usage',

    },
    // license
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],

    },
    // contributing
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


