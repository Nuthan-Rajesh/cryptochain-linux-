const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {
    it('generates a SHA-256 hashed output', () => {
        expect(cryptoHash('block'))
            .toEqual('e7cb19a5f148e6ec1664df15935013f7ca50f7006f4c2cba9b6f9151bda2dc4a')
    });

    it('produces the same hash with same input arguments in any order', () => {
       expect(cryptoHash('one', 'two', 'three')).toEqual(cryptoHash('three', 'one', 'two'));
    });

    it('produces a unique hash when the properties are changed in input', () => {
        const block = {};
        const originalHash = cryptoHash(block);
        block['a'] = 'a';
        expect(cryptoHash(block)).not.toEqual(originalHash);
    });
});