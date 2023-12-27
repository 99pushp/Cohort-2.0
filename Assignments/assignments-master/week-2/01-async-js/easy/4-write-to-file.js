const fs = require('fs');

const dataToWrite = 'Hello, this is the content to be written to the file.';

// Specify the file path and name
const filePath = '/home/pushp/Documents/Cohort 2.0/Assignments/assignments-master/week-2/01-async-js/easy/empty.txt';

// Use fs.writeFile to write data to the file
fs.writeFile(filePath, dataToWrite, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Data has been written to the file successfully.');
  }
});

console.log("abc");