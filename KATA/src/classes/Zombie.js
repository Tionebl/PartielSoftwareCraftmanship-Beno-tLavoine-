

class Zombie {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    deplacerAleatoirement(taille) {
        const directions = [
            { dx: 0, dy: -1 },
            { dx: 0, dy: 1 },
            { dx: -1, dy: 0 },
            { dx: 1, dy: 0 }
        ];
        const direction = directions[Math.floor(Math.random() * directions.length)];
        this.x = Math.max(0, Math.min(taille - 1, this.x + direction.dx));
        this.y = Math.max(0, Math.min(taille - 1, this.y + direction.dy));
    }
}

module.exports = Zombie;
