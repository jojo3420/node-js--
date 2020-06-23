const fs = require('fs');


// 동기 읽기
fs.readFile('../resources/READ_ME.txt', {}, (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});


// 동기 읽기
try {
  const buffer = fs.readFileSync('../resources/READ_ME.txt',{});
  console.log(buffer);
  console.log(buffer.toString());
} catch (e) {
  console.error(e);
}

