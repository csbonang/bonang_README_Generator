// Note: 
// For testing, 
// type Manual Testing as description 
// installation: npm i 

// packages needed 
const inquirer = require("inquirer");
const fs = require("fs"); 

// questions: holds all the questions needed to generate README 
const questions = [
  {
    type:"input",
    message:"Enter GitHub username: ",
    name:"GitHubUserName"
  },
  {
    type:"input",
    message:"Enter email address: ",
    name:"emailAddress"
  },
  {
      type:"input",
      message:"Enter project name: ",
      name:"projectName"
  },
  {
    type:"input",
    message:"Enter your project description: ",
    name:"projectDescription"
  },
  {
    type:"list",
    message:"Select a type of project license: ",
    name:"projectLicense",
    choices:['MIT','APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none']
  },
  {
    type:"input",
    message:"What command should run to install dependencies? ",
    name:"installCommand"
  }, 
  {
    type:"input",
    message:"What command should be run to run tests? ",
    name:"runCommand"
  }, 
  {
    type:"input",
    message:"What does the user need to know about using the repo? ",
    name:"repoInfo"
  }, 
  {
    type:"input",
    message:"What does the user need to know about contributing to the repo",
    name:"contributeInfo"
  }, 

]

// gather Input:: displays questions, takes in user input, write to file USER_README
function gatherInput()
{
    inquirer.prompt(questions)
    // license = questions.projectlicense; 
.then(function({GitHubUserName, emailAddress, projectName, projectDescription, projectLicense, installCommand, runCommand, repoInfo, contributeInfo}){
var readmeSyntax = `
## ${projectName}

# Developer's Profile
[GitHub](https://github.com/${GitHubUserName})
# License 
![GitHub license](https://img.shields.io/badge/license-${projectLicense}-blue.svg)

## Description 
${projectDescription}
------------------
## Table of Content
-------------------
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation 
To install the necessary dependencies, run the following command: 
${installCommand}


## Usage 
${repoInfo}

## License 
[License](https://opensource.org/licenses/${projectLicense})


## Contributing 
${contributeInfo}

## Tests
To run tests, run the following command: 
${runCommand}

## Contact me
Feel free to reach out 

## Questions 
If you have any questions about the repo, open an issue or contact me directly
at csgbonang@gmail.com. You can find more at [csbonang](https://github.com/csbonang). 
        `

        fs.writeFileSync("USER_README.md", readmeSyntax, function(error){
          if (error) throw error;
          console.log("File generated"); 
        }



    ); 
    })

}

// calls gather input to generate readme
gatherInput(); 