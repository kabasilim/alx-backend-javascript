const chai = require("chai");
const sinon = require("sinon");
const Utils = require("./utils")
const sendPaymentRequestToApi = require("./4-payment")

const expect = chai.expect;

describe("sendPaymentRequestToApi", function() {
  it("should test if Utils.calculateNumber was used", function() {
    const resultStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20)
    expect(resultStub.getCall(0).args[0]).to.equal('SUM');
    expect(resultStub.getCall(0).args[1]).to.equal(100);
    expect(resultStub.getCall(0).args[2]).to.equal(20);
    expect(resultStub.withArgs('SUM', 100, 20).calledOnce).to.be.true;
    expect(spy.withArgs('The total is: 10').calledOnce).to.be.true;
    Utils.calculateNumber.restore()
    console.log.restore()
  });
});
