const chai = require("chai");
const sinon = require("sinon");
const Utils = require("./utils")
const sendPaymentRequestToApi = require("./3-payment")

const expect = chai.expect;

describe("sendPaymentRequestToApi", function() {
  it("should test if Utils.calculateNumber was used", function() {
    const result = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20)
    expect(result.getCall(0).args[0]).to.equal('SUM');
    expect(result.getCall(0).args[1]).to.equal(100);
    expect(result.getCall(0).args[2]).to.equal(20);
    expect(result.withArgs('SUM', 100, 20).calledOnce).to.be.true;
    Utils.calculateNumber.restore()
  });
});
