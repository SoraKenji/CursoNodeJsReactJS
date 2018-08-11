import * as fs from 'fs';
import * as readline from 'readline'; 

let content = '';
const lineReader = readline.createInterface({
    input: fs.createReadStream(process.argv[2])
});
  
lineReader.on('line', (line) => {
    console.log('Line from file:', line);
});