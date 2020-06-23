const fs = require('fs')

const writeStream = fs.createWriteStream('./write-stream.txt');

writeStream.on('finish', () => {
  console.log('파일 쓰기 완료!');
});

writeStream.write('데이터1\n');
writeStream.write('data2\n');
writeStream.write('파일쓰기완료');
writeStream.end(); // trigger "finish" event



