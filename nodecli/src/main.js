const commander = require("commander");
const fs = require("fs");
const md2html = require("./md2html");

commander.option("--gfm", "GFMを有効にする");
commander.parse(process.argv);

const options = commander.opts();
console.log(options);

const filePath = commander.args[0];
console.log(filePath);

const cliOptions = {
  gfm: "false",
  ...options,
};

fs.readFile(filePath, { encoding: "utf-8" }, (err, file) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
    return;
  }
  const html = md2html(file, cliOptions);
  console.log(html);
});
