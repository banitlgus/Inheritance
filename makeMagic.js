class makeMagic {
    constructor(position) {
        this.origin = position.copy();
        this.particles = [];
    }

    spellMagic() {
        if (mouseIsPressed) {
            this.particles.push(new Pink(this.origin)); 
        if (keyIsPressed) {
            this.particles.push(new Green(this.origin));
            Green.addNoise();
            }
        }
        
    }

    setPosition(position) {
        this.origin = position.copy();
    }

    run() {
        for (let i = this.particles.length-1; i >= 0; i--) {
            let p = this.particles[i];
            p.run();
            if (p.isDead()) {
                this.particles.splice(i, 1);
            }
        }
    }

    addForce(aForce) {
        for (let p of this.particles) {
            p.addForce(aForce);
        }
    }
}