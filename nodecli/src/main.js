const commander = require("commander");
const fs = require("fs");

commander.parse(process.argv);
const filePath = commander.args[0];
console.log(filePath);

fs.readFile(filePath, { encoding: "utf-8" }, (err, file) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
    return;
  } else {
    console.log(file);
  }
});
