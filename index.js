
// for testing, 
// type Manual Testing 
// installation: npm i 
const inquirer = require("inquirer");
const fs = require("fs"); 

// create an array of questions 

const questions = [
  {
      type:"input",
      message:"Enter Project name?",
      name:"projectname"
  },
  {
    type:"input",
    message:"Enter Project description?",
    name:"projectDescription"
  },
  {
    type:"list",
    message:"Enter Project license?",
    name:"projectlicense",
    choices:["MIT","ISC","APCHE","None", "GPL"]
  },
  {
    type:"input",
    message:"Enter GitHub username?",
    name:"GitHubUserName"
  },
  {
    type:"input",
    message:"Enter email address: ",
    name:"emailAddress"
  },


]

function gatherInput()
{
    inquirer.prompt(questions)
.then(function({projectname, projectDescription, projectlicense, GitHubUserName, emailAddress}){
var readmeSyntax = `
# ${projectname}
------------------
Table of Content
-------------------
* [Description](#description)
* [Structure](#structure)
* [Screenshot](#screenshot)
* [License](#license)


# Developer's Profile
[GitHub](https://github.com/${GitHubUserName})

# Lincense 
![GitHub license](https://img.shields.io/badge/license-${projectlicense}-blue.svg)
## Contact me
Feel free to reach out 
`



fs.writeFileSync("USER_README.md", readmeSyntax, function(error){
   if (error) throw error;
   console.log("File generated")
}



); 
})
    
}


gatherInput()