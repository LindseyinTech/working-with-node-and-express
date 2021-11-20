const http = require("http");

//create server has 2 parameters, first parameter represents request on web browser
//second parameter represents response we are sending back
const server = http.createServer((request, response) => {
  if (request.url === "/") {
    console.log(request);
    response.end("Welcome to our homepage");
  }
  else if (request.url === "/about") {
    response.end("Here is our short mystery");
  } else {
  response.end(
    `<h1>OOps!</h1> <p>We can't seem to find the page that you're looking for</p> <a href="/">Back Home</a>`);
  }
});

//need to say what port we are listening to
server.listen(5000);
