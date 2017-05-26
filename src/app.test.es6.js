import chai from 'chai';
import $ from 'jquery';
import x from './app';

chai.Should();

describe('x', () => {
    it('should return 1', async () => {
        await x().should.be.equal(1);
    });
});

if (typeof window !== 'undefined') {

    describe('html', () => {
        var val1, val2, el;

        beforeEach(async () => {
            val1 = Math.random();
            val2 = Math.random();
            el = $("<h1>" + val1 + ' + ' + val2 + ' = ' + (val1 + val2) + "</h1>");
            await el.prependTo("body");
        });

        afterEach(async () => {
            await el.remove();
        });

        for (var i = 0; i < 1000; i++) {

            it('should add h1', async () => {
                await el.text().should.have.string((val1 + val2).toString());
            });
        }
    });
}
