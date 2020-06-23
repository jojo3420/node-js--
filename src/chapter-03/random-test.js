let A = 0;
let B = 0;
const limit = 1000000000;

function getRandom() {
  return Math.floor(Math.random() * 2);
}


let number = null;
for (let i = 0; i < limit; i++) {
  number = getRandom();
  // console.log(number);
  if (number === 0) {
    A++;
  } else {
    B++;
  }
}

// const loop = (n) => {
//   if (n < limit) {
//     number = getRandom();
//     if (number === 0) {
//       A++;
//     } else {
//       B++;
//     }
//     loop(++n);
//   }
// }
// loop(0);


console.log(`A: ${A}, B: ${B}`);
console.log(`차이: ${A - B}`);

