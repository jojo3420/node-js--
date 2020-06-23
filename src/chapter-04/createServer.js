const http = require('http');
const port = 4000;

const server = http.createServer((req, res) => {
  console.dir('req:'+ req + ' res:' + res);
  res.write('<h1>hello world</h1>');
  res.end('<p>hello server</p>');
});


// server.listen(port, '127.0.0.1', () => {
//   console.log('server is running.. listen port is ' + port);
// });

server.listen(port);
server.on('listening', () => {
  console.log(' server is listening by port is ', port);
});
server.on('error', error => {
  console.error(error);
});
