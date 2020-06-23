
// uncaught exception 에 대한 처리
process.on('uncaughtException', (error) => {
  console.error(error);
});

setInterval(() => {
  throw new Error(' 서버를 날리자.');
}, 1000);

setInterval(() => {
  throw new Error(' 서버를 다시 날리자.');
}, 1000);
setTimeout(() => console.log('여기는 실행 됩니다.'), 2000);
