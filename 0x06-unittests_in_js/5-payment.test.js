const chai = require("chai");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment")

const expect = chai.expect;

describe("sendPaymentRequestToApi", function() {
  let spy;
  beforeEach(function() {
    spy = sinon.spy(console, 'log');
  });
  afterEach(function() {
    console.log.restore();
  });

  it("should test if the correct output is logged in the console", function() {
    sendPaymentRequestToApi(100, 20)
    expect(spy.withArgs('The total is: 120').calledOnce).to.be.true;
  });
  it("should test if the correct output is logged in the console", function() {
    sendPaymentRequestToApi(10, 10)
    expect(spy.withArgs('The total is: 20').calledOnce).to.be.true;
  });
});
