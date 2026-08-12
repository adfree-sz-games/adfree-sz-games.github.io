// Create an array to store blocked patterns
var blockedPatterns = [];

// Load the text file containing blocked patterns
fetch('/dev/ad2.txt')
  .then((response) => response.text())
  .then((data) => {
    // Split the text file content into an array of patterns,
    // skipping blank lines (e.g. the trailing newline) so an empty
    // pattern can never match every element on the page.
    blockedPatterns = data
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line !== '');

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
