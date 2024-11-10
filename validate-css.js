// Custom script to validate CSS syntax by Rolle
// https://github.com/stylelint/stylelint/issues/3053
const fs = require('fs');
const path = require('path');

const cssFiles = fs.readdirSync('.').filter(file => file.endsWith('.css'));
let errorFound = false;

cssFiles.forEach(file => {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, index) => {
    // Check if the line ends with a comma and the next line starts with "{"
    const trimmedLine = line.trim();
    const nextLine = lines[index + 1] ? lines[index + 1].trim() : '';
    if (trimmedLine.endsWith(',') && nextLine.startsWith('{')) {
      errorFound = true;
      console.error(`❌ Trailing comma error in file ${file} on line ${index + 1}`);
    }
  });
});

if (!errorFound) {
  console.log('✅ No trailing comma errors found. CSS validation passed.');
  process.exit(0);
} else {
  console.error('❌ CSS validation failed due to trailing commas.');
  process.exit(1);
}
