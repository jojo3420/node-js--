const path = require('path')
const filename = __filename;
const dirname = __dirname;
console.log(`filename: ${filename}`);
console.log(`dirname: ${dirname}`);

console.log(`path.sep: ${path.sep}`);
console.log(`path.delimiter: ${path.delimiter}`);
console.log(`path.dirname(): ${path.dirname(filename)}`);

