var expect = chai.expect;

// A polyfill to support running these test via grunt / mocha cli
if (!Function.prototype.bind) {
  Function.prototype.bind = function () {
    var fn = this,
      args = Array.prototype.slice.call(arguments),
      context = args.shift();

    return function () {
      fn.apply(context, args);
    };
  };
}

describe('Calculator', function() {

  before(function () {
    // if being run from Karma, inject the html test fixture in to the document body
    if (window.__html__) {
      document.body.innerHTML = window.__html__['test/index.html'];
    }

    this.calculator = new Calculator();
  });

  describe('Adding', function() {

    it('should filter the input', function () {
      var filterSpy = sinon.spy(this.calculator, '_filter');
      this.calculator.add(2, 5);
      expect(filterSpy).to.have.been.called;
      filterSpy.restore();
    });

    it('should throw an error if a non-numeric value is used', function () {
      expect(this.calculator.add.bind(this.calculator, 2, 'a')).to.throw();
    });

    it('should throw an error if less than 2 values are provided', function () {
      expect(this.calculator.add.bind(this.calculator, 2)).to.throw();
    });

    it('should add a series of number arguments together', function () {
      expect(this.calculator.add(2, 5)).to.equal(2 + 5);
    });
  });
});
