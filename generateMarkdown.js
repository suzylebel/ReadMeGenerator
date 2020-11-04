// function to generate markdown for README


// funciton test();
// possible to put badge if else statement here
const generateMarkdown = (answer) => {
  if (answer.license === "MIT") {
    badgelicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (answer.license === "Apache") {
    badgelicense = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (answer.license === "none") {
    badgelicense = "N/A"
  } else if (answer.license === "GNU GPL v3") {
    badgelicense = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)"
  } else if (answer.license === "Eclipse Public License 1.0") {
    badgelicense = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  }
 
  return `# [${answer.projectname}]()
  
* Explore the [Deployed ${answer.projectname}](https://${answer.github}.github.io/${answer.projectname}/)
* View the [Github page](https://github.com/${answer.github}/${answer.projectname})

## Table Of Contents
  1. [About the Project- ${answer.projectname}](#About-the-Project)
  2. [Getting Started](#Getting-Started) 
  3. [Roadmap](#Roadmap)
  4. [Tests](#Tests)
  5. [Questions/Contribute](#Questions/Contribute) 
  6. [License](#License) 
  7. [Contact](#Contact)
  8. [Acknowledgements](#Acknowledgements)

## About the Project 

${answer.description}

## Getting Started
 
  ### Installation 
    1. Clone the repo:
    git clone (https://github.com/${answer.github}/${answer.projectname}.git) 
    2. Install packages 
   npm install ${answer.dependencies}

  ### Github Repo

  ${answer.repo} 


## Roadmap

Languages and frameworks used for this project: 
   ${answer.language}

## Tests
  
## Questions/Contribute 
1. Fork the project
2. Create your own branch 
3. Commit your changes 
4. Push to your branch 
5. Open a pull request for sandbox


## License

${badgelicense}
   This project is under the ${answer.license} license.
 

## Acknowledgements

## Contact
Feel free to contact me at: ${answer.email}

Project Link:(https://github.com/${answer.github}/${answer.projectname})

  
  
  
`;
}

module.exports = generateMarkdown;


// function licenseBadge() {
//   let result;
//   if (answer = 'MIT') {
//     result = 'link';
//   } else {
//     result = 'link';
//   }
//   return result;
// };

