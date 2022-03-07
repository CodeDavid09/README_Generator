// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (License !== 'None') {
    return `![GitHub License](https://img.shields.io/badge/license-${License}-blue.svg)`
  }
  return ''
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (License !== 'None') {
    return `\n* [License](#License)\n`
  }
  return '';
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (License !== 'None') {
    return `\n* [License](#License)\n`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ![License](https://img.shields.io/badge/license-${encodeURIComponent(
    data.license
  )}-green.svg) Title: ${data.title}
  
  ${data.name}
  >Deployed Application: ${data.deployment}
  
  ## Table of Contents
  
  * [Project Description](#description)
  * [Installation Details](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)
  
  ## Description
  ***
  > *${data.description}*
## Installation
***
> Instructions: ${data.installation}
>
***
> ${data.usage}
## Contribution
***
> ${data.contribution}
## License
***
> This application is covered under the *${data.license}* license
## Questions
***
>*If you have any questions at all please don't hesitate to review the repo or email me directly*
>
>  [![Generic badge](https://img.shields.io/badge/Github-dodgerblue.svg)](https://github.com/${data.github
    })
[![Generic badge](https://img.shields.io/badge/Email-dodgerblue.svg)](mailto:${data.email
    })
`;
}

module.exports = generateMarkdown;
