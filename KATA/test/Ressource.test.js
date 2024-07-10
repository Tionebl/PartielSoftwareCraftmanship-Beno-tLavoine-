const assert = require('chai').assert;
const Ressource = require('../src/classes/Ressource');

describe('Ressource', () => {
    it('devrait créer une ressource avec le type correct', () => {
        const ressource = new Ressource('nourriture');
        assert.strictEqual(ressource.type, 'nourriture');
    });
});
