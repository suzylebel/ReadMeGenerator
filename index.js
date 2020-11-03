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
    },
    {
        type: 'checkbox',
        name: 'language',
        message: 'What frameworks and languages did you use to build the project?',
        choices: ['HTML','CSS','JS','Boostrap','JQUERY','ajax','API keys'],
      },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of do you want your project to have? ',
      choices: ["MIT", "Apache", "GPC", "None"]
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'repo2',
        message: 'What does the user need to know about contributing to the repo?',
      },
  ]);

questions()
.then((answer) => writeFileAsync('ReadME.md', generateMarkdown(answer)))
.then(() => console.log("ReadMe generated"))
.catch((err) => console.error(err));
//   

