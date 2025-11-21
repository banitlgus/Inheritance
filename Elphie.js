class Green extends Particle {
    constructor(position) {
        super(position);
    }

    display() {
        let angle = map(this.position.x,0,width,0,TWO_PI*2);

        rectMode(CENTER);
        fill(random(0,100), random(100,255), random(0,100), this.lifespan);

        push()
        translate(this.position.x, this.position.y);
        rotate(angle);
        square(0,0,12);
        pop();
        
    }
}