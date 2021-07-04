const helpers = require('./project-1');

// start testing!
describe('project-1', () => {
    describe('multiplyByTen', () => {
        if ('returns NaN when given a non numeric value', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('two')).toBeNaN();
            expect(helpers.multiplyByTen(false)).toEqual(0);
            expect(helpers.multiplyByTen(true)).toEqual(10);
        })
            it('should return the given number multiplied be 10', () => {
                //arrange
                const expected = 40;
                //act
                const actual = helpers.multiplyByTen(4, 10);
                //assert
                expect(actual).toEqual(expected);
                expect(helpers.multiplyByTen(2)).toBe(20)
                expect(helpers.multiplyByTen(-2)).toBe(-20)
                expect(helpers.multiplyByTen(0)).toBe(0)
            });
    })

    describe('substactFive', () => {
        it('should substract five from a given number', () => {
            const expected = 13;
            const actual = helpers.subtractFive(18);
            expect(actual).toEqual(expected);
            expect(helpers.subtractFive(-5)).toBe(-10)
            expect(helpers.subtractFive(0)).toBe(-5)
        })
        it('should return NaN when given NaN value', () => {
            expect(helpers.subtractFive(NaN)).toBe(NaN);
            expect(helpers.subtractFive('wer')).toBeNaN();

        })
    })
    describe('areSameLength', () => {
        it('should return true if the   lengths of the strings are the same', () => {
            expect(helpers.areSameLength(['sdfj', 'dfs', 'sdfag', 'sfoee'], 'four')).toBeTruthy();
            expect(helpers.areSameLength('four', [4, 6, 3432, 656])).toBeTruthy()
        })
        it('should return false when given non-string values', () => {
            expect(helpers.areSameLength(NaN, '')).toBe(false);
            expect(helpers.areSameLength('wer', 4)).toBe(false);

        })
    })
    describe('areEqual', () => {
        it('should return true if two values are strictly equivalent', () => {
            expect(helpers.areEqual('four', 'four')).toBeTruthy();
            expect(helpers.areEqual(false, false)).toBeTruthy()
        })
        it('should return false if two values are not strictly equivalent', () => {
            expect(helpers.areEqual(4, '4')).toBeFalsy();
            expect(helpers.areEqual(true, false)).toBeFalsy();

        })
    })
    describe('lessThanNinety', () => {
        it('should return true if the given number is less than 90', () => {
            expect(helpers.lessThanNinety(1)).toBeTruthy();
            expect(helpers.lessThanNinety(0)).toBeTruthy()
        })
        it('should return false the given number is NaN or more than 90', () => {
            expect(helpers.lessThanNinety('4oo')).toBeFalsy();
            expect(helpers.lessThanNinety(90)).toBeFalsy();

        })
    })
    describe('greaterThanFifty', () => {
        it('should return true if the given number is greater than 50', () => {
            expect(helpers.greaterThanFifty(51)).toBeTruthy();
            expect(helpers.greaterThanFifty(100)).toBeTruthy()
        })
        it('should return false the given number is NaN or less than 50', () => {
            expect(helpers.greaterThanFifty('4oo')).toBeFalsy();
            expect(helpers.greaterThanFifty(0)).toBeFalsy();

        })
    })
    describe('add', () => {
        it('should return correct sum of two given numbers', () => {
            expect(helpers.add(51, -2)).toBe(49);
            expect(helpers.add(true, true)).toBe(2)
        })
        it('should return NaN if a value is undefined', () => {
            expect(helpers.add(undefined, undefined)).toBeNaN();
            expect(helpers.add(undefined, 2)).toBeNaN();

        })
    })
    describe('subtract', () => {
        it('should return the correct difference of two given numbers', () => {
            expect(helpers.subtract(51, -2)).toBe(53);
            expect(helpers.subtract(true, true)).toBe(0)
        })
        it('should return NaN if a value is undefined', () => {
            expect(helpers.subtract(undefined, undefined)).toBeNaN();
            expect(helpers.subtract(undefined, 2)).toBeNaN();

        })
    })
    describe('divide', () => {
        it('should return the correct quotient of two given numbers', () => {
            expect(helpers.divide(52, -2)).toBe(-26);
            expect(helpers.divide(45, 9)).toBe(5)
        })
        it('should return NaN if a value is non-numeric', () => {
            expect(helpers.divide(undefined, undefined)).toBeNaN();
            expect(helpers.divide('undefined', 2)).toBeNaN();

        })
    })
    describe('multiply', () => {
        it('should return the correct product of two given numbers', () => {
            expect(helpers.multiply(-2, -2)).toBe(4);
            expect(helpers.multiply(-1, 9)).toBe(-9)
        })
        it('should return NaN if a value is non-numeric', () => {
            expect(helpers.multiply(true, undefined)).toBeNaN();
            expect(helpers.multiply('undefined', 2)).toBeNaN();

        })
    })
    describe('getRemainder', () => {
        it('should return the correct remainder of two given numbers', () => {
            expect(helpers.getRemainder(25, 5)).toBe(0);
            expect(helpers.getRemainder(9, 4)).toBe(1)
        })
        it('should return NaN if a value is non-numeric', () => {
            expect(helpers.getRemainder(true, undefined)).toBeNaN();
            expect(helpers.getRemainder('undefined', 2)).toBeNaN();

        })
    })

    describe('isEven', () => {
        it('should return true for even numbers', () => {
            expect(helpers.isEven(4)).toBeTruthy();
            expect(helpers.isEven(0)).toBeTruthy();
        })
        it('should return false for odd numbers', () => {
            expect(helpers.isEven(3)).toBeFalsy();
            expect(helpers.isEven(-1)).toBeFalsy();
        })
    })
    describe('isOdd', () => {
        it('should return true for odd numbers', () => {
            expect(helpers.isOdd(3)).toBeTruthy();
            expect(helpers.isOdd(-1)).toBeTruthy();
        })
        it('should return false for even numbers', () => {
            expect(helpers.isOdd(4)).toBeFalsy();
            expect(helpers.isOdd(0)).toBeFalsy();
        })
    })
    describe('square', () => {
        it('should return the correct square number', () => {
            expect(helpers.square(3)).toBe(9);
            expect(helpers.square(-1)).toBe(1);
        })
        it('should return Nan when a value is undefined', () => {
            expect(helpers.square(undefined)).toBeNaN();
        })
    })
    describe('cube', () => {
        it('should return the correct cube number', () => {
            expect(helpers.cube(3)).toBe(27);
            expect(helpers.cube(-1)).toBe(-1);
        })
        it('should return Nan when a value is undefined', () => {
            expect(helpers.cube(undefined)).toBeNaN();
        })
    })
    describe('raiseToPower', () => {
        it('should return the correct raised To Power(exponenet) number(num)', () => {
            expect(helpers.raiseToPower(3, 3)).toBe(27);
            expect(helpers.raiseToPower(-1, 2)).toBe(1);
        })
        it('should return Nan when a value is undefined or non-numeric', () => {
            expect(helpers.raiseToPower(undefined)).toBeNaN();
            expect(helpers.raiseToPower('undefined')).toBeNaN();
        })
    })
    describe('roundNumber', () => {
        it('should return number rounded to the nearest integer', () => {
            expect(helpers.roundNumber(3.3)).toBe(3);
            expect(helpers.roundNumber(-1.8)).toBe(-2);
        })
        it('should return Nan when a value is undefined or non-numeric', () => {
            expect(helpers.roundNumber(undefined)).toBeNaN();
            expect(helpers.roundNumber('undefined')).toBeNaN();
        })
    })
    describe('roundUp', () => {
        it('should return number rounded up to the nearest integer', () => {
            expect(helpers.roundUp(3.3)).toBe(4);
            expect(helpers.roundUp(-1.8)).toBe(-1);
        })
        it('should return Nan when a value is undefined or non-numeric', () => {
            expect(helpers.roundUp(undefined)).toBeNaN();
            expect(helpers.roundUp('undefined')).toBeNaN();
        })
    })
    describe('addExclamationPoint', () => {
        it('should add an exclamation point to a given string', () => {
            expect(helpers.addExclamationPoint('abc')).toBe('abc!');
            expect(helpers.addExclamationPoint(-1.8)).toBe('-1.8!');
            expect(helpers.addExclamationPoint('hi')).toBe('hi!');
        })
    })
    describe('combineNames', () => {
        it('should combine two strings', () => {
            expect(helpers.combineNames('abc', 'fig')).toBe('abc fig');
            expect(helpers.combineNames(-1.8, 6)).toBe('-1.8 6');
            expect(helpers.combineNames("-1.8", 6)).toBe('-1.8 6');
        })
    })
    describe('getGreeting', () => {
        it('should take a name and combine it with a given string', () => {
            expect(helpers.getGreeting('abc')).toBe('Hello abc!');
            expect(helpers.getGreeting(6)).toBe('Hello 6!');
            expect(helpers.getGreeting(true)).toBe('Hello true!');
        })
    })
    describe('getRectangleArea', () => {
        it('should return an area of a rectangle with given length and width', () => {
            expect(helpers.getRectangleArea(5, 4)).toBe(20);
            expect(helpers.getRectangleArea(6, 1)).toBe(6);
            expect(helpers.getRectangleArea(0.2, 2)).toBe(0.4);
        })
        it('should return NaN if a value is non-numeric', () => {
            expect(helpers.getRectangleArea([2, 7], 2)).toBeNaN();
            expect(helpers.getRectangleArea(null, undefined)).toBeNaN();
        })
    })
    describe('getTriangleArea', () => {
        it('should return an area of a triangle with given base and height', () => {
            expect(helpers.getTriangleArea(5, 4)).toBe(10);
            expect(helpers.getTriangleArea(6, 1)).toBe(3);
            expect(helpers.getTriangleArea(0.2, 2)).toBe(0.2);
        })
        it('should return NaN if a value is non-numeric', () => {
            expect(helpers.getTriangleArea([2, 7], 2)).toBeNaN();
            expect(helpers.getTriangleArea(null, undefined)).toBeNaN();
        })
    })
    describe('getCircleArea', () => {
        it('should return an area of a circle with a given radius', () => {
            expect(helpers.getCircleArea(5)).toBe(78.53981633974483);
            expect(helpers.getCircleArea(2.2)).toBe(15.205308443374602);
            expect(helpers.getCircleArea(1)).toBe(3.141592653589793);
        })
        it('should return NaN if a value is non-numeric', () => {
            expect(helpers.getCircleArea([2, 7])).toBeNaN();
            expect(helpers.getCircleArea('dv')).toBeNaN();
        })
    })
    describe('getRectangularPrismVolume', () => {
        it('should return volume of a prism with a given width, height, length', () => {
            expect(helpers.getRectangularPrismVolume(5, 5, 4)).toBe(100);
            expect(helpers.getRectangularPrismVolume(2.2, 1, 2)).toBe(4.4);
            expect(helpers.getRectangularPrismVolume(-3, 4, 2)).toBe(-24);
        })
        it('should return NaN if a value is non-numeric', () => {
            expect(helpers.getRectangularPrismVolume([2, 7], '3', 1)).toBeNaN();
            expect(helpers.getRectangularPrismVolume('dv', 5, 1)).toBeNaN();
        })
    })
})