class Particle {
    constructor(position) {
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(random(-1, 1), random(-1, 0));
        this.position = position.copy();
        this.lifespan = 300;
    }

    run() {
        this.update();
        this.display();
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.lifespan -= 2;
        this.acceleration.mult(0);
    }

    addForce(aForce) {
        this.acceleration.add(aForce);
    }

    display() {
        fill(random(100,255), random(100,255), random(100,255), this.lifespan);
        ellipse(this.position.x, this.position.y, random(1,10));
    }

    isDead() {
        return this.lifespan < 0;
    }
}