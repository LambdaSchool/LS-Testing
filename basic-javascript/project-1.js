/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  if(!num){
    return undefined;
  }
  return num * 10;
};

const subtractFive = num => {
  if(!num){
    return undefined;
  }
  return num - 5;
};

const areSameLength = (str1, str2) => {
  if(!str1 || !str2 || typeof str1 !== 'string' || typeof str2 !== 'string'){
    return null
  }
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  if(!x || !y) {
    return false;
  }
  return x === y;
};

const lessThanNinety = num => {
  if (num < 90) {
    return true;
  } else if (!num){
    return undefined;
  }
  return false;
};

const greaterThanFifty = num => {
  if (num > 50) {
    return true;
  } else if (!num){
    return undefined;
  }
  return false;
};

const add = (x, y) => {
  if(!x || !y || typeof x === undefined || typeof y === undefined){
    return null;
  }
  return x + y;
};

const subtract = (x, y) => {
  if(!x || !y || typeof x === undefined || typeof y === undefined){
    return null;
  }
  return x - y;
};

const divide = (x, y) => {
  if(!x || !y || typeof x === undefined || typeof y === undefined){
    return null;
  }
  return x / y;
};

const multiply = (x, y) => {
  if(!x || !y || typeof x === undefined || typeof y === undefined){
    return null;
  }
  return x * y;
};

const getRemainder = (x, y) => {
  if(!x || !y || typeof x === undefined || typeof y === undefined){
    return null;
  }
  return x % y;
};

const isEven = num => {
  if (num % 2 === 0) {
    return true;
  } else if (!num || typeof num !== Number){
    return null;
  }
  return false;
};

const isOdd = num => {
  if (num % 2 === 0 || typeof num === 'string') {
    return false;
  } else if (!num){
    return null;
  } else {
  return true;
  }
};

const square = num => {
  if(!num || typeof num === 'string'){
    return null;
  }
  return num * num;
};

const cube = num => {
  if(!num || typeof num === 'string'){
    return null;
  }
  return num * num * num;
};

const raiseToPower = (num, exponent) => {
  if(!num || !exponent || typeof num === 'string' || typeof exponent === 'string'){
    return null;
  }
  return num ** exponent;
};

const roundNumber = num => {
  if(!num || typeof num === 'string'){
    return null;
  }
  return Math.round(num);
};

const roundUp = num => {
  if(!num || typeof num === 'string'){
    return null;
  }
  return Math.ceil(num);
};

const addExclamationPoint = str => {
  return (str += '!');
};

const combineNames = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

const getGreeting = name => {
  return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
  return length * width;
};

const getTriangleArea = (base, height) => {
  return 0.5 * base * height;
};

const getCircleArea = radius => {
  return Math.PI * radius * radius;
};

const getRectangularPrismVolume = (length, width, height) => {
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
