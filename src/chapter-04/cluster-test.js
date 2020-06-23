const cluster = require('cluster');
const os = require('os');
const http = require('http');

const port = 4000;


if (cluster.isMaster) {
  // CPU 갯수 만큼 워커 생성
  console.log('master process id: ', process.pid);
  console.log('코어 cnt:' + os.cpus().length);
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
  // worker 종료 이벤트
  cluster.on('exit', ((worker, code, signal) => {
    console.log(`${worker.process.pid} 번 워커가 종료 되 었습니다.`);

    // 워커 프로세스 종료 될 경우 새로운 워커 프로세스 생성
    cluster.fork();
  }));

} else {
  // 워커들 포트에서 대기
  const server = http.createServer((req, res) => {
    res.write('<h1>hello Node</h1>');
    res.end('<p>hello cluster</p>');

    // 워커 종료 시키기
    setTimeout(() => {
      process.exit(1);
    }, 1000);

  });
  server.listen(port);

  // server.listen(port, () => {
  //   console.log('server is listening port: ', port);
  // });
  console.log(`${process.pid}번 워커 실행.`)

}




