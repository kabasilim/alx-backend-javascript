const { expect } = require('chai');
const request = require('request');

describe("api index page", function() {
  it("test status code", function(done) {
    request.get('http://localhost:7865/', (err, res, body) => {
      if (res) {
        expect(res.statusCode).to.equal(200);
        done();
      }
    });
  });
  it("test correct output", function(done) {
    request.get('http://localhost:7865/', (err, res, body) => {
      if (body) {
        expect(body).to.equal('Welcome to the payment system');
        done();
      }
    });
  });
});

describe("api cart page", function() {
  it("test valid number param", function(done) {
    request.get('http://localhost:7865/cart/12', (err, res, body) => {
      if (res && body) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      }
    });
  });
  it("test non-number param", function(done) {
    request.get('http://localhost:7865/cart/hello', (err, res, body) => {
      if (res) {
        expect(res.statusCode).to.equal(404);
        done();
      }
    });
  });
});
