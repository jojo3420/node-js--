const fs = require('fs');

//스트림에서는 주로 data, error, end event정도 사용한다.

const readStream = fs.createReadStream(
  './stream-test.txt',
  // buffer size : 기본값은 64kb , 설정은 16B
  { highWaterMark: 16});

const list = [];
readStream.on('data', chunk => {
  // console.log(`chunk: ${chunk}`);
  if (chunk) {
    list.push(chunk);
  }
  console.log('list.length:', list.length);

});

readStream.on('error', err => console.error(err));
readStream.on('end', () => {
  console.log('end1: ', Buffer.concat(list).toString())
  // console.log('end2: ', list.concat().toString())
});


