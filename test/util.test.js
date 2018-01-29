
import {transformStringToHex} from '../util.js';
import {constrain} from '../util.js';
import chai from "chai"

describe('Test transformStringToHex', function () {

	it('should return HEX for str 1', function () {
		chai.expect(transformStringToHex("#123456")).to.equal(parseInt( "123456", 16 ));
	});

	it('should return null for empty string', function () {
		chai.expect(transformStringToHex("")).to.equal(null);
	});

	it('should return null for invalid string', function () {
		chai.expect(transformStringToHex("123456")).to.equal(null);
	});

});

describe('Test constrain', function () {

	var min = 10;
	var max = 100;

	it('should return min for input < min', function () {
		chai.expect(constrain(9, min, max)).to.equal(min);
	});

	it('should return max for input > max', function () {
		chai.expect(constrain(101, min, max)).to.equal(max);
	});

	it('should return value for min < value < max', function () {
		chai.expect(constrain(11, min, max)).to.equal(11);
	});
  
});

