const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');


//  개선
// 서버가 사용자 정보를 세션으로 관리하도록 한다.


const parseCookie = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});


const session = {};

const server = http.createServer((req, res) => {
  const cookies = parseCookie(req.headers.cookie);
  if (req.url.startsWith('/login')) {
    const { query } = url.parse(req.url);
    const { name } = qs.parse(query);
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 5);
    const randomInt = +new Date(); // random int
    // save a session
    session[randomInt] = {
      name,
      expires,
    }
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `session=${randomInt};Expires=${expires.toLocaleString()};HttpOnly;Path=/`,
    })
    res.end();
  } else if (cookies.session && session[cookies.session].expires > new Date()) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(`${session[cookies.session].name} 님 안녕하세요`);
  } else {
    // path 가 /login 이거나, 쿠키가 없을 경우
    fs.readFile('./html/login.html', (err, buffer) => {
      if (err) {
        console.error(err);
        return;
      }
      res.end(buffer); // buffer 를 그대로 응답
    });
  }
});

const port = 4000;
server.listen(port, () => console.log('server start...' + port));
