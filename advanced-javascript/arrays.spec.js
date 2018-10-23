const arrayFunctions = require("./arrays");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe("Arrays", () => {
  const actual = [1, 2, 3];
  describe("each", () => {
    it("should be a function", () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe("function");
      each(actual, e => {
        expect(typeof e === "number").toBe(true);
      });
    });
  });
  describe("reduce", () => {
    it("reduces args by adding them", () => {
      expect(arrayFunctions.reduce(actual, (p, c) => p + c)).toEqual(6);
    });
  });
});
