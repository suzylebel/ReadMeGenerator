// function to generate markdown for README
const generateMarkdown = (answer) => {
  return `# [${answer.projectname}]()
  
  *Explore the [Deployed ${answer.projectname}](https://${answer.github}.github.io/${answer.projectname}/)
  *View the [Github page](https://github.com/${answer.github}/${answer.projectname})

## Table Of Contents
    1. [About the Project- ${answer.projectname}](#About-the-Project)
    2. [Getting Started](#Getting-Started)
    3. [Usage](#Usage)
    4. [Tests](#Tests)
    5. [Questions/Contribute](#Questions/Contribute) 
    6. [License](#License) 
    7. [Contact](#Contact)
    8. [Acknowledgements](#Acknowledgements)

## About the Project 

## Getting Started
  1. Clone the repo 

 

## Usage

Languages I used for this project are: 
  * ${answer.language}

## Tests
  
## Questions/Contribute 



## License

${answer.license}


## Acknowledgements

## Contact
*Feel free to contact me at: ${answer.email}*

Project Link:(https://github.com/${answer.github}/${answer.projectname})

  
  
  
`;
}

module.exports = generateMarkdown;
