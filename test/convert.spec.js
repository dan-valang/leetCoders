var expect = require('chai').expect;
var convert = require('../exercises/convert');

describe("convert", function () {
    var text, rows;
    before(function () {
        text = 'PAYPALISHIRING';
        rows = 3;
    });
    it("should take a string and make this conversion given a number of rows", function () {
        var expected = 'PAHNAPLSIIGYIR';
        expect(convert(text, rows)).to.be.equal(expected);
    });
});
