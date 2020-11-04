const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// const data =

// generateMarkdown(data);
const writeFileAsync = util.promisify(fs.writeFile);

// const util = require('util');

// const writeFileAsync = util.promisify(fs.writeFile);

const questions = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'projectname',
      message: 'What is the name of your github project?(Use dashes for spaces)',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',

    //   https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript regex link (make sure to put in readme)
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a brief description of your project',

    },
    {
        type: 'checkbox',
        name: 'language',
        message: 'What frameworks and languages did you use to build the project?',
        choices: ['HTML', 'CSS', 'JS', 'Boostrap', 'JQUERY', 'AJAX', 'API keys'],
      },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of do you want your project to have? ',
      choices: ["MIT", "Apache", "GNU GPL v3","Eclipse Public License 1.0", "None"]
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'What command should be run to install dependencies?',
    },
      {
        type: 'input',
        name: 'repo',
        message: 'What does the user need to know about contributing to the repo?',
      },
  ]);

questions()
.then((answer) => writeFileAsync('ReadME.md', generateMarkdown(answer)))
.then(() => console.log("ReadMe generated"))
.catch((err) => console.error(err));
//   

