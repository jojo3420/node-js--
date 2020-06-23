const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
  fs.readFile('./html/server2.html', (err, buffer) => {
    if (err) {
      console.log(err);
      res.end('<div>server error' + err.toString() + "</div>");
    }
    res.end(buffer); // buffer 를 그대로 응답
  });
});
const port = 4000;
server.listen(port, () => {
  console.log('server listening ' + port);
});

