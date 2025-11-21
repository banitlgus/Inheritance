class Magic {
    constructor(position) {
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(random(-1, 1), random(-1, 0));
        this.position = position.copy();
        this.lifespan = 300;
    }

    run() {
        this.update();
        this.show();
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

    isDead() {
        return this.lifespan < 0;
    }
}