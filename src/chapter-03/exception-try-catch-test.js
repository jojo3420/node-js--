const fs = require('fs');

let count = 0;
const intervalId = setInterval(() => {
  count++;
  try {
    throw new Error('서버 파괴 작전!'+  count);
  } catch(e) {
    console.error(e);
    if (count === 5) {
      clearInterval(intervalId);
    }
  }
}, 1000);



// node api 자체에서 try catch
let n = 0;
const PID = setInterval(() => {
  fs.unlink('./abc.js', err => {
    n++;
    if (err) {
      console.error(err + ' ' + n);
    }
    if (n === 10) {
      clearInterval(PID);
    }
  });
}, 1000);
