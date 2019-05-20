import chai from 'chai';
import arrayToStringTransformer from './';

const { expect } = chai;

describe('Array to String transformer test', () => {
    it('1', async () => {
        expect(await arrayToStringTransformer([1,2,3,4,5,6,7,8])).to.equal('1-8');
    });

    it('2', async () => {
        expect(await arrayToStringTransformer([1,3,4,5,6,7,8])).to.equal('1,3-8');
    });

    it('3', async () => {
        expect(await arrayToStringTransformer([1,3,4,5,6,7,8,10,11,12])).to.equal('1,3-8,10-12');
    });

    it('4', async () => {
        expect(await arrayToStringTransformer([1,2,3])).to.equal('1-3');
    });

    it('5', async () => {
        expect(await arrayToStringTransformer([1,2])).to.equal('1,2');
    });

    it('6', async () => {
        expect(await arrayToStringTransformer([1,2,4])).to.equal('1,2,4');
    });

    it('7', async () => {
        expect(await arrayToStringTransformer([1,2,4,5,6])).to.equal('1,2,4-6');
    });

    it('8', async () => {
        expect(await arrayToStringTransformer([1,2,3,7,8,9,15,17,19,20,21])).to.equal('1-3,7-9,15,17,19-21');
    });

    it('9', async () => {
        expect(await arrayToStringTransformer([1,2,3,4,5,6,100,1091,1999,2000,2001,2002])).to.equal('1-6,100,1091,1999-2002');
    });

    it('10', async () => {
        expect(await arrayToStringTransformer([1])).to.equal('1');
    });

    it('11', async () => {
        expect(await arrayToStringTransformer([1,3,5,7,9,11])).to.equal('1,3,5,7,9,11');
    });
});


