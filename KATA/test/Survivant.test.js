const assert = require('chai').assert;
const Survivant = require('../src/classes/Survivant');
const Ressource = require('../src/classes/Ressource');

describe('Survivant', () => {
    it('devrait avancer selon son orientation', () => {
        const survivant = new Survivant(5, 5, 'nord', 100);
        survivant.avancer();
        assert.strictEqual(survivant.x, 5);
        assert.strictEqual(survivant.y, 4);
    });

    it('devrait tourner à gauche', () => {
        const survivant = new Survivant(5, 5, 'nord', 100);
        survivant.tournerGauche();
        assert.strictEqual(survivant.orientation, 'ouest');
    });

    it('devrait tourner à droite', () => {
        const survivant = new Survivant(5, 5, 'nord', 100);
        survivant.tournerDroite();
        assert.strictEqual(survivant.orientation, 'est');
    });

    it('devrait perdre de la santé', () => {
        const survivant = new Survivant(5, 5, 'nord', 100);
        survivant.perdreSante(20);
        assert.strictEqual(survivant.sante, 80);
    });

    it('devrait ajouter une ressource à l\'inventaire', () => {
        const survivant = new Survivant(5, 5, 'nord', 100);
        const ressource = new Ressource('nourriture');
        survivant.ajouterRessource(ressource);
        assert.include(survivant.inventaire, ressource);
    });
});