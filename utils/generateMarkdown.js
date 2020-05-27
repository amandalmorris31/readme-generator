function generateMarkdown(userObj) {
  console.log(userObj);
  return `
## Badge
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

# Project Title
${userObj.projectname} 

# Description
${userObj.projectdescription}

## Table of Contents

* [Badge](#Badge)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributors](#Contributors)

## Installation
${userObj.projectinstallation}

## Usage
${userObj.projectusage}

## License
${userObj.projectlicense}

## Contributors / Credits
${userObj.projectcontributors}

## Tests
${userObj.projecttests}

## Username and photo
${userObj.username}
![Image of Github user](${userObj.githubIcon})

## Email
${userObj.email}

`;
}

module.exports = generateMarkdown;
