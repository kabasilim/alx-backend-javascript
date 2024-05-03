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
