//can also be written as const fs = require("fs") ==> fs.readFileSync
const { readFileSync, writeFileSync } = require("fs");

console.log("start");

//readFileSync is a method, 2 params(path, encoding) encoding is usually utf8
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//created a new file with the text from the second parameter
//if file is existing will overwrite anything that is already there unless you use flag: "a" to append
writeFileSync(
  "./content/result-sync.txt",
  `here is the result ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
