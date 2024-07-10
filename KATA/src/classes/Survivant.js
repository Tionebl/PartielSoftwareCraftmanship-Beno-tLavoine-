class Survivant {
    constructor(x, y, orientation, sante) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
        this.sante = sante;
        this.inventaire = [];
    }

    avancer() {
        switch (this.orientation) {
            case 'nord':
                this.y--;
                break;
            case 'sud':
                this.y++;
                break;
            case 'est':
                this.x++;
                break;
            case 'ouest':
                this.x--;
                break;
        }
    }

    tournerGauche() {
        const orientations = ['nord', 'ouest', 'sud', 'est'];
        this.orientation = orientations[(orientations.indexOf(this.orientation) + 1) % 4];
    }

    tournerDroite() {
        const orientations = ['nord', 'est', 'sud', 'ouest'];
        this.orientation = orientations[(orientations.indexOf(this.orientation) + 1) % 4];
    }

    ajouterRessource(ressource) {
        this.inventaire.push(ressource);
    }

    perdreSante(valeur) {
        this.sante -= valeur;
    }
}

module.exports = Survivant;
