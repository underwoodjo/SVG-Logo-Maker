const inquirer = require('inquirer')
const fs = require('fs')
const jest = require('jest')

// Create the questions that will be prompted
const questions = [
    {
        type: 'input',
        name: 'Text',
        message: 'What text would you like on your svg logo?'
      },
    {
        type: 'input',
        name: 'TextColor',
        message: 'What color would you like your text?'
      },
      {
        type: 'list',
        name: 'Shape',
        message: 'What shape would you like your logo to be?',
        choices: ['circle', 'triangle', 'square']
      },
      {
        type: 'input',
        name: 'ShapeColor',
        message: 'What color would you like your shape to be?'
      }]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,() =>{  
        console.log('Files are written')
    })};
    // TODO: Create a function to initialize app
    function init() {
        inquirer.prompt(questions).then((answers) => { 
            writeToFile('ReadMe.md', generateMarkdown(answers))
        })
    }
    // Function call to initialize app
    init();