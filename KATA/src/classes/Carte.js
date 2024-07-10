class Carte {
    constructor(taille) {
        this.taille = taille;
        this.grille = Array.from({ length: taille }, () => Array(taille).fill(null));
    }

    ajouterElement(x, y, element) {
        this.grille[y][x] = element;
    }

    obtenirElement(x, y) {
        if (x < 0 || x >= this.taille || y < 0 || y >= this.taille) {
            return null;
        }
        return this.grille[y][x];
    }
}

module.exports = Carte;