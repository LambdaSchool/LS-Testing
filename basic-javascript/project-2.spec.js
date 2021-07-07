const funcs = require('./project-2');

describe('project-2', () => { 
    describe('getBiggest', () => {
        it('should return the larger of two numbers', () => {
           expect(funcs.getBiggest(1, 9)).toBe(9); 
        })
        it('works with decimals', () => {
            expect(funcs.getBiggest(1.22, 4.22)).toBe(4.22);
        })
    });
    describe('greeting', () => {
        it('should return the proper greeting',() => {
            expect(funcs.greeting('German')).toBe('Guten Tag!');
            expect(funcs.greeting('Spanish')).toBe('Hola!');
        })
        it('should return hello if undefined or anything besides Spanish or German', () => {
            expect(funcs.greeting('English')).toBe('Hello!');
            expect(funcs.greeting('sdfgdfg')).toBe('Hello!');
            expect(funcs.greeting()).toBe('Hello!');                 
        })
    });
    describe('isTenOrFive', () => {
        it('should be true if 10 or 5 is entered', () => {
            expect(funcs.isTenOrFive(10)).toBe(true);
            expect(funcs.isTenOrFive(5)).toBe(true);
            expect(funcs.isTenOrFive(1)).toBe(false);
            expect(funcs.isTenOrFive(100)).toBe(false);
        })
    });
    describe('isInRange', () => {
        it('should accept a number between 20 and 50', () => {
            expect(funcs.isInRange(10)).toBe(false);
            expect(funcs.isInRange(53)).toBe(false);
            expect(funcs.isInRange(42)).toBe(true);
        })
    });
    describe('isInteger', () => {
        it('returns true if num is an integer', () => {
            expect(funcs.isInteger(10.234)).toBe(false);
            expect(funcs.isInteger(10)).toBe(true);
        })
    });
    describe('fizzBuzz', () => { 
        it('should return num if not divisible by 3 or 5', () => {
            expect(funcs.fizzBuzz(1)).toBe(1);
        })
        it('should return fizz if divisible by 3', () => {
            expect(funcs.fizzBuzz(3)).toBe('fizz');
        })
        it('should return buzz if divisible by 5', () => {
            expect(funcs.fizzBuzz(5)).toBe('buzz');
        })
        it('should return fizzbuzz if divisible by 3 and 5', () => {
            expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
        })
    });
    describe('isPrime', () => {
        it('should be true if the number is prime', () => {
            expect(funcs.isPrime(2)).toBe(true);
            expect(funcs.isPrime(23)).toBe(true);
            expect(funcs.isPrime(9349535)).toBe(false);
        })
    });
    describe('returnFirst', () => {
        it('should return the first index of an array', () => {
            expect(funcs.returnFirst([1, 2, 3, 4, 5])).toEqual(1);
            expect(funcs.returnFirst([3, 2, 6, 4, 8])).toEqual(3);
        })
        it('should return undefined if an object is given', () => {
            expect(funcs.returnFirst({})).toBe(undefined);
        })
        it('returns the first character in a string', () => {
            expect(funcs.returnFirst('sdfsdf')).toBe('s');
        })
    });
    describe('returnLast', () => {
        it('should return the last index of an array', () => {
            expect(funcs.returnLast([1, 2, 3, 4, 5])).toEqual(5);
            expect(funcs.returnLast([3, 2, 6, 4, 8])).toEqual(8);
        })
        it('should return undefined if an object is given', () => {
            expect(funcs.returnLast({})).toBe();
        })
        it('returns the last character in a string', () => {
            expect(funcs.returnLast('sdfsdf')).toBe('f');
        })
    });
    describe('getArrayLength', () => {
        it('should return the length of an array', () => {
            expect(
                funcs.getArrayLength([1, 2, 3, 4, 5])).toEqual(5);
        })
    });
    describe('incrementByOne', () => {
        it('should return an array that has every value in it incremented by one', () => {
            expect(funcs.incrementByOne([1, 2, 3, 4, 5 ])).toEqual([2,3,4,5,6])
        })
    });
    describe('addItemToArray', () => {
        it('should add an item to the end of an array', () => {
            expect(funcs.addItemToArray([1, 4, 234, 23, 54, 46], 99)).toEqual([1, 4, 234, 23, 54, 46, 99]);
        })
    });
    describe('addItemToFront', () => {
        it('should add an item to the front of an array', () => {
            expect(funcs.addItemToFront([1, 4, 234, 23, 54, 46], 99)).toEqual([99, 1, 4, 234, 23, 54, 46]);
        })
    });
    describe('wordsToSentence', () => {
        it('should accept an array of word strings that joins into a sentence string', () => {
            expect(funcs.wordsToSentence(['hello', 'world'])).toBe('hello world');
        })
    });
    describe('contains', () => {
        it('is true if the array contains the item', () => {
            expect(funcs.contains([1, 2, 3, 4, 5], 5)).toBe(true);
            expect(funcs.contains([1, 2, 3, 4, 5], 9)).toBe(false);
        })
    });
    describe('addNumbers', () => {
        it('should return the sum of an array of numbers', () => {
            expect(funcs.addNumbers([1, 2, 3, 4, 5])).toEqual(15);
        })
    });
    describe('averageTestScores', () => {
        it('should return the average of an array of test scores', () => {
            expect(funcs.averageTestScore([67, 98, 74, 88, 83])).toEqual(82);
        })
    });
    describe('largestNumber', () => {
        it('should return the largest number in an array of numbers', () => {
            expect(funcs.largestNumber([1, 2, 3, 4, 5])).toEqual(5);
        })
    });
});