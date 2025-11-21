class Pink extends Magic {
    constructor(position) {
        super(position);
        this.velocity = createVector(random(-1, 1), random(-1, 1));
    }

    show() {
         fill(255, random(100,200), random(100,250), this.lifespan);
        ellipse(this.position.x, this.position.y, random(1,12));
    }
}