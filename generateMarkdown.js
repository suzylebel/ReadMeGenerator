// function to generate markdown for README
const generateMarkdown = (answer) => {
  return `# [${answer.projectname}]()
  
  *Explore the [Deployed ${answer.projectname}](https://${answer.github}.github.io/${answer.projectname}/)
  *View the [Github page](https://github.com/${answer.github}/${answer.projectname})

## Table Of Contents
    * [About the Project- ${answer.projectname}](#About-the-Project)
    * [Getting Started](#Getting-Started)
    * [Usage](#Usage)
    * [Tests](#Tests)
    * [Questions/Contribute](#Questions/Contribute) 
    * [License](#License) 
    * [Contact](#Contact)
    * [Acknowledgements](#Acknowledgements)

## About the Project 

## Getting Started
  1. Clone the repo 

 

## Usage

Languages I used for this project are: 
  *${answer.language}

## Tests
  
## Questions/Contribute 



## License

${answer.license}


## Acknowledgements

## Contact
Feel free to contact me at: ${answer.email}
Project Link:(https://github.com/${answer.github}/${answer.projectname})

  
  
  
`;
}

module.exports = generateMarkdown;
