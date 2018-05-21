const funcs = require('../basic-javascript/project-1.js');



// write your tests here

//multiplybyTen
it('Testing the test', () => {});

it('should multiply by ten', () => {
  //arrange
  const expected = 30;
  const multiplyby10 = funcs.multiplyByTen;
  
  //act
  const product = multiplyby10(3);

  //assert
  expect(product).toBe(expected);
});


//subtractFive
it('Should subtract five', () => {
  //long version for reference
  // const expected = 25;
  // const subtractFive = funcs.subtractFive

  // const subtraction = subtractFive(30);

  // expect(subtraction).toBe(expected);

  expect(funcs.subtractFive(30)).toBe(25)
});

//areSameLength

it('Should be same length', () => {
expect(funcs.areSameLength('a', 'b')).toBeTruthy()
expect(funcs.areSameLength('a', 'bcd')).toBeFalsy()
})

