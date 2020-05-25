//https://guides.github.com/features/mastering-markdown/
//(shields.io)

function generateMarkdown(userObj) {
  console.log(userObj);
  return `
# USERNAME
${userObj.username}
![Image of Github user](${userObj.githubIcon})

# PROJECT NAME
${userObj.projectname} 

# DESCRIPTION
${userObj.projectdescription}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)

## INSTALLATION
${userObj.projectinstallation}

## USAGE
${userObj.projectusage}

## CREDITS
${userObj.projectcredits}

## LICENSE
${userObj.projectlicense}

If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)

---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.


## Badges

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) 




## Contributing

The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them.

`;
}

module.exports = generateMarkdown;
