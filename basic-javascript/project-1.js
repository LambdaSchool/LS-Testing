/* eslint-disable arrow-parens */
const getType = require('jest-get-type')


/**
 * Accepts a number, returns that number multiplied by 10
 * @param {number} num 
 * @returns {number} multiplied by 10
 */

const multiplyByTen = num => {
  if (typeof num !== 'number') {
    return null
  } else {
    return num * 10;
  }
};

const subtractFive = num => {
  return (typeof num !== 'number' ? null : num - 5);
};

const areSameLength = (str1, str2) => {
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  if (typeof x !== 'number' && typeof y !== 'number') {
    return null
  } else {
    return x === y;
  }
};

const lessThanNinety = num => {
  if (typeof num !== 'number') {
    return null
  }
  
  if (num < 90) {
    return true;
  }
  return false;
};

const greaterThanFifty = num => {
  if (typeof num !== 'number') {
    return null
  }

  if (num > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  if (typeof x !== 'number' && typeof y !== 'number') {
    return null
  }
  return x + y;
};

const subtract = (x, y) => {
  if (typeof x !== 'number' && typeof y !== 'number') {
    return null
  }
  return x - y;
};

const divide = (x, y) => {
  if (typeof x !== 'number' && typeof y !== 'number') {
    return null
  }
  return x / y;
};

const multiply = (x, y) => {
  if (typeof x !== 'number' && typeof y !== 'number') {
    return null
  }
  return x * y;
};

const getRemainder = (x, y) => {
  if (typeof x !== 'number' && typeof y !== 'number') {
    return null
  }
  return x % y;
};

const isEven = num => {
  if (typeof num !== 'number') {
    return null
  }
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const isOdd = num => {
  if (typeof num !== 'number') {
    return null
  }
  if (num % 2 !== 0) {
    return true;
  }
  return false;
};

const square = num => {
  if (typeof num !== 'number') {
    return null
  }
  return num * num;
};

const cube = num => {
  if (typeof num !== 'number') {
    return null
  }
  return num * num * num;
};

const raiseToPower = (num, exponent) => {
  if (typeof num !== 'number' && typeof exponent !== 'number') {
    return null
  }
  return num ** exponent;
};

const roundNumber = num => {
  if (typeof num !== 'number') {
    return null
  }
  return Math.round(num);
};

const roundUp = num => {
  if (typeof num !== 'number') {
    return null
  }
  return Math.ceil(num);
};

const addExclamationPoint = str => {
  if (typeof str !== 'string') {
    return null
  }
  return (str += '!');
};

const combineNames = (firstName, lastName) => {
  if (typeof firstName !== 'string' && typeof lastName !== 'string') {
    return null
  }
  return `${firstName} ${lastName}`;
};

const getGreeting = name => {
  if (typeof name !== 'string') {
    return null
  }
  return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
  if (typeof length !== 'number' && typeof width !== 'number') {
    return null
  }
  return length * width;
};

const getTriangleArea = (base, height) => {
  if (typeof base !== 'number' && typeof height !== 'number') {
    return null
  }
  return 0.5 * base * height;
};

const getCircleArea = radius => {
  if (typeof radius !== 'number') {
    return null
  }
  return Math.PI * radius * radius;
};

const getRectangularPrismVolume = (length, width, height) => {
  if (typeof length !== 'number' && typeof width !== 'number' && typeof height !== 'number') {
    return null
  }
  return width * height * length;
};

module.exports = {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
};
