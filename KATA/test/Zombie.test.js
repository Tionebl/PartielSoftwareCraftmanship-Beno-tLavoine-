const assert = require('chai').assert;
const Zombie = require('../src/classes/Zombie');

describe('Zombie', () => {
    it('devrait se déplacer aléatoirement dans les limites de la carte', () => {
        const zombie = new Zombie(5, 5);
        const tailleCarte = 10;
        zombie.deplacerAleatoirement(tailleCarte);
        assert.isAtLeast(zombie.x, 0);
        assert.isAtMost(zombie.x, tailleCarte - 1);
        assert.isAtLeast(zombie.y, 0);
        assert.isAtMost(zombie.y, tailleCarte - 1);
    });
});
