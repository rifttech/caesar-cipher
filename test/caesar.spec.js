import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
import Caesar from '../lib';
describe('Caesar', function() {
  describe('#cipher', function() {
    it("I LOVE YOU -> L ORYH BRX", function() {
      let caesar = new Caesar(3);
      let seq = 'I LOVE YOU';
      assert.equal('L ORYH BRX', caesar.cipher(seq));
    });
  });

  describe('#decipher', function() {
    it("L ORYH BRX -> I LOVE YOU", function() {
      let caesar = new Caesar(3);
      let seq = 'L ORYH BRX';
      assert.equal('I LOVE YOU', caesar.decipher(seq));
    });
  });
});
