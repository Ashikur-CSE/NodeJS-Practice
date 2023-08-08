const http = require("http");
const fs = require("fs");
const port = 3000;
const hostname = "127.0.0.1";

// const Myserver =http.createServer((req, res,)=>{
//     const handleReadFile = (statusCode, fileLocation)=>{
//             fs.readFile(fileLocation, (err, data)=>{
//             res.writeHead(statusCode, {"Content-Type": "text/html"});
//             res.write(data);
//             res.end();

//     })};
    
// if (req.url=== "/"){
//     handleReadFile(200,"./view/index.html");
//     }
// else if (req.url==="/about"){
//     handleReadFile(200,"./view/about.html");
//     }
// else if (req.url==="/contact"){
//     handleReadFile(200,"./view/contact.html");
//     }
//     else{
//         handleReadFile(404,"./view/error.html");
//     }
// });

//non -functioned
const Myserver = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./view/home.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("./view/about.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/contact") {
    fs.readFile("./view/contact.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile("./view/error.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});

Myserver.listen(port, hostname, () => {
  console.log(`This server is running in http://${hostname}:${port}`);
});
