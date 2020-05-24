const inquirer = require("inquirer");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "username"
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "projectname"
  },
  {
    type: "input",
    message: "Please provide a short description of your project.",
    name: "projectdescription"
  },
  {
    type: "input",
    message: "What are the steps required to install your project? Please provide details of how to get the dev environment running.",
    name: "projectinstallation"
  },
  {
    type: "input",
    message: "Please provide instructions and examples for use, including screenshots",
    name: "projectusage"
  },
  {
    type: "input",
    message: "Please provide a list of collaborators, and links to tutorials you may have followed",
    name: "projectcredits"
  },
  {
    type: "list",
    message: "What kind of license would you like?",
    name: "projectlicense",
    choices: ['GNU AGPLv3', 'GNU GPLv3','GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'BoostSoftwareLicense 1.0', 'The Unlicense']
  },

  //Also need to ask about
  //A GitHub badge
  //Table of Contents
  
  //Tests
  //Questions, as follows:
  //GitHub(acct => json file, navigate to find profile pic) profile photo
  // email


];

function writeToFile(fileName, data) {
}

function init() {
  //1. ask for user input

  inquirer.prompt(questions)
  .then(function({username, projectname, projectdescription, projectinstallation, projectusage, projectcredits, projectlicense}){
    //const username = answers.username
    //const projectname = answers.projectname
    //const projectdescription = projectdescription
    //const projectinstallation = projectinstallation
    //const projectusage = projectusage
    //const projecctcredits = projectcredits
    //const projectlicense = projectlicense
    var userObj={
      username:username,
      projectname:projectname,
      projectdescription:projectdescription,
      projectinstallation:projectinstallation,
      projectusage:projectusage,
      projectcredits:projectcredits,
      projectcredits:projectlicense
    }
    //2. from user input (github acct) get github profile pic
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    console.log(queryUrl);
    userObj.queryUrl=queryUrl;
    axios.get(queryUrl)
    .then(function(res) {
      const githubIcon = res.data[0].owner.avatar_url;
      console.log(githubIcon)
      userObj.githubIcon=githubIcon;
      console.log(userObj);
      return userObj;
    })
        //3. pass userinput and github info to create a template (function generateMarkdown function) and 
        //autopopulate the input to the template

    .then(function(userObj){
      console.log(userObj)
      const md=generateMarkdown(userObj);
      console.log(md);

      return writeFileAsync("readme.md", md);

    });
    //4. create a readme file


  });

}

init();

