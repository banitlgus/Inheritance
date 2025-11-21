class Pink extends Particle {
    constructor(position) {
        super(position);
    }

    display() {
         fill(255, random(100,200), random(100,200), this.lifespan);
        ellipse(this.position.x, this.position.y, random(1,12));
    }
}