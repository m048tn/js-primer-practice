const fs = require("fs");
const path = require("path");
const assert = require("assert");
const md2html = require("../src/md2html");

it("converts Markdown to HTML (GFM=false)", () => {
  const sample = fs.readFileSync(
    path.resolve(__dirname, "./fixtures/sample.md"),
    { encoding: "utf-8" }
  );
  const expected = fs.readFileSync(
    path.resolve(__dirname, "./fixtures/expected.html"),
    { encoding: "utf-8" }
  );
  assert.strictEqual(md2html(sample, { gfm: false }), expected);
});

it("converts Markdown to HTML (GFM=true)", () => {
  const sample = fs.readFileSync(
    path.resolve(__dirname, "./fixtures/sample.md"),
    { encoding: "utf-8" }
  );
  const expected = fs.readFileSync(
    path.resolve(__dirname, "./fixtures/expected-gfm.html"),
    { encoding: "utf-8" }
  );
  assert.strictEqual(md2html(sample, { gfm: true }), expected);
});
