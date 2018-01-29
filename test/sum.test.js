
import sum from '../sum.js';
import chai from "chai"

describe('Test Sum', function () {
  it('should return sum of arguments 1', function () {
    chai.expect(sum(1, 2)).to.equal(3);
  });

  it('should return sum of arguments 2', function () {
    chai.expect(sum(2, 3)).to.equal(5);
  });

  
});

