const Carte = require('./classes/Carte');
const Explorateur = require('./classes/Explorateur');
const Ressource = require('./classes/Ressource');
const Survivant = require('./classes/Survivant');
const Zombie = require('./classes/Zombie');

const carte = new Carte(10);
const survivant = new Survivant(5, 5, 'nord', 100);
const zombies = [
    new Zombie(2, 3),
    new Zombie(7, 8)
];

carte.ajouterElement(2, 3, zombies[0]);
carte.ajouterElement(7, 8, zombies[1]);
carte.ajouterElement(4, 4, new Ressource('nourriture'));
carte.ajouterElement(6, 6, new Ressource('eau'));


const explorateur = new Explorateur(carte, survivant, zombies);


explorateur.explorer('avancer');
explorateur.explorer('tourner à gauche');
explorateur.explorer('avancer');


console.log(`Position du survivant : (${survivant.x}, ${survivant.y})`);
console.log(`Orientation du survivant : ${survivant.orientation}`);
console.log(`Santé du survivant : ${survivant.sante}`);
console.log('Inventaire du survivant :', survivant.inventaire.map(ressource => ressource.type));
