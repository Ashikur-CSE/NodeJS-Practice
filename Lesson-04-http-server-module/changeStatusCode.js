const http =require('http');
const port = 8080;
const hostname= '127.0.0.1';

const myServer =http.createServer((req, res)=>{
    res.writeHead(202, {"Content-Type": "text/html"});
    res.end("<h1>Your Status Code is: 205 ");
    res.end();
});

myServer.listen(port, hostname, ()=>{
    console.log(`Sarver is running on http://${hostname}:${port}`);
});