function generateMarkdown(data) {
  let title = data.title;
  let description = data.description;
  let contents = data.contents;
  let installation = data.installation;
  let usage = data.usage;
  let license = data.license;
  let contributing = data.contributing;
  let tests = data.tests;

  return `
# ${data.title}

`;
}

module.exports = generateMarkdown;
