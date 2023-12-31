// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseBadge = {
        MIT: 'https://img.shields.io/badge/License-MIT-yellow.svg',
        Apache: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
        GPL: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
        BSD: 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
        None: '',
}
    return licenseBadge[license];
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink = {
        MIT: 'https://opensource.org/licenses/MIT',
        Apache: 'https://opensource.org/licenses/Apache-2.0',
        GPL: 'https://opensource.org/licenses/gpl-license',
        BSD: 'https://opensource.org/licenses/BSD-3-Clause',
        None: '',
    }
    return licenseLink[license];

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseSection = '';
    if (license !== 'None') {
        licenseSection = `## License
This project uses the ${license} license.
For more information, visit ${renderLicenseLink(license)}.`;
    }
    return licenseSection;
    
    
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ![License Badge](${renderLicenseBadge(data.license)})
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please contact me at [email](mailto:${data.email}). You can also visit my [GitHub profile](https://github.com/${data.github}) to view more of my work.

${renderLicenseSection(data.license)}`;
} 

module.exports = generateMarkdown;