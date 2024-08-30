const _ = require('lodash');

function capitalizeWords(inputArray) {
  return _.map(inputArray, _.capitalize);
}

function getEvenNumbers(numbers) {
  return _.filter(numbers, (num) => num % 2 === 0);
}

module.exports = { capitalizeWords, getEvenNumbers };
