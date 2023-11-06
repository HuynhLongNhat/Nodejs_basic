const http = require("http");

const hostname = "localhost ";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World! Hoi dan it voi Eric");
});

server.listen(port, hostname, () => {
  console.log(`Web server running at http://${hostname}:${port}/`);
});
