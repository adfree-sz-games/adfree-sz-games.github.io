// Create an array to store blocked patterns
var blockedPatterns = [];

// Load the text file containing blocked patterns
fetch('https://adfree-sz-games.github.io/dev/.txt')
  .then((response) => response.text())
  .then((data) => {
    // Split the text file content into an array of patterns
    blockedPatterns = data.split('\n');

    // Remove elements matching blocked patterns
    blockedPatterns.forEach((pattern) => {
      var elements = document.querySelectorAll('*');
      elements.forEach((element) => {
        if (
          element.id.includes(pattern) ||
          element.className.includes(pattern)
        ) {
          element.remove();
        }
      });
    });
  })
  .catch((error) => console.error('Error loading the text file: ' + error));
