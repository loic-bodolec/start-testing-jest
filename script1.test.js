const addNums = require('./script1');

it('Function that adds two numbers and return sum', () => {
    expect(addNums(4, 5)).toBe(9);
    expect(addNums(4, 5)).not.toBe(10);
});