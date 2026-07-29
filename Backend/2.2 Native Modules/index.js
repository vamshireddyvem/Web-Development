const fs = require('fs');


// fs.writeFile('vamshi.txt', 'Hello, World! this is vamshi', (err) => { 
//   if (err) throw err;
//   console.log('File saved!');
// });

fs.readFile('vamshi.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});