import chai from 'chai';
import x from './app';

chai.Should();

describe('x', () => {
    it('should fail', () => {
        x().should.be.equal(2);
    });
});
