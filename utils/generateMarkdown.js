//https://guides.github.com/features/mastering-markdown/
//(shields.io)

function generateMarkdown(userObj) {
  return `
# ${userObj.username}
![Image of Github user](${userObj.githubIcon})

# ${userObj.projectname} 

# ${userObj.projectdescription}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## ${userObj.projectinstallation}

## ${userObj.projectusage}

## ${userObj.projectcredits}

## ${userObj.projectlicense}

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)

---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.


## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


## Contributing

If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them.

`;
}

module.exports = generateMarkdown;
