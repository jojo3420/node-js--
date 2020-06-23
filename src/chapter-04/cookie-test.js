const http = require('http');
const port = 4000;

const parseCookie = (cookie = '') => {
  //cookie sample
  // Webstorm-f684b542=d78281f5-fa21-4363-be1f-265e99e5b502; Webstorm-f684b541=4c924e79-fef1-404b-a4f3-c173918a3140
  return cookie
    .split(';')
    .map(v => v.split('='))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});
}


const server = http.createServer((req, res) => {
  console.log('req.headers.cookie: ', req.headers.cookie);
  const cookie = parseCookie(req.headers.cookie);
  console.log(req.url, cookie);
  res.writeHead(200, {'Set-Cookie': 'mycookie=test'});
  res.end('<h1>hello cookie</h1>');
});



server.listen(port, () =>{
  console.log('serer is running...' + port);
});
