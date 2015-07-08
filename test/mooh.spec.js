var mooh = require('../index');
var sinon = require('sinon');
var assert = require('chai').assert;

describe('Mooh tests', function() {
  beforeEach(function() {
    sinon.spy(console, 'log');
  });
  afterEach(function() {
    console.log.restore();
  });

  it('should say Mooooh!', function() {
    mooh.mooh();

    assert.equal(console.log.callCount, 10);
    sinon.assert.calledWithMatch(console.log, 'Mooooh!');
  });
});
