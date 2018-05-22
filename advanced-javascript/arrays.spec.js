const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
	function isFunction(func) {
		it('should be a function', () => {
			expect(typeof func).toBe('function');
		});
	}
	// describe('each', () => {
	// 	it('should be a function', () => {
	// 		const map = arrayFunctions.map;
	// 		expect(typeof map).toBe('function');
	// 	});
	// });
	describe('map', () => {
		it('should be a function', () => {
			const map = arrayFunctions.map;
			expect(typeof map).toBe('function');
			expect(typeof map).not.toBe('object');
			expect(typeof map).not.toBe('array');
		});
	});
	describe('reduce', () => {
		isFunction(arrayFunctions.reduce);

		const elements = [1, 2, 3];
		const memo = elements.shift();
		const cb = (memo, item) => {
			return memo + item;
		};
		const reduce = arrayFunctions.reduce(elements, cb, memo);
		it('Should rerturn expected outcome', () => {
			expect(reduce).toBe(6);
		});
	});
});
