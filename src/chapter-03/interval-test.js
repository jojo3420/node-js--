
const intervalId = setInterval(() => console.log('interval 1 second'), 1000);
const timelineId = setTimeout(() => console.log('timeline 1.5 second'), 1500);
const timelineId2 = setTimeout(() => console.log('timeline 5 second'), 5000);
const immediateId = setImmediate(() => console.log('immediate'));
// console.time('setTimeoutZero');
setTimeout(()=> console.log('setTimeline 0 second'), 0);
// console.timeEnd('setTimeoutZero');
const immediateId2 = setImmediate(() => console.log('immediate'));

clearImmediate(immediateId2);


setTimeout(() => {
  clearInterval(intervalId);
  clearTimeout(timelineId2);
}, 3500);





