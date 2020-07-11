const licenseBadges = {
  "Apache": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
}

function generateMarkdown(data) {
  let username = data.username;
  let project = data.project;
  let title = data.title;
  let description = data.description;
  let installation = data.installation;
  let usage = data.usage;
  let license = data.license;
  let contributing = data.contributing;
  let tests = data.tests;
  let email = data.email;

  return `
[![Contributors](https://img.shields.io/github/contributors/${username}/${project})](https://github.com/${username}/${project}/graphs/contributors)
${licenseBadges[license]}

## Project Title 
${title}

## Description
${description}

### Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${installation}

## Usage
${usage}

## License
${license} License selected. Click the badge above for further details.

## Contributing
${contributing}

## Tests
${tests}

## Questions
[![Repo Owner Image](https://avatars.githubusercontent.com/${username}?s=100)](mailto:${email}"\n")
Please email questions any questions you may have directly to the repo owner.
`;
}

module.exports = {generateMarkdown: generateMarkdown};
