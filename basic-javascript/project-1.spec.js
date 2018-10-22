const helpers = require('./project-1');

// start testing!

describe('project-1.js', () => {

    describe('multiplyByTen()', () => {

        it('should multiply provided number by ten', () => {
            
            const expected = 100;
            
            const actual = helpers.multiplyByTen(10);
            
            expect(actual).toEqual(expected);
        });
        
    })

    describe('subtractFive()', () => {

        it('should subtract provided number by five', () => {
            const expected = 95;
            
            const actual = helpers.subtractFive(100);
            
            expect(actual).toEqual(expected);
        });
    })
    describe('areSameLength()', () => {

        it('should return true of both strings are the same length', () => {
            const expected = true;
            
            const actual = helpers.areSameLength('hello', 'teach');
            
            expect(actual).toEqual(expected);
        });
    })

    describe('areEqual()', () => {

        it('should return true if both variables are deep equal', () => {
            const expected = true;
            const a = 'test123';
            const b = 'test123';
            const actual = helpers.areEqual(a, b);

            expect(actual).toEqual(expected);
        });
    })

    describe('lessThanNinety()', () => {

        it('should return true if number less than 90', () => {
            const expected = true;

            const actual = helpers.lessThanNinety(85);

            expect(actual).toEqual(expected);
        });
        it('should return false if number greater than 90', () => {
            const expected = false;

            const actual = helpers.lessThanNinety(95);

            expect(actual).toEqual(expected);
        });
    })

    describe('greaterThanFifty()', () => {

        it('should return true if number greater than 50', () => {
            const expected = true;

            const actual = helpers.greaterThanFifty(55);

            expect(actual).toEqual(expected);
        });
    })

    describe('add()', () => {

        it('should add together two values', () => {
            const expected = 4;

            const actual = helpers.add(2, 2);

            expect(actual).toEqual(expected);
        })
    })

    describe('subtract()', () => {

        it('should subtract the second value from the first', () => {
            const expected = 3;

            const actual = helpers.subtract(10, 7);

            expect(actual).toEqual(expected);
        })
    })

    describe('divide()', () => {

        it('should divide the first value by the second value', () => {
            const expected = 2;

            const actual = helpers.divide(10, 5);

            expect(actual).toEqual(expected);
        })
    })

    describe('multiply()', () => {

        it('should find the product of two values', () => {
            const expected = 100;

            const actual = helpers.multiply(50, 2);

            expect(actual).toEqual(expected);
        })
    })

    describe('getRemainder()', () => {

        it('should find the remainder of a quotient', () => {
            const expected = 1;

            const actual = helpers.getRemainder(10, 3);

            expect(actual).toEqual(expected);
        })
    })

    describe('isEven()', () => {

        it('should return true if number is even', () => {
            const expected = true;

            const actual = helpers.isEven(100);

            expect(actual).toEqual(expected);
        })
    })

    describe('isOdd()', () => {

        it('should return true if number is odd', () => {
            const expected = true;
            
            const actual = helpers.isOdd(99);

            expect(actual).toEqual(expected);
        })
    })


    
    
});