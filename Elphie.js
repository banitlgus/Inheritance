class Green extends Magic {
    constructor(position) {
        super(position);
    }

    show() {
        let angle = map(this.position.x,0,width,0,TWO_PI*2);

        rectMode(CENTER);
        fill(random(0,100), random(100,255), random(0,100), this.lifespan);

        push()
        translate(this.position.x, this.position.y);
        rotate(angle);
        square(0,0,12);
        pop();
        
    }

    static addNoise() {
        let noiseScale = 0.02;

        for (let y = 0; y < height; y +=4) {
            for (let x = 0; x < width; x +=4) {
                let c = noise(x*noiseScale, y*noiseScale);
                fill(0, 120+c*50, 0, 1.5);
                rect(x, y, 12);

            }
        }
    }
}