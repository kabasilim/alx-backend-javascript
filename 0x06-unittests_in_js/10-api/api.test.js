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

describe("login page", function() {
  it("tests correct output", function(done) {
    const data = { "userName": "Betty" }
    request.post('http://localhost:7865/login', {json: data}, (err, res, body) => {
      if (res && body) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      }
    });
  });
});

describe("available_payments page", function() {
  it("tests correct output", function(done) {
    request.get('http://localhost:7865/available_payments', (err, res, body) => {
      if (res && body) {
        expect(res.statusCode).to.equal(200);
        const data = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        };
        expect(JSON.parse(body)).to.deep.equal(data);
        done();
      }
    });
  });
});
