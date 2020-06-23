const fs = require('fs');

// 비동기
fs.writeFile('./write-file.txt', 'hello world.', {}, (error) => {
  if (error) throw error;

  fs.readFile('./write-file.txt', ((err, buffer) => {
    if (err) throw err;
    console.log(buffer.toString());
  }))
});


// 동기 읽
try {
  // SAVE file
  fs.writeFileSync('./sync-write-file.txt', 'good thing');

  // READ file
  const buffer = fs.readFileSync('./sync-write-file.txt', {});
  console.log(buffer.toString());
} catch (e) {
  console.error(e);
}





