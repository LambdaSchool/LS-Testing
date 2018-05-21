const funcs = require('./project-1');

// write your tests here
describe('Project 1', () => {
    describe('multiplyByTen', () => {
        it('should multiply a number by ten', () => {
            // arrange
            const expected = 50;
            const multiplyByTen = funcs.multiplyByTen;

            // act
            const actual = multiplyByTen(5);

            // assert
            expect(actual).toBe(expected);
        });
    });

    describe('subtractFive', () => {
        it('should subtract a number by five', () => {
            // arrange
            const expected = 0;
            const subtractFive = funcs.subtractFive;

            // act
            const actual = subtractFive(5);

            // assert
            expect(actual).toBe(expected);
        });
    });

    describe('areSameLength', () => {
        it('should return a boolean value', () => {
            // arrange
            const areSameLength = funcs.areSameLength;

            // act
            const actual = areSameLength('are', 'cat');

            // assert
            expect(actual).toBeTruthy();
        });
    });

    describe('areEqual', () => {
        it('should return a boolean value', () => {
            // arrange
            const areEqual = funcs.areEqual;

            // act
            const actual = areEqual(3, 3);

            // assert
            expect(actual).toBeTruthy();
        });
    });

    describe('lessThanNinety', () => {
        it('should return a boolean value', () => {
            // arrange
            const lessThanNinety = funcs.lessThanNinety;

            // act
            const actual = lessThanNinety(30);
            const actual2 = lessThanNinety(300);            

            // assert
            expect(actual).toBeTruthy();
            expect(actual2).toBeFalsy();            
        });
    });
})