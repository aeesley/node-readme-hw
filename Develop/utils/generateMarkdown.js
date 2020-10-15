// function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title: ${data.title}

  # Project Description: 
  
  ${data.description}

  # Installation Instructions: 
  
  ${data.installation}

  # Usage Instructions: 
  
  ${data.usage}

  # Contribution Guidelines: 
  
  ${data.contribution}

  # License: 
  
  ${data.license}

  # Sources: 
  
  ${data.sources}

  # Author: 
  
  ${data.author}

  # Github Username: 
  
  ${data.username}

  # Github Repo Link: 
  
  ${data.repo}
`;
}



module.exports = generateMarkdown;
