const { readFile, writeFile } = require("fs");

console.log("start")
//takes a callbackfunction as second parameter
readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return null;
  }
  //getting text from both text files
  const first = result;
  readFile("./content/second.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return null;
    }
    const second = result;
    writeFile("./content/result-async.txt", `Here is the result : ${first}, ${second}`, (err, result) =>{
        if(err) {
            console.log(err)
            return;
        }
        console.log("done with this task")
    })
  });
});
console.log("starting next task")
