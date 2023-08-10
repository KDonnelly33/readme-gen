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
        This project uses the ${license} license.`;
    }
    return licenseSection;
    
    
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  


`;
}

module.exports = generateMarkdown;
