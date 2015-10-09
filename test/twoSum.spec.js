var twoSum = require('../exercises/twoSum');
var expect = require('chai').expect;


describe("The function twoSum", function () {
    var inputs,
        target;
    before(function () {
        inputs = [3,2,4];
        target = 6;
    });
    it("should return indices of the two numbers such that they add up to the target", function () {
        expected = [2,3];
        expect(twoSum(inputs, target)).to.be.eql(expected);
    });
});
