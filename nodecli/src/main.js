const myModule = require("./my-module.js");
const commander = require("commander");

commander.parse(process.argv);
const filePath = commander.args[0];
// console.log(process.argv);
console.log(myModule.foo);
console.log(filePath);
