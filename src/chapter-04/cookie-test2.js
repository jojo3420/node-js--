const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookie = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});


const server = http.createServer((req, res) => {
  const cookies = parseCookie(req.headers.cookie);
  if (req.url.startsWith('/login')) {
    const { query } = url.parse(req.url);
    const { name } = qs.parse(query);
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 5);

    // TypeError [ERR_INVALID_CHAR]: Invalid character in header content ["Set-Cookie"]
    // 에러 발생하시는 분은 Expires 앞에 줄바꿈을 제거해주세요. 줄바꿈 문자가 들어가면 안 됩니다.
   res.writeHead(302, {
      Location:'/',
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toLocaleString()}; HttpOnly; Path=/`,
    });
    res.end();

  } else if (cookies.name) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(`${cookies.name}님 안녕하세요`);
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
