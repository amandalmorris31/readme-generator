function generateMarkdown(userObj) {
  console.log(userObj);
  return `

## Badge
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

# PROJECT TITLE
${userObj.projectname} 

# DESCRIPTION
${userObj.projectdescription}

## Table of Contents

* [Badges](#badges)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## INSTALLATION
${userObj.projectinstallation}

## USAGE
${userObj.projectusage}

## CREDITS
${userObj.projectcredits}

## LICENSE
${userObj.projectlicense}

## Contributing

The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

# USERNAME
${userObj.username}
![Image of Github user](${userObj.githubIcon})

`;
}

module.exports = generateMarkdown;
