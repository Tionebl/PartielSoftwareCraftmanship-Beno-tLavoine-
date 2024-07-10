const assert = require('chai').assert;
const Carte = require('../src/classes/Carte');
const Ressource = require('../src/classes/Ressource');

describe('Carte', () => {
    it('devrait ajouter et obtenir un élément sur la carte', () => {
        const carte = new Carte(10);
        const ressource = new Ressource('nourriture');
        carte.ajouterElement(2, 3, ressource);
        assert.strictEqual(carte.obtenirElement(2, 3), ressource);
    });

    it('devrait retourner undefined pour une position sans élément', () => {
        const carte = new Carte(10);
        assert.isUndefined(carte.obtenirElement(5, 5));
    });
});
