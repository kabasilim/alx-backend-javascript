const chai = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token")

const expect = chai.expect;

describe("getPaymentTokenFromAPI", function() {
  it("test successful response from an API", function(done) {
      getPaymentTokenFromAPI(true).then((data) => {
        expect(data.data).to.equal('Successful response from the API');
        expect(data).to.deep.equal({data: 'Successful response from the API'});
        done();
      }).catch(done)
  });
});
