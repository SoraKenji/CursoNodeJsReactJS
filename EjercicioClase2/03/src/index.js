import * as fs from 'fs';
import * as readline from 'readline'; 

let content = '';
const lineReader = readline.createInterface({
    input: fs.createReadStream(process.argv[2]),
});
lineReader.on('line', (line) => {
    content += line;
    console.log('Line from file:', line);
});

lineReader.on('close', (line) => {
    fs.writeFile(process.argv[3], content, (err) => {
        if (err) {
            throw err;
        }
        console.log("guardado");
    });
});