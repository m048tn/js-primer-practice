const marked = require("marked");

module.exports = (file, cliOptions) => {
  return marked(file, {
    gfm: cliOptions.gfm,
  });
};
