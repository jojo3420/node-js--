const { odd, even} = require('src/chapter-02/vars');
const isOddByNumber = require('src/chapter-02/func');



console.log('10은 짝수입니까?', isOddByNumber(10) === even);
console.log('9는 홀수입니까?', isOddByNumber(9) === odd);


