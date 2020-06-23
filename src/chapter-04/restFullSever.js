const http = require('http');
const fs = require('fs');

const users = [
  {id: 1, username: 'park'},
  {id: 2, username: 'nari'},
  {id: 3, username: 'uja'},
];
let id = 4;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      return fs.readFile('./html/rest-front.html', (err, buffer) => {
        if (err) {
          return console.error(err);
        }
        res.end(buffer);
      })
    } else if (req.url === '/about') {
      return fs.readFile('./html/about.html', (err, buffer) => {
        if (err) {
          return console.error(err);
        }
        res.end(buffer);
      });
    } else if (req.url === '/users') {
       return res.end(JSON.stringify(users));
    } else {
      return fs.readFile(`./html/${req.url}`, (err, buffer) => {
        if (err) {
          res.writeHead(404, 'NOT FOUND');
          console.error(err);
          return res.end('<div>NOT FOUND</div>');
        }
        return res.end(buffer);
      });
    }
  } else if (req.method === 'POST') {
    if (req.url === '/users') {
      let body = '';
      req.on('data', data => {
        body+= data;
      });
      return req.on('end', () => {
        console.log('POST body:', body);
        if (body) {
          const { username } = JSON.parse(body);
          // const id = +new Date();
          users.push({ id: id++, username });
          res.writeHead(200);
          res.end('등록 성공');
        }
      });
    }
  } else if (req.method === 'PUT') {
    if (req.url.startsWith('/users/')) {
      const key = req.url.split('/')[2];
      let body = '';
      req.on('data', buffer => {
        body = buffer.toString();
      });
      return req.on('end', () => {
        console.log(`PUT body: ${body}`);
        const newUser = JSON.parse(body);
        const arr = users.filter(user => user.id === newUser.id);
        if (arr && arr.length > 0) {
          arr[0].username = newUser.username;
        }
        return res.end(JSON.stringify(users));
      })
    }

  } else if (req.method === 'DELETE') {
    if (req.url.startsWith('/users/')) {
      const id = parseInt(req.url.split('/')[2]);
      const index = users.findIndex(user => user.id === id);
      users.splice(index, 1);
      return res.end(JSON.stringify(users));
    }
  }

  res.writeHead(404, 'NOT FOUND');
  return res.end('NOT FOUND');
});

server.listen(4000, () => {
  console.log('server is listening...  port: ' + 4000);
})
