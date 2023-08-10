// TODO: Include packages needed for this application
// include inquirer
const inquirer = require('inquirer');
// include fs
const fs = require('fs');
// include generateMarkdown
// const markDown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    // title
    {
        type: 'input',
        name: 'title',
        message: 'Please provide a title for your project.',
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
        message: 'Please provide installation instructions for your project.',

    },
    // usage
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.',

    },
    // contributing
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project.',
    },
    // tests
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project.',
    },

    // license
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],

    },
    // github
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.',
    },
    // email
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
    },


];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) 


// TODO: Create a function to initialize app
function init() {
    // use inquirer to prompt user for input
    inquirer.prompt(questions)
    .then((data) => {
        // use fs to write file to README.md
        fs.writeFile('README.md', markDown(data), (err) =>
        err ? console.error(err) : console.log('Success!'))
    })
}

// Function call to initialize app
init();


