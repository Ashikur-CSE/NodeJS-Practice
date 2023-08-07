const path =require('path');
const extensionName =path.extname('ashikur.js');
console.log(extensionName);

const Join = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
console.log(Join);