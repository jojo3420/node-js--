const { odd, even } = require('src/chapter-02/vars');

function isOddByNumber (number) {
  if (!number|| isNaN(number)) throw new Error('number is not correct.');
  if (number % 2 === 0) {
    return even;
  }

  return odd;
}

module.exports = isOddByNumber;
