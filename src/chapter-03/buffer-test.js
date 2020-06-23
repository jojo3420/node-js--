const buffer = Buffer.from('버퍼입니다.');
console.log(`buffer:`, buffer);
console.log(`buffer.lnegth: ${buffer.length}`);
console.log(`buffer.toString(): ${buffer.toString()}`);

const bufferArray = [Buffer.from('공간1'), Buffer.from('공간2'), Buffer.from('띄어쓰기')];
const buffer2 = bufferArray.concat();
console.log(`array.concat().toString(): ${buffer2.toString()}`)

const buffer3 = Buffer.alloc(4);
console.log(`alloc:`, buffer3);
