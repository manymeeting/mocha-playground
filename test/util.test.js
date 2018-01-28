
import {transformStringToHex} from '../util.js';
import chai from '../chai.js';
import mocha from '../mocha.js';

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

