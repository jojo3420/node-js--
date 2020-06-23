
// stream 으로 파일을 읽고 그스트럼을 전달 받아 쓰기를 진행하는 것
// 스트림 끼리 연결하는것이라고 하여 "파이핑 한다" 하고 한다

// read-me-original.txt 을 스트럼으로 읽어서 스트럼으로 쓰기를 한다.

const fs = require('fs')
const readStream = fs.createReadStream('./read-me-original.txt',
  { highWaterMark: 200});
const writeStream = fs.createWriteStream('./read-me.copy.txt');


// readStream.on('error', error => console.error(error))

// readStream.on('end', () => {
//   console.log('read end.');
//   writeStream.end();
// })

//
// readStream.on('data', chunk => {
//   writeStream.write(chunk);
// })


// 1. 책 에서의 방벙은 pipe() 메서드 사용
// readStream.pipe(writeStream);

// 2.pipe는 스트림 사이에 연결할 수 있습니다.
// 다음 코드는 파일을 읽은 후 gzip 방식으로 압축하는 코드입니다.


const zlib = require('zlib')
const writeStream2 = fs.createWriteStream('./read-me-cp.txt.gz')
const zlibStream = zlib.createGzip()
readStream.pipe(zlibStream).pipe(writeStream);
