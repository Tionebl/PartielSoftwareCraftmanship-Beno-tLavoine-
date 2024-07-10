const Ressource = require('./Ressource'); 
const Zombie = require('./Zombie');

class Explorateur {
    constructor(carte, survivant, zombies) {
        this.carte = carte;
        this.survivant = survivant;
        this.zombies = zombies;
    }

    explorer(commande) {
        switch (commande) {
            case 'avancer':
                this.survivant.avancer();
                break;
            case 'tourner à gauche':
                this.survivant.tournerGauche();
                break;
            case 'tourner à droite':
                this.survivant.tournerDroite();
                break;
        }

        this.verifierPosition();
    }

    verifierPosition() {
        const x = this.survivant.x;
        const y = this.survivant.y;

        if (x < 0 || x >= this.carte.taille || y < 0 || y >= this.carte.taille) {
            this.survivant.perdreSante(this.survivant.sante);
        }

        const element = this.carte.obtenirElement(x, y);
        if (element instanceof Ressource) {
            this.survivant.ajouterRessource(element);
        } else if (element instanceof Zombie) {
            this.rencontrerZombie();
        }

        this.deplacerZombies();
    }

    rencontrerZombie() {
        this.survivant.perdreSante(20);
    }

    deplacerZombies() {
        this.zombies.forEach(zombie => zombie.deplacerAleatoirement(this.carte.taille));
    }
}

module.exports = Explorateur;
