
import sum from '../sum.js';
import chai from '../chai.js';
import mocha from '../mocha.js';

// mocha.setup('bdd');
// mocha.checkLeaks();
// mocha.run();

describe('sum', function () {
  it('should return sum of arguments', function () {
    chai.expect(sum(1, 2)).to.equal(3);
  });
});

