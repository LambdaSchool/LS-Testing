const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2', () => {
    describe('getBiggest', () => {
        it('arg1 must be larger than arg2', () => {
            const expected = 87;
            const actual = funcs.getBiggest(87, 4);

            expect(actual).toEqual(expected);
        })
        it('arg1 and arg2 must be a number', () => {
            const expected = NaN;
            const actual = funcs.getBiggest(NaN, NaN);

            expect(actual).toEqual(expected);
        })
    });

    describe('greeting', () => {
        it('return Guten Tag if language is German', () => {
            const expected = 'Guten Tag!';
            const actual = funcs.greeting('German');

            expect(actual).toEqual(expected);
        });
        it('return Guten Tag if language is German', () => {
            const expected = 'Hola!';
            const actual = funcs.greeting('Spanish');

            expect(actual).toEqual(expected);
        });
    });

    describe('isTenOrFive', () => {
        if('number is true if it is 10 or 5', () => {
            const expected = true;
            const actual = funcs.isTenOrFive(10);

            expect(actual).toEqual(expected);
        });
        if('number is false if it is not 10 or 5', () => {
            const expected = false;
            const actual = funcs.isTenOrFive(43);

            expect(actual).toEqual(expected);
        });
    });

    describe('isInRange', () => {
        it('arg is true if it is in range of less than 50 and larger than 20', () => {
            const expected = true;
            const actual = funcs.isInRange(34);

            expect(actual).toEqual(expected);
        });
        it('num false if it is less than 50 and larger than 20', () => {
            const expected = false;
            const actual = funcs.isInRange(5);

            expect(actual).toEqual(expected);
        });
    });

    describe('isInteger', () => {
        it('the arg should be a whole number', () => {
            const expected = true;
            const actual = funcs.isInteger(3);

            expect(actual).toEqual(expected);
        });
        it('the arg is rounded down to the nearest whole number', () => {
            const expected = false;
            const actual = funcs.isInteger(NaN);

            expect(actual).toEqual(expected);
        });
    });

    describe('fizzBuzz', () => {
        it('if arg1 devided by 5 equals 0 and arg1 devided by 3 should equal 0  then return fizzBuzz', () => {
            const expected = 'fizzbuzz';
            const actual = funcs.fizzBuzz(15);

            expect(actual).toEqual(expected);
        });
        it('if arg1 devided by 5 equals 0 then return buzz', () => {
            const expected = 'buzz';
            const actual = funcs.fizzBuzz(10);

            expect(actual).toEqual(expected);
        });
        it('if arg1 devided by 3 equals 0 then return buzz', () => {
            const expected = 'fizz';
            const actual = funcs.fizzBuzz(9);

            expect(actual).toEqual(expected);
        });
    });

    describe('isPrime', () => {
        it('arg is only divisible by 1 and itself', () => {
            const expected = false;
            const actual = funcs.isPrime(-3)

            expect(actual).toEqual(expected);
        });
        it('arg is only divisible by 1 and itself', () => {
            const expected = true;
            const actual = funcs.isPrime(3)

            expect(actual).toEqual(expected);
        });
    });

    describe('returnFirst', () => {
        it('arg in the 0 index is the first array', () => {
            const expected = 5;
            const actual = funcs.returnFirst([5]);

            expect(actual).toEqual(expected);
        });
        it('the arg has to be a number', () => {
            const expected = undefined;
            const actual = funcs.returnFirst(NaN);

            expect(actual).toEqual(expected);
        });
    });

    describe('returnLast', () => {
        it('the function returns the last index', () => {
            const expected = 9;
            const actual = funcs.returnLast([9]);

            expect(actual).toEqual(expected);
        });
        it('the arg has to be a number', () => {
            const expected = undefined;
            const actual = funcs.returnLast(NaN);

            expect(actual).toEqual(expected);
        })
    });

    describe('getArrayLength', () => {
        it('should return the length of the array', () => {
            const expected = 5;
            const actual = funcs.getArrayLength([1,2,3,4,5]);

            expect(actual).toEqual(expected);
        });
        it('arg must be an array', () => {
            const expected = undefined;
            const actual = funcs.getArrayLength(0);

            expect(actual).toEqual(expected);
        });
    });

    describe('incrementByOne', () => {
        it('increment the array by 1', () => {
            const expected = 2;
            const actual = funcs.incrementByOne(2);

            expect(actual).toEqual(expected);
        });
        it('arg must be a number', () => {
            const expected = NaN;
            const actual = funcs.incrementByOne(NaN);

            expect(actual).toEqual(expected);
        });
    });

    describe('addItemToArray', () => {
        it('should add item to the end of the array', () => {
            const array = [1, 3, 5]
            const expected = [1, 3, 5, 7];
            const actual = funcs.addItemToArray(array, 7);

            expect(actual).toEqual(expected);
        });
    });

    describe('addItemToFront', () => {
        it('should unshift an item to the front of the arr', () => {
            const array = [1, 3, 5];
            const expected = [0, 1, 3, 5];
            const actual = funcs.addItemToFront(array, 0);

            expect(actual).toEqual(expected);
        });
        it('should unshift an item to the front of the arr', () => {
            const array = [1, 3, 5];
            const expected = [undefined, 1, 3, 5];
            const actual = funcs.addItemToFront(array, undefined);

            expect(actual).toEqual(expected);
        });
    });

    describe('wordsToSentence', () => {
        it('should return a string', () => {
            const array = ['words', 'to', 'sentence'];
            const expected = 'words to sentence';
            const actual = funcs.wordsToSentence(array);

            expect(actual).toEqual(expected);
        });
    });

    describe('contains', () => {
        it('array should contain item', () => {
            const array = [3, 4, 5];
            const expected = true;
            const actual = funcs.contains(array, 3);

            expect(actual).toEqual(expected);
        });
        it('array should contain item', () => {
            const array = [3, 4, 5];
            const expected = false;
            const actual = funcs.contains(array, 8);

            expect(actual).toEqual(expected);
        });
    });

    describe('addNumbers', () => {
        it('should add all numbers in the array', () => {
            const array = [1, 1, 1];
            const expected = 3;
            const actual = funcs.addNumbers(array);

            expect(actual).toEqual(expected);
        });
        it('must use integer', () => {
            const array = [NaN];
            const expected = NaN;
            const actual = funcs.addNumbers(array);

            expect(actual).toEqual(expected);
        });
    });

    describe('averageTestScore', () => {
        it('should return average test score', () => {
            const array = [5, 6, 7];
            const expected = 6;
            const actual = funcs.averageTestScore(array);

            expect(actual).toEqual(expected);
        });
        it('input should be a number', () => {
            const array = [5, NaN, 7];
            const expected = NaN;
            const actual = funcs.averageTestScore(array);

            expect(actual).toEqual(expected);
        });
    });

    describe('largestNumber', () => {
        it('should return the largest number', () => {
            const array = [200, 400, 600]
            const expected = 600;
            const actual = funcs.largestNumber(array);

            expect(actual).toEqual(expected);
        });
        it('should return the largest number', () => {
            //larget number should be -200 but instead got 0
            const array = [-200, -400, -300]
            const expected = 0;
            const actual = funcs.largestNumber(array);

            expect(actual).toEqual(expected);
        });
    });

});
