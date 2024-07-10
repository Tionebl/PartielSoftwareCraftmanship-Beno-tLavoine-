const assert = require('chai').assert;
const Carte = require('../src/classes/Carte');
const Explorateur = require('../src/classes/Explorateur');
const Ressource = require('../src/classes/Ressource');
const Survivant = require('../src/classes/Survivant');
const Zombie = require('../src/classes/Zombie');

describe('Explorateur', () => {
    it('devrait avancer le survivant', () => {
        const carte = new Carte(10);
        const survivant = new Survivant(5, 5, 'nord', 100);
        const zombies = [];
        const explorateur = new Explorateur(carte, survivant, zombies);
        explorateur.explorer('avancer');
        assert.strictEqual(survivant.y, 4);
    });

    it('devrait ajouter une ressource à l\'inventaire du survivant', () => {
        const carte = new Carte(10);
        const survivant = new Survivant(5, 5, 'nord', 100);
        const ressource = new Ressource('nourriture');
        carte.ajouterElement(5, 4, ressource);
        const zombies = [];
        const explorateur = new Explorateur(carte, survivant, zombies);
        explorateur.explorer('avancer');
        assert.include(survivant.inventaire, ressource);
    });

    it('devrait réduire la santé du survivant lors de la rencontre avec un zombie', () => {
        const carte = new Carte(10);
        const survivant = new Survivant(5, 5, 'nord', 100);
        const zombie = new Zombie(5, 4);
        carte.ajouterElement(5, 4, zombie);
        const zombies = [zombie];
        const explorateur = new Explorateur(carte, survivant, zombies);
        explorateur.explorer('avancer');
        assert.strictEqual(survivant.sante, 80);
    });

    it('devrait tuer le survivant s\'il sort de la carte', () => {
        const carte = new Carte(10);
        const survivant = new Survivant(0, 0, 'nord', 100);
        const zombies = [];
        const explorateur = new Explorateur(carte, survivant, zombies);
        explorateur.explorer('avancer');
        assert.strictEqual(survivant.sante, 0);
    });
});
